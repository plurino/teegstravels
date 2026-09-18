import { MetadataRoute } from 'next';
import { CREATOR_DATA } from '@/config/creator';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot'],
        allow: '/'
      }
    ],
    sitemap: `${CREATOR_DATA.canonicalUrl}/sitemap.xml`,
    host: CREATOR_DATA.canonicalUrl
  };
}
