import { NextResponse } from 'next/server';
import { parseYouTubeVideos, FALLBACK_SHORTS } from '@/lib/rss';

export const dynamic = 'force-static';
export const revalidate = 300; // 5 minutes

export async function GET() {
  try {
    const { shorts } = await parseYouTubeVideos();
    return NextResponse.json(shorts && shorts.length > 0 ? shorts : FALLBACK_SHORTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=120'
      }
    });
  } catch {
    return NextResponse.json(FALLBACK_SHORTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=120'
      }
    });
  }
}
