import { CREATOR_DATA } from '@/config/creator';

export interface YouTubeVideoItem {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  published: string;
  description: string;
  duration?: string;
  views?: string;
  isShort?: boolean;
}

// 100% Real Fallback Data extracted directly from her actual channel RSS
export const FALLBACK_LATEST_VLOG: YouTubeVideoItem = {
  id: "K7iQqssfvZc",
  title: "Ep 27: Escaping the Matrix - Yap with me, Mental Health struggles, exploring, coffee",
  link: "https://www.youtube.com/watch?v=K7iQqssfvZc",
  thumbnail: "https://i4.ytimg.com/vi/K7iQqssfvZc/hqdefault.jpg",
  published: "2026-08-26T19:00:13+00:00",
  description: "Sorry this ones a bit of a downer, more of a positive upload tomorrow i promise ❤️ Hey! My name's Tegan, I'm 22 and on the 1st of July I quit my job, left my fiancé, lost my second job, lost my apartment and bought a ONE-WAY ticket out of the UK - with only £2,000 to my name.",
  isShort: false
};

export const FALLBACK_SHORTS: YouTubeVideoItem[] = [
  {
    id: "-yMQXCug-UA",
    title: "#views #thailand #travelling #roadtrip",
    link: "https://www.youtube.com/shorts/-yMQXCug-UA",
    thumbnail: "https://i2.ytimg.com/vi/-yMQXCug-UA/hqdefault.jpg",
    published: "2026-08-26T22:00:12+00:00",
    description: "Life on the road",
    isShort: true
  },
  {
    id: "Kx6phvvPUU0",
    title: "Travel reality with Teegs",
    link: "https://www.youtube.com/shorts/Kx6phvvPUU0",
    thumbnail: "https://i4.ytimg.com/vi/Kx6phvvPUU0/hqdefault.jpg",
    published: "2026-08-27T03:00:33+00:00",
    description: "Travel snippets",
    isShort: true
  },
  {
    id: "csepEFzO5Zw",
    title: "carrot on the moon in Pai",
    link: "https://www.youtube.com/shorts/csepEFzO5Zw",
    thumbnail: "https://i4.ytimg.com/vi/csepEFzO5Zw/hqdefault.jpg",
    published: "2026-08-26T16:00:39+00:00",
    description: "Exploring Pai",
    isShort: true
  },
  {
    id: "0fU-Do8DX6A",
    title: "#elephant #thailand #skull #theblackhouse #travelling",
    link: "https://www.youtube.com/shorts/0fU-Do8DX6A",
    thumbnail: "https://i1.ytimg.com/vi/0fU-Do8DX6A/hqdefault.jpg",
    published: "2026-08-26T16:59:26+00:00",
    description: "Travel moments",
    isShort: true
  }
];

export async function parseYouTubeRss(channelId: string = CREATOR_DATA.youtubeChannelId): Promise<{
  latestVideo: YouTubeVideoItem;
  shorts: YouTubeVideoItem[];
}> {
  try {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      next: { revalidate: 900 } // 15 minutes
    });

    if (!res.ok) {
      return { latestVideo: FALLBACK_LATEST_VLOG, shorts: FALLBACK_SHORTS };
    }

    const xml = await res.text();
    
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const entries: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = entryRegex.exec(xml)) !== null) {
      entries.push(match[1]);
    }

    if (entries.length === 0) {
      return { latestVideo: FALLBACK_LATEST_VLOG, shorts: FALLBACK_SHORTS };
    }

    const parsedItems: YouTubeVideoItem[] = entries.map((entry) => {
      const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>(.*?)<\/title>/);
      const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
      const descMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);
      const linkMatch = entry.match(/<link[^>]*href="([^"]*)"/);
      const viewsMatch = entry.match(/views="(\d+)"/);

      const id = idMatch ? idMatch[1] : '';
      const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : 'Travel Vlog';
      const published = publishedMatch ? publishedMatch[1] : new Date().toISOString();
      const description = descMatch ? descMatch[1] : '';
      const href = linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${id}`;
      const isShort = href.includes('/shorts/') || /#shorts|#short/i.test(title);
      const viewsCount = viewsMatch ? parseInt(viewsMatch[1], 10) : undefined;
      const views = viewsCount ? (viewsCount >= 1000 ? `${(viewsCount / 1000).toFixed(1)}K` : `${viewsCount}`) : undefined;

      return {
        id,
        title,
        link: href,
        thumbnail: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : FALLBACK_LATEST_VLOG.thumbnail,
        published,
        description,
        views,
        isShort
      };
    });

    const standardVideos = parsedItems.filter(v => !v.isShort);
    const shortsVideos = parsedItems.filter(v => v.isShort);

    const latestVideo = standardVideos.length > 0 ? standardVideos[0] : (parsedItems[0] || FALLBACK_LATEST_VLOG);
    const shorts = shortsVideos.length > 0 ? shortsVideos : FALLBACK_SHORTS;

    return { latestVideo, shorts };
  } catch {
    return { latestVideo: FALLBACK_LATEST_VLOG, shorts: FALLBACK_SHORTS };
  }
}
