/**
 * Join truthy class names into a single className string.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Whether a URL should open in a new tab (http/https).
 * Non-http(s) destinations such as `mailto:` stay in the current tab.
 */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url)
}
