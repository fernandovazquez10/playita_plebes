import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fernandovazquez10.github.io/playita_plebes',
      lastModified: '2025-01-01',
    },
    {
      url: 'https://fernandovazquez10.github.io/playita_plebes/menu',
      lastModified: '2025-01-01',
    },
    {
      url: 'https://fernandovazquez10.github.io/playita_plebes/nosotros',
      lastModified: '2025-01-01',
    },
  ]
}
