import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET() {
  try {
    const res = await fetch('https://kick.com/api/v2/channels/itsnottegxnn', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return NextResponse.json(
        { isLive: false, title: '', viewers: 0 },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
          }
        }
      );
    }

    const data = await res.json();
    const livestream = data?.livestream;
    const isLive = Boolean(livestream && livestream.is_live);

    return NextResponse.json(
      {
        isLive,
        title: livestream?.session_title || 'IRL Solo Travel Stream',
        viewers: livestream?.viewer_count || 0,
        category: livestream?.categories?.[0]?.name || 'Just Chatting',
        slug: 'itsnottegxnn'
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
        }
      }
    );
  } catch {
    return NextResponse.json(
      { isLive: false, title: '', viewers: 0 },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
        }
      }
    );
  }
}
