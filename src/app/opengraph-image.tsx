import { ImageResponse } from 'next/og';
import { CREATOR_DATA } from '@/config/creator';

export const runtime = 'edge';
export const alt = 'Teegs Travels - Official Creator Hub';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default async function Image() {
  const departure = new Date(CREATOR_DATA.departureDate).getTime();
  const days = Math.floor(Math.max(0, Date.now() - departure) / (1000 * 60 * 60 * 24));

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d0d0e 0%, #1a101f 50%, #0d0d0e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative'
        }}
      >
        {/* Glow circles */}
        <div
          style={{
            position: 'absolute',
            top: -50,
            left: -50,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244,63,94,0.25) 0%, transparent 70%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -50,
            right: -50,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)'
          }}
        />

        {/* Counter Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '9999px',
            padding: '12px 28px',
            color: '#fcd34d',
            fontSize: '24px',
            fontWeight: 600,
            marginBottom: '28px'
          }}
        >
          <span>🎒 Day {days} of Traveling The World</span>
          <span>•</span>
          <span>One-Way Ticket</span>
        </div>

        {/* Brand Title */}
        <h1
          style={{
            fontSize: '68px',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}
        >
          {CREATOR_DATA.siteTitle}
        </h1>

        {/* Handle */}
        <div
          style={{
            fontSize: '28px',
            color: '#fb7185',
            fontFamily: 'monospace',
            marginBottom: '32px'
          }}
        >
          {CREATOR_DATA.handle} • {CREATOR_DATA.name}
        </div>

        {/* Bio Snippet */}
        <p
          style={{
            fontSize: '22px',
            color: '#d4d4d8',
            maxWidth: '850px',
            textAlign: 'center',
            lineHeight: 1.5,
            margin: 0
          }}
        >
          Solo traveling • YouTube Vlogs • TikTok Lives • 110% real journey
        </p>

        {/* Footer Pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            display: 'flex',
            gap: '30px',
            color: '#a1a1aa',
            fontSize: '18px',
            fontFamily: 'monospace'
          }}
        >
          <span>YouTube: @Itsnottegxnn</span>
          <span>•</span>
          <span>TikTok: @itsnottegxnn</span>
          <span>•</span>
          <span>Instagram: @itsnottegxnn</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
