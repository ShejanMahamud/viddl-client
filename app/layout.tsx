import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import LayoutWrapper from '@/components/sections/LayoutWrapper';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export type Viewport = {
  width?: string;
  initialScale?: number;
  maximumScale?: number;
  minimumScale?: number;
  userScalable?: boolean;
  viewportFit?: 'cover' | 'contain' | 'auto';
  themeColor?:
    | string
    | {
        media: string;
        color: string;
      }[];
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://viddl.com'),
  title: {
    default:
      'VidDL - Free Social Media Video Downloader | Download Videos from YouTube, Instagram, TikTok',
    template: '%s | VidDL - Free Video Downloader',
  },
  description:
    'Download videos from Facebook, Instagram, YouTube, Twitter/X, TikTok, CapCut, and Pinterest. Fast, free, and secure video downloader with HD quality support. No registration required.',
  keywords: [
    'video downloader',
    'social media downloader',
    'YouTube downloader',
    'Instagram video downloader',
    'TikTok downloader',
    'Facebook video downloader',
    'Twitter video downloader',
    'Pinterest video downloader',
    'CapCut downloader',
    'free video downloader',
    'HD video downloader',
    '4K video downloader',
    'MP4 downloader',
    'MP3 converter',
    'online video downloader',
    'no watermark downloader',
    'video converter',
    'social media tools',
    'video download tool',
    'fast video downloader',
  ],
  authors: [{ name: 'VidDL Team', url: 'https://viddl.johuniq.xyz' }],
  creator: 'VidDL',
  publisher: 'VidDL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viddl.johuniq.xyz',
    siteName: 'VidDL',
    title: 'VidDL - Free Social Media Video Downloader',
    description:
      'Download videos from all major social media platforms. Fast, free, and secure with HD quality support.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VidDL - Social Media Video Downloader',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'VidDL - Social Media Video Downloader',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@viddl',
    creator: '@viddl',
    title: 'VidDL - Free Social Media Video Downloader',
    description:
      'Download videos from all major social media platforms. Fast, free, and secure with HD quality support.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://viddl.johuniq.xyz',
    languages: {
      'en-US': 'https://viddl.johuniq.xyz',
      'es-ES': 'https://viddl.johuniq.xyz/es',
      'fr-FR': 'https://viddl.johuniq.xyz/fr',
      'de-DE': 'https://viddl.johuniq.xyz/de',
      'pt-BR': 'https://viddl.johuniq.xyz/pt',
      'it-IT': 'https://viddl.johuniq.xyz/it',
      'ja-JP': 'https://viddl.johuniq.xyz/ja',
      'ko-KR': 'https://viddl.johuniq.xyz/ko',
      'zh-CN': 'https://viddl.johuniq.xyz/zh',
      'ar-SA': 'https://viddl.johuniq.xyz/ar',
    },
  },
  category: 'technology',
  classification: 'Video Downloader Tool',
  referrer: 'origin-when-cross-origin',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'VidDL',
    'application-name': 'VidDL',
    'msapplication-TileColor': '#6366f1',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#ffffff',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta
          name="google-site-verification"
          content="y44rH0UHUGO5Ia8b6K44XPZBG8oZ7FVO--pZKi-lORA"
        />
        <JsonLd />
      </head>
      <body className={quicksand.className}>
      <LayoutWrapper>{children}</LayoutWrapper>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N4DYR5H19Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4DYR5H19Y');
          `}
        </Script>
      </body>
    </html>
  );
}
