import { VISITED_PRODUCTION_URL } from '@/constants'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: VISITED_PRODUCTION_URL + 'sitemap.xml',
  }
}