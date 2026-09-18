/**
 * YouTube RSS Feed Fetcher & Parser
 * Parses channel uploads via public RSS endpoint with zero API key dependencies.
 */

export interface YouTubeVideoItem {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  published: string;
  description: string;
  views?: string;
  duration?: string;
  isShort?: boolean;
}

export const FALLBACK_LATEST_VLOG: YouTubeVideoItem = {
  id: "dQw4w9WgXcQ", // fallback placeholder id
  title: "I spent my last £500 in Thailand... Solo female travel reality 🇹🇭",
  link: "https://www.youtube.com/@Itsnottegxnn",
  thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop&q=80",
  published: "2026-09-14T18:00:00Z",
  description: "Leaving Bangkok with zero plan, navigating overnight sleeper trains, and figuring out solo life on a one-way ticket.",
  duration: "18:42",
  views: "48K views"
};

export const FALLBACK_SHORTS: YouTubeVideoItem[] = [
  {
    id: "short_1",
    title: "When you miss the last ferry in Koh Samui 😭🌴 #shorts #solotravel",
    link: "https://www.youtube.com/@Itsnottegxnn/shorts",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    published: "2026-09-16T12:00:00Z",
    description: "Chaos at the pier but we made it work!",
    views: "124K",
    isShort: true
  },
  {
    id: "short_2",
    title: "Ordering street food with 0 Thai words 😂🍜 #bangkok #travel",
    link: "https://www.youtube.com/@Itsnottegxnn/shorts",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
    published: "2026-09-15T15:30:00Z",
    description: "The spiciest pad kra pao of my life.",
    views: "89K",
    isShort: true
  },
  {
    id: "short_3",
    title: "Hostel life reality vs Instagram expectations 🎒✨",
    link: "https://www.youtube.com/@Itsnottegxnn/shorts",
    thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=80",
    published: "2026-09-12T10:00:00Z",
    description: "Meeting the sweetest people from around the world.",
    views: "210K",
    isShort: true
  },
  {
    id: "short_4",
    title: "First time renting a motorbike in Vietnam 🛵💨",
    link: "https://www.youtube.com/@Itsnottegxnn/shorts",
    thumbnail: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    published: "2026-09-10T14:15:00Z",
    description: "Surviving Hanoi traffic level: Expert.",
    views: "165K",
    isShort: true
  }
];

export async function parseYouTubeRss(channelIdOrHandle: string): Promise<{
  latestVideo: YouTubeVideoItem;
  shorts: YouTubeVideoItem[];
}> {
  try {
    // If channel id isn't known, YouTube accepts channel_id
    // Public RSS URL format: https://www.youtube.com/feeds/videos.xml?channel_id=...
    // Alternatively for handles: https://www.youtube.com/feeds/videos.xml?user=...
    const url = channelIdOrHandle.startsWith('UC')
      ? `https://www.youtube.com/feeds/videos.xml?channel_id=${channelIdOrHandle}`
      : `https://www.youtube.com/feeds/videos.xml?user=${channelIdOrHandle}`;

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      next: { revalidate: 900 } // 15-minute ISR cache
    });

    if (!res.ok) {
      return { latestVideo: FALLBACK_LATEST_VLOG, shorts: FALLBACK_SHORTS };
    }

    const xml = await res.text();
    
    // Parse entries from XML
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

      const id = idMatch ? idMatch[1] : '';
      const title = titleMatch ? titleMatch[1] : 'Latest Travel Vlog';
      const published = publishedMatch ? publishedMatch[1] : new Date().toISOString();
      const description = descMatch ? descMatch[1] : '';
      const isShort = /#shorts|#short/i.test(title);

      return {
        id,
        title,
        link: id ? `https://www.youtube.com/watch?v=${id}` : 'https://www.youtube.com/@Itsnottegxnn',
        thumbnail: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : FALLBACK_LATEST_VLOG.thumbnail,
        published,
        description,
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
