'use client';

import { motion } from 'framer-motion';
import { Download, Globe, Heart, Mail, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 mb-4"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg shadow-lg">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">VidDL</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Video Downloader</span>
                </div>
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                The ultimate social media video downloader. Fast, secure, and always free. Download
                videos from all major platforms with just one click.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    10M+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Downloads</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <Globe className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Platforms
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    YouTube Downloader
                  </a>
                </li>
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Instagram Downloader
                  </a>
                </li>
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    TikTok Downloader
                  </a>
                </li>
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Facebook Downloader
                  </a>
                </li>
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Twitter/X Downloader
                  </a>
                </li>
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Pinterest Downloader
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <Zap className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/#download"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="/#features"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Blog & Tutorials
                  </Link>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <Shield className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dmca"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    DMCA Policy
                  </Link>
                </li>
              </ul>

              {/* Contact Info */}
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <Mail className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <a
                    href="mailto:support@viddl.johuniq.xyz"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    support@viddl.johuniq.xyz
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Users className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0"
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} VidDL. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-y-2 md:space-y-0 md:space-x-4 flex-col md:flex-row">
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for video lovers worldwide
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  All systems operational
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
