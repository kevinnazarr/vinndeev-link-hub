import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Perf plugin: post-processes the built index.html so that
 * 1. the bundled CSS is inlined into the document — the stylesheet is small
 *    (~17 kB), so this removes the render-blocking CSS request entirely, and
 * 2. the entry JS module is modulepreloaded so it starts fetching as early as
 *    possible.
 */
function perfHtmlPlugin(): Plugin {
  return {
    name: 'perf-html',
    closeBundle() {
      const dist = path.resolve(process.cwd(), 'dist')
      const file = path.join(dist, 'index.html')
      let html = fs.readFileSync(file, 'utf8')

      // Inline the bundled stylesheet.
      html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/, (_, href) => {
        const cssFile = path.join(dist, href.replace(/^\//, ''))
        const css = fs.readFileSync(cssFile, 'utf8')
        return `<style>\n${css}\n</style>`
      })

      // Modulepreload the entry JS.
      html = html.replace(
        /<script type="module" crossorigin src="([^"]+)">/,
        '<link rel="modulepreload" href="$1" />\n    <script type="module" crossorigin src="$1">',
      )

      fs.writeFileSync(file, html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), perfHtmlPlugin()],
})
