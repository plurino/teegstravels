import { NextResponse } from 'next/server';
import { parseYouTubeVideos, FALLBACK_LATEST_VLOG, FALLBACK_RECENT_VLOGS } from '@/lib/rss';

export const revalidate = 300; // 5 minutes cache for fast freshness

export async function GET() {
  try {
    const { latestVideo, recentVideos } = await parseYouTubeVideos();
    
    return NextResponse.json(
      {
        ...(latestVideo || FALLBACK_LATEST_VLOG),
        recentVideos: recentVideos || FALLBACK_RECENT_VLOGS
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=120'
        }
      }
    );
  } catch {
    return NextResponse.json(
      {
        ...FALLBACK_LATEST_VLOG,
        recentVideos: FALLBACK_RECENT_VLOGS
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=120'
        }
      }
    );
  }
}
