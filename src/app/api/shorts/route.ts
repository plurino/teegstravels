import { NextResponse } from 'next/server';
import { parseYouTubeRss, FALLBACK_SHORTS } from '@/lib/rss';

export const revalidate = 900; // 15 minutes

export async function GET() {
  try {
    const { shorts } = await parseYouTubeRss('Itsnottegxnn');
    return NextResponse.json(shorts && shorts.length > 0 ? shorts : FALLBACK_SHORTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  } catch {
    return NextResponse.json(FALLBACK_SHORTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  }
}
