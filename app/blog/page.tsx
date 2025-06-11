import Blogs from '@/components/sections/Blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore our latest articles and guides about video downloading, social media tips, and digital content management.',
  openGraph: {
    title: 'Blog | VidDL - Video Downloader',
    description:
      'Explore our latest articles and guides about video downloading, social media tips, and digital content management.',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | VidDL - Video Downloader',
    description:
      'Explore our latest articles and guides about video downloading, social media tips, and digital content management.',
  },
};

export default function BlogPage() {
  return <Blogs />;
}
