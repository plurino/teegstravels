import { MetadataRoute } from 'next';
import { CREATOR_DATA } from '@/config/creator';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${CREATOR_DATA.siteTitle} - Official Creator Hub`,
    short_name: 'TeegsTravels',
    description: CREATOR_DATA.heroBio,
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d0e',
    theme_color: '#0d0d0e',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ]
  };
}
