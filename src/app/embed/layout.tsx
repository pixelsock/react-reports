import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Reports - Embed',
  description: 'Embeddable version of React Reports',
  openGraph: {
    title: 'React Reports - Embed',
    description: 'Embeddable version of React Reports',
    type: 'website',
    url: 'https://react-reports-cyiomdvuk-stump-works.vercel.app/embed',
    images: [
      {
        url: 'https://react-reports-cyiomdvuk-stump-works.vercel.app/api/og',
        width: 1200,
        height: 630,
        alt: 'React Reports',
      }
    ],
  },
  other: {
    'X-Frame-Options': 'ALLOW-FROM https://iframely.com',
  },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="embed-layout">
      <head>
        {/* Iframely-specific meta tags */}
        <meta property="iframely:title" content="React Reports - Embed" />
        <meta property="iframely:description" content="Embeddable version of React Reports" />
        <meta name="iframely:embed" content="true" />
        
        {/* Content Security Policy */}
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors https://iframely.com https://*.iframely.com https://*.medium.com https://*.facebook.com https://facebook.com https://*.twitter.com https://twitter.com *" />
      </head>
      {/* Minimal layout for embedding */}
      {children}
    </div>
  );
}
