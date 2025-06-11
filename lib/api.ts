export interface DownloadRequest {
  url: string;
}

export interface DownloadResponse {
  success: boolean;
  data?: any;
  message?: string;
  error?: string;
}

export interface ServerStatus {
  uptime: string;
  memoryUsage: number;
  cpuUsage: number;
  environment: string;
  nodeVersion: string;
  mongoStatus: string;
  totalDownloads: number;
  successRate: number;
  activeUsers: number;
  last24hDownloads: number;
  timestamp: string;
}

export interface HealthCheck {
  status: string;
  timestamp: string;
  uptime: number;
}

export class API {
  private baseUrl: string;

  constructor() {
    // Use relative URL for API calls
    this.baseUrl = "/api";
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error (${response.status})`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  private async callPlatformAPI(platform: string, url: string) {
    return this.makeRequest<DownloadResponse>("/download", {
      method: "POST",
      body: JSON.stringify({ platform, url }),
    });
  }

  // Server status and health
  async getServerStatus(): Promise<{ success: boolean; data: ServerStatus }> {
    return this.makeRequest("/status");
  }

  async getHealthCheck(): Promise<HealthCheck> {
    return this.makeRequest("/health");
  }

  // Download methods
  async downloadAIO(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("aio", url);
  }

  async downloadInstagram(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("instagram", url);
  }

  async downloadTikTok(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("tiktok", url);
  }

  async downloadFacebook(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("facebook", url);
  }

  async downloadTwitter(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("twitter", url);
  }

  async downloadYouTube(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("youtube", url);
  }

  async downloadMediaFire(url: string): Promise<DownloadResponse> {
    return this.makeRequest("/v1/api/download/mediafire", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
  }

  async downloadCapcut(url: string): Promise<DownloadResponse> {
    return this.makeRequest("/v1/api/download/capcut", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
  }

  async downloadGoogleDrive(url: string): Promise<DownloadResponse> {
    return this.makeRequest("/v1/api/download/gdrive", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
  }

  async downloadPinterest(url: string): Promise<DownloadResponse> {
    return this.callPlatformAPI("pinterest", url);
  }

  // Smart download method that detects platform and uses appropriate endpoint
  async smartDownload(url: string): Promise<DownloadResponse> {
    const platform = this.detectPlatform(url);
    return this.callPlatformAPI(platform, url);
  }

  private detectPlatform(url: string): string {
    try {
      const hostname = new URL(url).hostname.toLowerCase();

      if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
        return "youtube";
      }
      if (hostname.includes("instagram.com")) {
        return "instagram";
      }
      if (hostname.includes("tiktok.com")) {
        return "tiktok";
      }
      if (hostname.includes("facebook.com") || hostname.includes("fb.watch")) {
        return "facebook";
      }
      if (hostname.includes("twitter.com") || hostname.includes("x.com")) {
        return "twitter";
      }
      if (hostname.includes("pinterest.com") || hostname.includes("pin.it")) {
        return "pinterest";
      }

      return "unknown";
    } catch {
      return "unknown";
    }
  }
}

// Export singleton instance
export const downhiveAPI = new API();
export default downhiveAPI;
