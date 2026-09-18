import { NextResponse } from 'next/server';
import { parseYouTubeRss, FALLBACK_LATEST_VLOG } from '@/lib/rss';

export const revalidate = 900; // 15 minutes

export async function GET() {
  try {
    // Channel handle or channel ID
    const { latestVideo } = await parseYouTubeRss('Itsnottegxnn');
    
    return NextResponse.json(latestVideo || FALLBACK_LATEST_VLOG, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  } catch {
    return NextResponse.json(FALLBACK_LATEST_VLOG, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300'
      }
    });
  }
}
