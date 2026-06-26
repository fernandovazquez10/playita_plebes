/**
 * Antepone el basePath del sitio a una ruta absoluta de asset.
 *
 * next/image con `unoptimized: true` no agrega el basePath automáticamente,
 * por lo que en GitHub Pages (sitio servido en /playita_plebes/) las imágenes
 * locales deben prefijarse manualmente.
 *
 * - En desarrollo: BASE_PATH = "" → la ruta queda igual.
 * - En producción: BASE_PATH = "/playita_plebes" → "/logo.png" → "/playita_plebes/logo.png".
 *
 * Rutas externas (http...) o que no inician con "/" se devuelven sin cambios.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function assetPath(src: string): string {
  if (!src.startsWith('/')) return src
  return `${BASE_PATH}${src}`
}
