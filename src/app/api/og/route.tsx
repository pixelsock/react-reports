import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'white',
          background: 'linear-gradient(to bottom, #4F46E5, #2563EB)',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 40 }}>
          React Reports
        </div>
        <div style={{ fontSize: 30, maxWidth: 800 }}>
          Interactive campaign performance analytics and recommendations
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
