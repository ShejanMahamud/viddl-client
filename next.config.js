/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: [
      'images.pexels.com',
      'via.placeholder.com',
      'i.ytimg.com',
      'scontent.cdninstagram.com',
      'cdn.tiktok.com',
      'scontent.xx.fbcdn.net',
      'pbs.twimg.com',
      'i.pinimg.com',
      'viddl.johuniq.xyz'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Add experimental features to improve build stability
  experimental: {
    serverComponentsExternalPackages: ['@next/swc-wasm-nodejs'],
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
};

module.exports = nextConfig;