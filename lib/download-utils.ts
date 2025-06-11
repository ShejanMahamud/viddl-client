import { downhiveAPI, DownloadResponse } from './api';

export interface DownloadResult {
  success: boolean;
  data?: {
    title?: string;
    thumbnail?: string;
    downloadUrl?: string;
    downloadUrls?: string[];
    author?: string;
    platform?: string;
    quality?: string;
    format?: string;
    size?: string;
  };
  error?: string;
}

export async function downloadVideo(url: string, forcePlatform?: string): Promise<DownloadResult> {
  try {
    // Validate URL
    if (!isValidUrl(url)) {
      return {
        success: false,
        error: 'Please enter a valid URL',
      };
    }

    let response: DownloadResponse;

    if (forcePlatform && forcePlatform !== 'auto') {
      // Use specific platform endpoint
      response = await callPlatformAPI(forcePlatform, url);
    } else {
      // Use smart download to automatically detect platform
      response = await downhiveAPI.smartDownload(url);
    }

    if (!response.success) {
      return {
        success: false,
        error: response.message || 'Download failed',
      };
    }

    // Process response based on platform
    const processedData = processDownloadResponse(response, url, forcePlatform);

    return {
      success: true,
      data: processedData,
    };
  } catch (error) {
    console.error('Download error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

async function callPlatformAPI(platform: string, url: string): Promise<DownloadResponse> {
  switch (platform) {
    case 'youtube':
      return downhiveAPI.downloadYouTube(url);
    case 'instagram':
      return downhiveAPI.downloadInstagram(url);
    case 'tiktok':
      return downhiveAPI.downloadTikTok(url);
    case 'facebook':
      return downhiveAPI.downloadFacebook(url);
    case 'twitter':
      return downhiveAPI.downloadTwitter(url);
    case 'pinterest':
      return downhiveAPI.downloadPinterest(url);
    default:
      return downhiveAPI.downloadAIO(url);
  }
}

function processDownloadResponse(
  response: DownloadResponse,
  originalUrl: string,
  forcePlatform?: string
) {
  const platform =
    forcePlatform && forcePlatform !== 'auto' ? forcePlatform : detectPlatformFromUrl(originalUrl);
  const data = response.data;

  if (!data) {
    throw new Error('No data received from API');
  }

  switch (platform) {
    case 'youtube':
      return {
        title: data.title,
        thumbnail: data.thumbnail,
        author: data.author,
        downloadUrl: data.mp4,
        downloadUrls: [data.mp4, data.mp3].filter(Boolean),
        platform: 'YouTube',
        format: 'MP4/MP3',
      };

    case 'instagram':
      if (Array.isArray(data)) {
        return {
          title: 'Instagram Content',
          thumbnail: data[0]?.thumbnail,
          downloadUrl: data[0]?.url,
          downloadUrls: data.map(item => item.url).filter(Boolean),
          platform: 'Instagram',
          format: 'MP4/JPG',
        };
      }
      return {
        title: 'Instagram Content',
        downloadUrl: data.url,
        platform: 'Instagram',
      };

    case 'tiktok':
      return {
        title: data.title || data.title_audio,
        thumbnail: data.thumbnail,
        downloadUrl: data.video,
        downloadUrls: [data.video, data.audio].filter(Boolean),
        platform: 'TikTok',
        format: 'MP4/MP3',
      };

    case 'facebook':
      return {
        title: 'Facebook Video',
        downloadSD: data.Normal_video,
        downloadHD: data.HD,
        platform: 'Facebook',
        format: 'MP4',
        quality: data.HD ? 'HD' : 'Normal',
      };

    case 'twitter':
      return {
        title: data.title,
        downloadUrl: data.url?.[0]?.hd || data.url?.[0]?.sd,
        downloadUrls:
          data.url?.map((u: { hd?: string; sd?: string }) => u.hd || u.sd).filter(Boolean) || [],
        platform: 'Twitter/X',
        format: 'MP4',
        quality: data.url?.some((u: { hd?: string; sd?: string }) => u.hd)
          ? 'HD Available'
          : 'SD Available',
        author: data.author ? data.author : "Unknown",
      };

    case 'pinterest':
      if (data.result?.video_url) {
        // Handle video format
        const videoQualities = data.result.videos
          ? Object.entries(data.result.videos).map(([quality, video]: [string, any]) => ({
              quality,
              url: video.url,
              width: video.width,
              height: video.height,
            }))
          : [];

        return {
          title: data.result.title || 'Pinterest Video',
          description: data.result.description,
          thumbnail: data.result.image,
          downloadUrls: videoQualities.map(v => v.url),
          platform: 'Pinterest',
          format: 'MP4',
          quality:
            videoQualities.length > 0
              ? `${videoQualities[0].width}x${videoQualities[0].height}`
              : undefined,
          author: data.result.user?.full_name,
          userUrl: data.result.user?.profile_url,
        };
      } else {
        // Handle photo format
        const imageQualities = data.result?.images
          ? Object.entries(data.result.images)
              .filter(([key]) => key !== '60x60' && key !== '136x136') // Filter out small thumbnails
              .map(([quality, image]: [string, any]) => ({
                quality,
                url: image.url,
                width: image.width,
                height: image.height,
              }))
          : [];

        return {
          title: data.result?.title || 'Pinterest Image',
          description: data.result?.description,
          thumbnail: data.result?.image,
          downloadUrls: imageQualities.map(img => img.url),
          platform: 'Pinterest',
          format: 'JPG',
          quality:
            imageQualities.length > 0
              ? `${imageQualities[0].width}x${imageQualities[0].height}`
              : undefined,
          author: data.result?.user?.full_name,
          userUrl: data.result?.user?.profile_url,
        };
      }

    default:
      // Generic handling for AIO endpoint
      return {
        title: 'Downloaded Content',
        downloadUrl: data.url || data.downloadUrl,
        platform: 'Unknown',
      };
  }
}

function detectPlatformFromUrl(url: string): string {
  try {
    const hostname = new URL(url).hostname.toLowerCase();

    if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
      return 'youtube';
    }
    if (hostname.includes('instagram.com')) {
      return 'instagram';
    }
    if (hostname.includes('tiktok.com')) {
      return 'tiktok';
    }
    if (hostname.includes('facebook.com') || hostname.includes('fb.watch')) {
      return 'facebook';
    }
    if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
      return 'twitter';
    }
    if (hostname.includes('pinterest.com') || hostname.includes('pin.it')) {
      return 'pinterest';
    }

    return 'unknown';
  } catch {
    return 'unknown';
  }
}

function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

export function getSupportedPlatforms(): string[] {
  return ['YouTube', 'Instagram', 'TikTok', 'Facebook', 'Twitter/X', 'Pinterest'];
}

export function getPlatformFromUrl(url: string): string {
  const platform = detectPlatformFromUrl(url);
  const platformMap: Record<string, string> = {
    youtube: 'YouTube',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    facebook: 'Facebook',
    twitter: 'Twitter/X',
    pinterest: 'Pinterest',
  };

  return platformMap[platform] || 'Unknown Platform';
}
