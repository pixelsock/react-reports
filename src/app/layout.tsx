import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Reports',
  description: 'A simple React app for campaign recommendations visualization',
  openGraph: {
    title: 'React Reports',
    description: 'A simple React app for campaign recommendations visualization',
    type: 'website',
    url: 'https://react-reports-cyiomdvuk-stump-works.vercel.app',
    images: [
      {
        url: 'https://react-reports-cyiomdvuk-stump-works.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'React Reports',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Reports',
    description: 'A simple React app for campaign recommendations visualization',
  },
  other: {
    'X-Frame-Options': 'ALLOW-FROM https://iframely.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Standard meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="React Reports" />
        <meta property="og:description" content="A simple React app for campaign recommendations visualization" />
        <meta property="og:url" content="https://react-reports-cyiomdvuk-stump-works.vercel.app" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React Reports" />
        <meta name="twitter:description" content="A simple React app for campaign recommendations visualization" />
        
        {/* Iframely-specific meta tags */}
        <meta property="iframely:title" content="React Reports" />
        <meta property="iframely:description" content="A simple React app for campaign recommendations visualization" />
        <meta name="iframely:embed" content="true" />
        <link rel="alternate" type="text/html" href="https://react-reports-cyiomdvuk-stump-works.vercel.app/embed" />
        
        {/* Content Security Policy */}
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors https://iframely.com https://*.iframely.com https://*.medium.com https://*.facebook.com https://facebook.com https://*.twitter.com https://twitter.com *" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100 p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
