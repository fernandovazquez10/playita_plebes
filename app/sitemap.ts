import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://playitaplebes.github.io',
      lastModified: '2025-01-01',
    },
    {
      url: 'https://playitaplebes.github.io/menu',
      lastModified: '2025-01-01',
    },
    {
      url: 'https://playitaplebes.github.io/nosotros',
      lastModified: '2025-01-01',
    },
  ]
}
