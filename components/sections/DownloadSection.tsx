'use client';

import { SEOOptimizedImage } from '@/components/SEOOptimizedImage';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { downloadVideo, getPlatformFromUrl } from '@/lib/download-utils';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Download, ExternalLink, Link, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface DownloadResult {
  success: boolean;
  data?: {
    title?: string;
    thumbnail?: string;
    downloadUrl?: string;
    downloadUrls?: string[];
    downloadSD?: string;
    downloadHD?: string;
    author?: string;
    platform?: string;
    quality?: string;
    format?: string;
    size?: string;
    url?: Array<{ hd?: string; sd?: string }>;
  };
  error?: string;
}

const platforms = [
  { value: 'auto', label: 'Auto Detect' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'pinterest', label: 'Pinterest' },
];

export function DownloadSection() {
  const [url, setUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('auto');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);

  const handleDownload = async () => {
    if (!url.trim()) {
      setResult({
        success: false,
        error: 'Please enter a valid URL',
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const downloadResult = await downloadVideo(
        url.trim(),
        selectedPlatform === 'auto' ? undefined : selectedPlatform
      );
      setResult(downloadResult);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadFile = (downloadUrl: string) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const detectedPlatform = url && selectedPlatform === 'auto' ? getPlatformFromUrl(url) : null;

  return (
    <section
      id="download"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Start
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              Downloading
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Paste your video URL below and we'll handle the rest
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
        >
          {/* URL Input */}
          <div className="mb-6">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Video URL
              {detectedPlatform && detectedPlatform !== 'Unknown Platform' && (
                <span className="ml-2 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full">
                  {detectedPlatform} detected
                </span>
              )}
            </label>
            <div className="relative">
              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <Input
                id="url"
                type="url"
                placeholder="Paste your video URL here..."
                value={url}
                onChange={e => setUrl(e.target.value)}
                className="pl-10 h-14 text-lg border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Platform Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Platform
            </label>
            <Select
              value={selectedPlatform}
              onValueChange={setSelectedPlatform}
              disabled={isLoading}
            >
              <SelectTrigger className="h-12 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map(platform => (
                  <SelectItem key={platform.value} value={platform.value}>
                    {platform.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {selectedPlatform === 'auto'
                ? "We'll automatically detect the platform from your URL"
                : 'You can manually select the platform for better accuracy'}
            </p>
          </div>

          {/* Download Button */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!url || isLoading}
            onClick={handleDownload}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download Video
              </>
            )}
          </Button>

          {/* Results Section */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              {result.success && result.data ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    {result.data.thumbnail && (
                      <SEOOptimizedImage
                        src={result.data.thumbnail}
                        alt="Video thumbnail"
                        width={96}
                        height={96}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        priority
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {result.data.title || 'Download Ready'}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.data.platform && (
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                            {result.data.platform}
                          </span>
                        )}
                        {result.data.format && (
                          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                            {result.data.format}
                          </span>
                        )}
                        {result.data.quality && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                            {result.data.quality}
                          </span>
                        )}
                        {result.data.size && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                            {result.data.size}
                          </span>
                        )}
                      </div>
                      {result.data.author && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          By: {result.data.author}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {/* Pinterest specific handling */}
                        {result.data.platform === 'Pinterest' &&
                          result.data.downloadUrls &&
                          result.data.downloadUrls.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {result.data.downloadUrls.map((url, index) => {
                                const isVideo = result.data?.format === 'MP4';
                                const quality = isVideo
                                  ? ['720p', 'HLS', 'Mobile'][index] || `Quality ${index + 1}`
                                  : ['Original', '736x', '564x', '474x', '236x', '170x'][index] ||
                                    `Quality ${index + 1}`;

                                return (
                                  <Button
                                    key={index}
                                    size="sm"
                                    onClick={() => handleDownloadFile(url)}
                                    className="bg-green-600 hover:bg-green-700 text-white"
                                  >
                                    <ExternalLink className="mr-1 h-4 w-4" />
                                    Download {quality}
                                  </Button>
                                );
                              })}
                            </div>
                          )}
                        {/* Facebook specific handling */}
                        {result.data.downloadSD && result.data.downloadHD && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleDownloadFile(result.data!.downloadSD!)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <ExternalLink className="mr-1 h-4 w-4" />
                              Download SD
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleDownloadFile(result.data!.downloadHD!)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <ExternalLink className="mr-1 h-4 w-4" />
                              Download HD
                            </Button>
                          </>
                        )}
                        {/* Multiple download URLs (Instagram, YouTube, TikTok) */}
                        {result.data.downloadUrls && result.data.downloadUrls.length > 1 ? (
                          result.data.downloadUrls.map((downloadUrl, index) => (
                            <Button
                              key={index}
                              size="sm"
                              onClick={() => handleDownloadFile(downloadUrl)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <ExternalLink className="mr-1 h-4 w-4" />
                              {result.data?.platform === 'YouTube' && index === 0
                                ? 'Download Video'
                                : result.data?.platform === 'YouTube' && index === 1
                                  ? 'Download Audio'
                                  : result.data?.platform === 'TikTok' && index === 0
                                    ? 'Download Video'
                                    : result.data?.platform === 'TikTok' && index === 1
                                      ? 'Download Audio'
                                      : result.data?.platform === 'Instagram'
                                        ? `Download ${index + 1}`
                                        : result.data?.platform === 'Twitter/X'
                                          ? index === 0
                                            ? 'Download HD'
                                            : 'Download SD'
                                          : `Download ${index + 1}`}
                            </Button>
                          ))
                        ) : result.data.downloadUrl ? (
                          <Button
                            size="sm"
                            onClick={() => handleDownloadFile(result.data!.downloadUrl!)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" />
                            Download Now
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Alert className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <AlertDescription className="text-red-800 dark:text-red-200">
                    {result.error || 'Download failed. Please try again.'}
                  </AlertDescription>
                </Alert>
              )}
            </motion.div>
          )}

          {/* Features List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>No Registration Required</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>Unlimited Downloads</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>High Quality Output</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
