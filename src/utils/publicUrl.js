/**
 * Absolute URL for files in /public (works on GitHub Pages with base path).
 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.replace(/^\//, '')
  return `${normalizedBase}${cleanPath}`
}
