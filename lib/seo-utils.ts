export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: Record<string, any>;
}

export function generateSEOMetadata(data: SEOData) {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords.join(', '),
    openGraph: {
      title: data.title,
      description: data.description,
      type: data.ogType || 'website',
      images: data.ogImage ? [{ url: data.ogImage }] : undefined,
    },
    twitter: {
      card: data.twitterCard || 'summary_large_image',
      title: data.title,
      description: data.description,
      images: data.ogImage ? [data.ogImage] : undefined,
    },
    alternates: {
      canonical: data.canonical,
    },
  };
}

export function generatePlatformSEO(platform: string) {
  const platformData = {
    youtube: {
      title: `YouTube Video Downloader - Download YouTube Videos Free | VidDL`,
      description: `Download YouTube videos, shorts, and playlists in HD quality. Free YouTube downloader with MP4 and MP3 support. No registration required.`,
      keywords: [
        'youtube downloader',
        'download youtube videos',
        'youtube to mp4',
        'youtube to mp3',
        'youtube video download',
        'free youtube downloader',
        'youtube shorts downloader',
        'youtube playlist downloader',
        'hd youtube downloader',
        '4k youtube downloader',
      ],
    },
    instagram: {
      title: `Instagram Video Downloader - Download Instagram Videos, Reels, Stories | VidDL`,
      description: `Download Instagram videos, Reels, Stories, and IGTV in high quality. Free Instagram downloader with no watermark. Save Instagram content easily.`,
      keywords: [
        'instagram downloader',
        'download instagram videos',
        'instagram reels downloader',
        'instagram story downloader',
        'instagram video download',
        'save instagram videos',
        'instagram to mp4',
        'free instagram downloader',
        'instagram content downloader',
        'instagram media downloader',
      ],
    },
    tiktok: {
      title: `TikTok Video Downloader - Download TikTok Videos Without Watermark | VidDL`,
      description: `Download TikTok videos without watermark in HD quality. Free TikTok downloader that removes watermarks and saves videos in MP4 format.`,
      keywords: [
        'tiktok downloader',
        'download tiktok videos',
        'tiktok no watermark',
        'tiktok video download',
        'remove tiktok watermark',
        'tiktok to mp4',
        'free tiktok downloader',
        'tiktok video saver',
        'tiktok content downloader',
        'hd tiktok downloader',
      ],
    },
    facebook: {
      title: `Facebook Video Downloader - Download Facebook Videos Free | VidDL`,
      description: `Download Facebook videos, stories, and live streams in high quality. Free Facebook video downloader with HD support. No registration needed.`,
      keywords: [
        'facebook downloader',
        'download facebook videos',
        'facebook video download',
        'facebook story downloader',
        'facebook live downloader',
        'save facebook videos',
        'facebook to mp4',
        'free facebook downloader',
        'facebook content downloader',
        'facebook media saver',
      ],
    },
    twitter: {
      title: `Twitter Video Downloader - Download Twitter Videos and GIFs | VidDL`,
      description: `Download Twitter videos and GIFs in high quality. Free Twitter video downloader that saves videos from tweets. Fast and secure.`,
      keywords: [
        'twitter downloader',
        'download twitter videos',
        'twitter video download',
        'twitter gif downloader',
        'save twitter videos',
        'twitter to mp4',
        'free twitter downloader',
        'twitter media downloader',
        'x video downloader',
        'twitter content saver',
      ],
    },
    pinterest: {
      title: `Pinterest Video Downloader - Download Pinterest Videos and Images | VidDL`,
      description: `Download Pinterest videos and images in high quality. Free Pinterest downloader for video pins and idea pins. Save Pinterest content easily.`,
      keywords: [
        'pinterest downloader',
        'download pinterest videos',
        'pinterest video download',
        'pinterest image downloader',
        'save pinterest videos',
        'pinterest pin downloader',
        'free pinterest downloader',
        'pinterest content downloader',
        'pinterest media saver',
        'pinterest idea pin downloader',
      ],
    },
    capcut: {
      title: `CapCut Template Downloader - Download CapCut Templates Free | VidDL`,
      description: `Download CapCut templates and video projects in high quality. Free CapCut downloader for templates, effects, and video content.`,
      keywords: [
        'capcut downloader',
        'download capcut templates',
        'capcut template download',
        'capcut video downloader',
        'save capcut templates',
        'capcut content downloader',
        'free capcut downloader',
        'capcut project downloader',
        'capcut effect downloader',
        'capcut media saver',
      ],
    },
  };

  return platformData[platform as keyof typeof platformData] || platformData.youtube;
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateHowToSchema(title: string, steps: Array<{ name: string; text: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: `Learn how to ${title.toLowerCase()}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateVideoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.contentUrl,
  };
}