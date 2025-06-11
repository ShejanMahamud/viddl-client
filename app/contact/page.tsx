import Contact from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with the VidDL team for support, feedback, or partnership inquiries. We're here to help with your video downloading needs.",
  openGraph: {
    title: 'Contact Us | VidDL - Video Downloader',
    description:
      "Get in touch with the VidDL team for support, feedback, or partnership inquiries. We're here to help with your video downloading needs.",
    type: 'website',
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | VidDL - Video Downloader',
    description:
      "Get in touch with the VidDL team for support, feedback, or partnership inquiries. We're here to help with your video downloading needs.",
  },
};

export default function ContactPage() {
  return <Contact />;
}
