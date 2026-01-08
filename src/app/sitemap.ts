import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tedxvjit.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    '/',
    '/about',
    '/speakers',
    '/team',
    '/gallery',
    '/2024/speakers',
    '/2024/team',
  ]

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
