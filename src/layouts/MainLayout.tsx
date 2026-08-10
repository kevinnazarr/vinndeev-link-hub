import type { ReactNode } from 'react'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
      >
        Lewati ke konten
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
        <div className="vd-grid-drift absolute inset-x-0 -bottom-12 top-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(210,255,40,0.5)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(20,6,90,0.45),transparent)]" />
      </div>

      <main
        id="main"
        className="mx-auto w-full max-w-160 flex-1 px-5 pb-16 pt-16 sm:pt-24"
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}
