import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://playitaplebes.com',
      lastModified: '2025-01-01',
    },
    {
      url: 'https://playitaplebes.com/menu',
      lastModified: '2025-01-01',
    },
    {
      url: 'https://playitaplebes.com/nosotros',
      lastModified: '2025-01-01',
    },
  ]
}
