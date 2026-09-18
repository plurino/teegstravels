import { MetadataRoute } from 'next';
import { CREATOR_DATA } from '@/config/creator';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  return [
    {
      url: CREATOR_DATA.canonicalUrl,
      lastModified: currentDate,
      changeFrequency: 'hourly',
      priority: 1.0
    },
    {
      url: `${CREATOR_DATA.canonicalUrl}/#vlogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${CREATOR_DATA.canonicalUrl}/#shorts`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: `${CREATOR_DATA.canonicalUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${CREATOR_DATA.canonicalUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    }
  ];
}
