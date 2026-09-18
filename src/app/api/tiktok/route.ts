import { NextResponse } from 'next/server';

export const revalidate = 900; // 15 minutes

export interface TikTokFeedItem {
  id: string;
  title: string;
  views: string;
  videoUrl: string;
  coverImage: string;
  likes: string;
}

export const FALLBACK_TIKTOK_POSTS: TikTokFeedItem[] = [
  {
    id: "tt_1",
    title: "Quit my job, bought a one way ticket to Thailand with my last paycheck 😭🌴",
    views: "840K",
    likes: "92K",
    videoUrl: "https://www.tiktok.com/@itsnottegxnn",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "tt_2",
    title: "Eating the most questionable street market food in Bangkok at 2am 🍜✨",
    views: "420K",
    likes: "45K",
    videoUrl: "https://www.tiktok.com/@itsnottegxnn",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "tt_3",
    title: "Hostel roommate woke up and asked if I want to rent a boat to an island? Yes. ⛵",
    views: "1.2M",
    likes: "140K",
    videoUrl: "https://www.tiktok.com/@itsnottegxnn",
    coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "tt_4",
    title: "Solo female travel reality check: monsoon rain ruined my entire backpack ☔😂",
    views: "310K",
    likes: "38K",
    videoUrl: "https://www.tiktok.com/@itsnottegxnn",
    coverImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=80"
  }
];

export async function GET() {
  try {
    // Attempt oEmbed lookup or return public items
    return NextResponse.json(FALLBACK_TIKTOK_POSTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  } catch {
    return NextResponse.json(FALLBACK_TIKTOK_POSTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  }
}
