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

// 100% Real Fallback Data extracted directly from her actual channel
export const FALLBACK_LATEST_VLOG: YouTubeVideoItem = {
  id: "f_u87MqrW2I",
  title: "Ep 33: Escaping the matrix - Solo in south Thailand, Koh Phanghan | day in a life & side questing",
  link: "https://www.youtube.com/watch?v=f_u87MqrW2I",
  thumbnail: "https://i.ytimg.com/vi/f_u87MqrW2I/hqdefault.jpg",
  published: "2026-09-18T12:00:00Z",
  description: "Solo in south Thailand, Koh Phangan. Day in the life, motorbike exploring, hostel friends, and figuring out life on a one-way ticket.",
  isShort: false
};

export const FALLBACK_RECENT_VLOGS: YouTubeVideoItem[] = [
  {
    id: "f_u87MqrW2I",
    title: "Ep 33: Escaping the matrix - Solo in south Thailand, Koh Phanghan | day in a life & side questing",
    link: "https://www.youtube.com/watch?v=f_u87MqrW2I",
    thumbnail: "https://i.ytimg.com/vi/f_u87MqrW2I/hqdefault.jpg",
    published: "2026-09-18T12:00:00Z",
    description: "Solo in south Thailand, Koh Phangan.",
    isShort: false
  },
  {
    id: "83VuOWqmxkM",
    title: "Ep 32: Escaping the Matrix - In Thailands most controversial & smallest island right now | Koh Tao",
    link: "https://www.youtube.com/watch?v=83VuOWqmxkM",
    thumbnail: "https://i.ytimg.com/vi/83VuOWqmxkM/hqdefault.jpg",
    published: "2026-09-15T18:00:00Z",
    description: "Exploring Koh Tao island life.",
    isShort: false
  },
  {
    id: "Ey7yfboofrQ",
    title: "Ep 31: Escaping the matrix: 12 hours of travel, floating markets & leaving Bangkok for Koh Tao 🏝️",
    link: "https://www.youtube.com/watch?v=Ey7yfboofrQ",
    thumbnail: "https://i.ytimg.com/vi/Ey7yfboofrQ/hqdefault.jpg",
    published: "2026-09-12T18:00:00Z",
    description: "Overnight travel journey to the islands.",
    isShort: false
  },
  {
    id: "CI4XrTusJ_c",
    title: "Ep 30: Escaping the matrix - Exploring Thailands ancient capital: Ayutthaya temple",
    link: "https://www.youtube.com/watch?v=CI4XrTusJ_c",
    thumbnail: "https://i.ytimg.com/vi/CI4XrTusJ_c/hqdefault.jpg",
    published: "2026-09-08T18:00:00Z",
    description: "Exploring Ayutthaya temples.",
    isShort: false
  }
];

export const FALLBACK_SHORTS: YouTubeVideoItem[] = [
  {
    id: "-yMQXCug-UA",
    title: "#views #thailand #travelling #roadtrip",
    link: "https://www.youtube.com/shorts/-yMQXCug-UA",
    thumbnail: "https://i.ytimg.com/vi/-yMQXCug-UA/hqdefault.jpg",
    published: "2026-08-26T22:00:12+00:00",
    description: "Life on the road",
    isShort: true
  },
  {
    id: "Kx6phvvPUU0",
    title: "Travel reality with Teegs",
    link: "https://www.youtube.com/shorts/Kx6phvvPUU0",
    thumbnail: "https://i.ytimg.com/vi/Kx6phvvPUU0/hqdefault.jpg",
    published: "2026-08-27T03:00:33+00:00",
    description: "Travel snippets",
    isShort: true
  },
  {
    id: "csepEFzO5Zw",
    title: "carrot on the moon in Pai",
    link: "https://www.youtube.com/shorts/csepEFzO5Zw",
    thumbnail: "https://i.ytimg.com/vi/csepEFzO5Zw/hqdefault.jpg",
    published: "2026-08-26T16:00:39+00:00",
    description: "Exploring Pai",
    isShort: true
  },
  {
    id: "0fU-Do8DX6A",
    title: "#elephant #thailand #skull #theblackhouse #travelling",
    link: "https://www.youtube.com/shorts/0fU-Do8DX6A",
    thumbnail: "https://i.ytimg.com/vi/0fU-Do8DX6A/hqdefault.jpg",
    published: "2026-08-26T16:59:26+00:00",
    description: "Travel moments",
    isShort: true
  }
];

/**
 * Parses channel videos directly from @Itsnottegxnn/videos tab
 * Bypasses legacy RSS 15-item limit so recent uploads like Ep 33 are always surfaced.
 */
export async function parseYouTubeVideos(): Promise<{
  latestVideo: YouTubeVideoItem;
  recentVideos: YouTubeVideoItem[];
  shorts: YouTubeVideoItem[];
}> {
  try {
    const res = await fetch('https://www.youtube.com/@Itsnottegxnn/videos', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      next: { revalidate: 300 } // 5-minute cache
    });

    if (!res.ok) {
      return {
        latestVideo: FALLBACK_LATEST_VLOG,
        recentVideos: FALLBACK_RECENT_VLOGS,
        shorts: FALLBACK_SHORTS
      };
    }

    const html = await res.text();
    const jsonMatch = html.match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/) || html.match(/ytInitialData = (\{[\s\S]*?\});<\/script>/);

    if (jsonMatch) {
      const data = JSON.parse(jsonMatch[1]);
      const tabs = data?.contents?.twoColumnBrowseResultsRenderer?.tabs;
      const videosTab = tabs?.find((t: { tabRenderer?: { title?: string } }) => t?.tabRenderer?.title === 'Videos');
      const contents = videosTab?.tabRenderer?.content?.richGridRenderer?.contents || [];

      const parsedVideos: YouTubeVideoItem[] = [];
      for (const item of contents) {
        const lockup = item?.richItemRenderer?.content?.lockupViewModel;
        if (lockup) {
          const contentId = lockup.contentId;
          const metadata = lockup.metadata?.lockupMetadataViewModel;
          const title = metadata?.title?.content;
          if (contentId && title) {
            parsedVideos.push({
              id: contentId,
              title,
              link: `https://www.youtube.com/watch?v=${contentId}`,
              thumbnail: `https://i.ytimg.com/vi/${contentId}/hqdefault.jpg`,
              published: new Date().toISOString(),
              description: title,
              isShort: false
            });
          }
        }
      }

      if (parsedVideos.length > 0) {
        return {
          latestVideo: parsedVideos[0],
          recentVideos: parsedVideos.slice(0, 6),
          shorts: FALLBACK_SHORTS
        };
      }
    }

    // Secondary fallback: parse XML RSS
    const rssRes = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CREATOR_DATA.youtubeChannelId}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 300 }
    });

    if (rssRes.ok) {
      const xml = await rssRes.text();
      const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
      const entries: string[] = [];
      let match: RegExpExecArray | null;
      while ((match = entryRegex.exec(xml)) !== null) {
        entries.push(match[1]);
      }

      const rssItems: YouTubeVideoItem[] = entries.map((entry) => {
        const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>(.*?)<\/title>/);
        const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
        const descMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);
        const linkMatch = entry.match(/<link[^>]*href="([^"]*)"/);

        const id = idMatch ? idMatch[1] : '';
        const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : 'Travel Vlog';
        const published = publishedMatch ? publishedMatch[1] : new Date().toISOString();
        const description = descMatch ? descMatch[1] : '';
        const href = linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${id}`;
        const isShort = href.includes('/shorts/') || /#shorts|#short/i.test(title);

        return {
          id,
          title,
          link: href,
          thumbnail: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : FALLBACK_LATEST_VLOG.thumbnail,
          published,
          description,
          isShort
        };
      });

      const standardVideos = rssItems.filter(v => !v.isShort);
      const shortsVideos = rssItems.filter(v => v.isShort);

      return {
        latestVideo: standardVideos[0] || FALLBACK_LATEST_VLOG,
        recentVideos: standardVideos.length > 0 ? standardVideos : FALLBACK_RECENT_VLOGS,
        shorts: shortsVideos.length > 0 ? shortsVideos : FALLBACK_SHORTS
      };
    }

    return {
      latestVideo: FALLBACK_LATEST_VLOG,
      recentVideos: FALLBACK_RECENT_VLOGS,
      shorts: FALLBACK_SHORTS
    };
  } catch {
    return {
      latestVideo: FALLBACK_LATEST_VLOG,
      recentVideos: FALLBACK_RECENT_VLOGS,
      shorts: FALLBACK_SHORTS
    };
  }
}
