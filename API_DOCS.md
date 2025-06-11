# DownHive API Documentation

## Base URL
```
http://<server-ip>:4000
```

## Authentication
All API requests require an API key to be included in the request headers:
```
X-API-Key: your-api-key-here
```

## API Endpoints

### 1. Server Status
Get server status and statistics.

```http
GET /
```

#### Response
```json
{
  "success": true,
  "data": {
    "uptime": "1d 2h 3m 4s",
    "memoryUsage": 75,
    "cpuUsage": 25,
    "environment": "production",
    "nodeVersion": "v18.x.x",
    "mongoStatus": "connected",
    "totalDownloads": 1000,
    "successRate": 95,
    "activeUsers": 50,
    "last24hDownloads": 100,
    "timestamp": "2024-03-14T12:34:56.789Z"
  }
}
```

### 2. Health Check
Check if the server is running properly.

```http
GET /health
```

#### Response
```json
{
  "status": "healthy",
  "timestamp": "2024-03-14T12:34:56.789Z",
  "uptime": 123456
}
```

### 3. Download Endpoints

#### 3.1 All-in-One Download
Download content from any supported platform.

```http
POST /v1/api/download/aio
Content-Type: application/json

{
  "url": "https://example.com/video"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "url": "https://example.com/download-url"
  }
}
```

#### 3.2 Instagram Download
Download Instagram content.

```http
POST /v1/api/download/instagram
Content-Type: application/json

{
  "url": "https://instagram.com/p/example"
}
```

#### Response
```json
{
  "success": true,
  "data": [
    {
      "thumbnail": "https://example.com/thumbnail.jpg",
      "url": "https://example.com/download-url",
      "resolution": "720p",
      "shouldRender": true
    }
  ]
}
```

#### 3.3 TikTok Download
Download TikTok content.

```http
POST /v1/api/download/tiktok
Content-Type: application/json

{
  "url": "https://tiktok.com/@user/video/123456789"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "title": "Video Title",
    "title_audio": "Audio Title",
    "thumbnail": "https://example.com/thumbnail.jpg",
    "video": "https://example.com/video.mp4",
    "audio": "https://example.com/audio.mp3"
  }
}
```

#### 3.4 Facebook Download
Download Facebook content.

```http
POST /v1/api/download/facebook
Content-Type: application/json

{
  "url": "https://facebook.com/watch?v=example"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "Normal_video": "https://example.com/normal.mp4",
    "HD": "https://example.com/hd.mp4"
  }
}
```

#### 3.5 Twitter Download
Download Twitter content.

```http
POST /v1/api/download/twitter
Content-Type: application/json

{
  "url": "https://twitter.com/user/status/123456789"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "title": "Tweet Title",
    "url": "https://example.com/download-url"
  }
}
```

#### 3.6 YouTube Download
Download YouTube content.

```http
POST /v1/api/download/youtube
Content-Type: application/json

{
  "url": "https://youtube.com/watch?v=example"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "title": "Video Title",
    "thumbnail": "https://example.com/thumbnail.jpg",
    "author": "Channel Name",
    "mp3": "https://example.com/audio.mp3",
    "mp4": "https://example.com/video.mp4"
  }
}
```

#### 3.7 MediaFire Download
Download MediaFire content.

```http
POST /v1/api/download/mediafire
Content-Type: application/json

{
  "url": "https://mediafire.com/file/example"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "result": {
      "name": "filename.ext",
      "size": "100MB",
      "url": "https://example.com/download-url"
    }
  }
}
```

#### 3.8 Capcut Download
Download Capcut content.

```http
POST /v1/api/download/capcut
Content-Type: application/json

{
  "url": "https://capcut.com/template/example"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "template_id": "123456",
    "title": "Template Title",
    "url": "https://example.com/download-url"
  }
}
```

#### 3.9 Google Drive Download
Download Google Drive content.

```http
POST /v1/api/download/gdrive
Content-Type: application/json

{
  "url": "https://drive.google.com/file/example"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "result": {
      "name": "filename.ext",
      "size": "100MB",
      "url": "https://example.com/download-url"
    }
  }
}
```

#### 3.10 Pinterest Download
Download Pinterest content.

```http
POST /v1/api/download/pinterest
Content-Type: application/json

{
  "url": "https://pinterest.com/pin/example"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "result": {
      "url": "https://example.com/download-url",
      "type": "image/video"
    }
  }
}
```

### Error Response Format
All endpoints return errors in the following format:

```json
{
  "success": false,
  "message": "Error message here",
  "error": "Detailed error information"
}
```

## Rate Limiting
- 100 requests per minute per IP
- 1000 requests per hour per API key

## Error Codes
- 400: Bad Request - Invalid input
- 401: Unauthorized - Missing or invalid API key
- 404: Not Found - Resource not found
- 429: Too Many Requests - Rate limit exceeded
- 500: Internal Server Error - Server-side error

## Best Practices
1. Always include the API key in the X-API-Key header
2. Handle rate limiting by implementing exponential backoff
3. Implement proper error handling for all responses
4. Cache responses when possible to reduce API calls
5. Use appropriate content types in requests

## Example Usage (JavaScript/TypeScript)
```typescript
async function downloadContent(url: string, service: string) {
  try {
    const response = await fetch(`http://your-server:4000/v1/api/download/${service}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'your-api-key'
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    console.error('Download failed:', error);
    throw error;
  }
}
```

## Support
For API support or to report issues, please contact the backend team. 