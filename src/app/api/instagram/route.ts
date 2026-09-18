import { NextResponse } from 'next/server';

export const revalidate = 900; // 15 minutes

export interface InstagramPostItem {
  id: string;
  caption: string;
  imageUrl: string;
  permalink: string;
  type: 'photo' | 'reel';
  likes: string;
}

export const FALLBACK_IG_POSTS: InstagramPostItem[] = [
  {
    id: "ig_1",
    caption: "Golden hour in Koh Tao. Can't believe this is my life right now 🥹☀️ #solotravel #thailand",
    imageUrl: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&auto=format&fit=crop&q=80",
    permalink: "https://www.instagram.com/itsnottegxnn",
    type: "photo",
    likes: "14.2K"
  },
  {
    id: "ig_2",
    caption: "Overnight train from Bangkok to Chiang Mai travel diary 🚂✨",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=80",
    permalink: "https://www.instagram.com/itsnottegxnn",
    type: "reel",
    likes: "28.5K"
  },
  {
    id: "ig_3",
    caption: "Sunday flower market chaos in Vietnam 🌺🛵",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
    permalink: "https://www.instagram.com/itsnottegxnn",
    type: "photo",
    likes: "19.8K"
  },
  {
    id: "ig_4",
    caption: "First waterfall hike of the trip without getting lost (miracle) 💦🌴",
    imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&auto=format&fit=crop&q=80",
    permalink: "https://www.instagram.com/itsnottegxnn",
    type: "reel",
    likes: "32.1K"
  },
  {
    id: "ig_5",
    caption: "Street food crawl in George Town, Penang 🍜🇲🇾",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    permalink: "https://www.instagram.com/itsnottegxnn",
    type: "photo",
    likes: "11.6K"
  },
  {
    id: "ig_6",
    caption: "The hostel rooftop family we made this week 🫶✈️",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
    permalink: "https://www.instagram.com/itsnottegxnn",
    type: "photo",
    likes: "22.4K"
  }
];

export async function GET() {
  try {
    return NextResponse.json(FALLBACK_IG_POSTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  } catch {
    return NextResponse.json(FALLBACK_IG_POSTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  }
}
