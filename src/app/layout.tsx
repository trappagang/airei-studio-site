import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://airei.studio';

export const metadata: Metadata = {
  title: 'AIREI Studio — The Digital Spirit of Anime',
  description: 'We create anime worlds powered by AI — from concept trailers to interactive manga.',
  keywords: ['AI anime', 'generative animation', 'digital storytelling', 'AI artists', 'concept trailers', 'interactive manga'],
  authors: [{ name: 'AIREI Studio' }],
  creator: 'AIREI Studio',
  publisher: 'AIREI Studio',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'AIREI Studio — The Digital Spirit of Anime',
    description: 'We create anime worlds powered by AI — from concept trailers to interactive manga.',
    url: siteUrl,
    siteName: 'AIREI Studio',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'AIREI Studio Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIREI Studio — The Digital Spirit of Anime',
    description: 'We create anime worlds powered by AI — from concept trailers to interactive manga.',
    images: ['https://placehold.co/1200x630.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIREI Studio",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`, // Assuming you have a logo at public/logo.png
    "sameAs": [
      // Add social media links here
      // "https://twitter.com/aireistudio",
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AIREI Studio",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
