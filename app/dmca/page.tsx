import DMCA from '@/components/sections/DMCA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description:
    "Learn about VidDL's DMCA policy and how to report copyright infringement. We respect intellectual property rights and respond promptly to valid takedown requests.",
  openGraph: {
    title: 'DMCA Policy | VidDL - Video Downloader',
    description:
      "Learn about VidDL's DMCA policy and how to report copyright infringement. We respect intellectual property rights and respond promptly to valid takedown requests.",
    type: 'website',
    url: '/dmca',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Policy | VidDL - Video Downloader',
    description:
      "Learn about VidDL's DMCA policy and how to report copyright infringement. We respect intellectual property rights and respond promptly to valid takedown requests.",
  },
};

export default function DMCAPage() {
  return <DMCA />;
}
