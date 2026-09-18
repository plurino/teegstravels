import { CREATOR_DATA } from '@/config/creator';
import { YouTubeVideoItem } from './rss';

/**
 * Autonomous SEO & Schema.org JSON-LD Builders
 */

export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${CREATOR_DATA.canonicalUrl}/#person`,
    name: CREATOR_DATA.name,
    alternateName: [
      'Teegs',
      'Teegs Travels',
      'itsnottegxnn',
      'teganjohnson07',
      'Teegs Travel'
    ],
    url: CREATOR_DATA.canonicalUrl,
    image: `${CREATOR_DATA.canonicalUrl}/images/teegs-avatar.png`,
    description: CREATOR_DATA.heroBio,
    jobTitle: 'Solo Travel Creator & Vlogger',
    sameAs: [
      CREATOR_DATA.socials.youtube,
      CREATOR_DATA.socials.tiktok,
      CREATOR_DATA.socials.instagram,
      CREATOR_DATA.funding.buyMeACoffee,
      CREATOR_DATA.funding.paypal
    ]
  };
}

export function getProfilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${CREATOR_DATA.canonicalUrl}/#profile`,
    url: CREATOR_DATA.canonicalUrl,
    name: `${CREATOR_DATA.siteTitle} - Official Hub for ${CREATOR_DATA.name} (${CREATOR_DATA.handle})`,
    mainEntity: {
      '@id': `${CREATOR_DATA.canonicalUrl}/#person`
    }
  };
}

export function getVideoObjectJsonLd(video: YouTubeVideoItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description || `${video.title} - Follow Teegs' solo travel journey on YouTube.`,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.published,
    contentUrl: video.link,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    author: {
      '@type': 'Person',
      name: CREATOR_DATA.name,
      url: CREATOR_DATA.canonicalUrl
    }
  };
}

export function getFaqPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CREATOR_DATA.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
