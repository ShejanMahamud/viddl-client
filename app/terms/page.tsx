import Terms from '@/components/sections/Terms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    "Review VidDL's terms of service to understand the rules and guidelines for using our video downloader service. Learn about your rights and responsibilities.",
  openGraph: {
    title: 'Terms of Service | VidDL - Video Downloader',
    description:
      "Review VidDL's terms of service to understand the rules and guidelines for using our video downloader service. Learn about your rights and responsibilities.",
    type: 'website',
    url: '/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | VidDL - Video Downloader',
    description:
      "Review VidDL's terms of service to understand the rules and guidelines for using our video downloader service. Learn about your rights and responsibilities.",
  },
};

export default function TermsPage() {
  return <Terms />;
}
