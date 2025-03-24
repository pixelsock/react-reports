import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summer Campaign Report',
  description: 'Summer Campaign Report for February 22 - March 23, 2025',
  // Remove OpenGraph metadata to bypass preview
  other: {
    'X-Frame-Options': 'ALLOWALL',
  },
};

export default function SummerCampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Headers for embedding */}
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors *" />
        
        {/* Disable OpenGraph preview */}
        <meta name="robots" content="noindex" />
        <meta name="twitter:card" content="none" />
      </head>
      <body>
        {/* Minimal layout without padding for embedding */}
        {children}
      </body>
    </html>
  );
}
