import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Reports - Embed',
  description: 'Embeddable version of React Reports',
  openGraph: {
    title: 'React Reports - Embed',
    description: 'Embeddable version of React Reports',
    type: 'website',
  },
  other: {
    'X-Frame-Options': 'ALLOWALL',
  },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="embed-layout">
      {/* Minimal layout for embedding */}
      {children}
    </div>
  );
}
