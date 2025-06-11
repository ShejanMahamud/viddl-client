'use client';

import { Button } from '@/components/ui/button';
import { VideoModal } from '@/components/ui/VideoModal';
import { motion } from 'framer-motion';
import { Download, Play, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const demoVideoId = 'tLVqoqdWe0w';

  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Download Videos from
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Any Platform
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Free, fast, and secure video downloader supporting Facebook, Instagram, YouTube,
            Twitter, TikTok, and Pinterest.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const downloadSection = document.getElementById('download');
                if (downloadSection) {
                  downloadSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Start Downloading
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 px-8 py-4 text-lg font-semibold"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Video Modal */}
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoId={demoVideoId}
          />

          {/* Feature Pills */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Zap className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span className="font-medium">Lightning Fast</span>
              </div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span className="font-medium">100% Secure</span>
              </div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Download className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span className="font-medium">No Registration</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Mock platform icons */}
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-600 rounded-lg"></div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
                  </div>
                </div>
                <div className="mt-6 h-12 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center px-4">
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-500 rounded mr-3"></div>
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
