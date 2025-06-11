'use client';

import { SEOOptimizedImage } from '@/components/SEOOptimizedImage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="relative w-64 h-64 mb-8">
              <SEOOptimizedImage
                src="/404.svg"
                alt="404 Not Found"
                width={256}
                height={256}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/">
                <Button className="w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
