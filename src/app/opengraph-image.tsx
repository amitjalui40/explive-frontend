import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/siteData';

export const alt = siteConfig.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top emerald accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#10b981' }} />

        {/* Subtle grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Emerald glow */}
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
          <span style={{ fontSize: '80px', fontWeight: 900, color: 'white', letterSpacing: '-3px', lineHeight: 1 }}>EXP</span>
          <span style={{ fontSize: '80px', fontWeight: 900, color: '#10b981', letterSpacing: '-3px', lineHeight: 1 }}>.</span>
          <span style={{ fontSize: '80px', fontWeight: 900, color: 'white', letterSpacing: '-3px', lineHeight: 1 }}>LIVE</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: '26px', fontWeight: 500, color: '#71717a', marginBottom: '56px' }}>
          {siteConfig.tagline}
        </div>

        {/* Services row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {['Music Festivals', 'Concerts', 'Artist Tours', 'IP Experiences'].map((label, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#52525b', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {label}
              </span>
              {i < 3 && <span style={{ color: '#10b981', fontSize: '10px' }}>◆</span>}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: 'absolute', top: '80px', right: '80px', fontSize: '18px', fontWeight: 700, color: '#3f3f46', letterSpacing: '1px' }}>
          {siteConfig.url.replace('https://', '')}
        </div>
      </div>
    ),
    { ...size }
  );
}
