import Privacy from '@/components/sections/Privacy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Read VidDL's privacy policy to understand how we collect, use, and protect your personal information. We are committed to maintaining your privacy and data security.",
  openGraph: {
    title: 'Privacy Policy | VidDL - Video Downloader',
    description:
      "Read VidDL's privacy policy to understand how we collect, use, and protect your personal information. We are committed to maintaining your privacy and data security.",
    type: 'website',
    url: '/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | VidDL - Video Downloader',
    description:
      "Read VidDL's privacy policy to understand how we collect, use, and protect your personal information. We are committed to maintaining your privacy and data security.",
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
