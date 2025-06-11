import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function POST(request: Request) {
  let requestBody;
  try {
    requestBody = await request.json();
    const { platform, url } = requestBody;

    console.log(`Attempting to fetch from ${API_BASE_URL}/v1/api/download/${platform}`);

    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY || '',
    });

    const response = await fetch(`${API_BASE_URL}/v1/api/download/${platform}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error Response: Status ${response.status}`, errorText);
      return NextResponse.json(
        {
          success: false,
          error: `Failed to fetch from ${platform}`,
          details: errorText,
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Download API error details:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      platform: requestBody?.platform || 'unknown',
    });

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process download request',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
