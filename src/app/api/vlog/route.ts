import { NextResponse } from 'next/server';
import { parseYouTubeVideos, FALLBACK_LATEST_VLOG } from '@/lib/rss';

export const revalidate = 120; // 2 minutes cache for fast freshness when new videos drop

export async function GET() {
  try {
    const { latestVideo } = await parseYouTubeVideos();
    
    return NextResponse.json(
      latestVideo || FALLBACK_LATEST_VLOG,
      {
        headers: {
          'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=60'
        }
      }
    );
  } catch {
    return NextResponse.json(
      FALLBACK_LATEST_VLOG,
      {
        headers: {
          'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=60'
        }
      }
    );
  }
}
