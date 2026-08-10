export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url)
}

export function parseJsonArray<T>(raw: string | undefined, fallback: T[]): T[] {
  if (!raw) return fallback
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length > 0) return parsed as T[]
  } catch {
    // invalid JSON in env — use fallback
  }
  return fallback
}
