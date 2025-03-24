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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Reports',
    description: 'A simple React app for campaign recommendations visualization',
  },
  other: {
    'X-Frame-Options': 'ALLOWALL',
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
        {/* Basic meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="React Reports" />
        <meta property="og:description" content="A simple React app for campaign recommendations visualization" />
        
        {/* Allow embedding from any domain */}
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors *" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100 p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
