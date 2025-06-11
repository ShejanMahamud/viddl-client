'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Download, HelpCircle, Info, Menu, Moon, Sun, Video, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

const platformDropdownItems = [
  {
    name: 'YouTube Downloader',
    href: '/youtube-downloader',
    description: 'Download videos, shorts, and playlists',
  },
  {
    name: 'Instagram Downloader',
    href: '/instagram-downloader',
    description: 'Download Reels, Stories, and posts',
  },
  {
    name: 'TikTok Downloader',
    href: '/tiktok-downloader',
    description: 'Download without watermark',
  },
  {
    name: 'Facebook Downloader',
    href: '/facebook-downloader',
    description: 'Download videos and stories',
  },
  {
    name: 'Twitter/X Downloader',
    href: '/twitter-downloader',
    description: 'Download videos and GIFs',
  },
  {
    name: 'Pinterest Downloader',
    href: '/pinterest-downloader',
    description: 'Download video pins and images',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNotify = () => {
    setIsDialogOpen(false);
    toast.custom(
      t => (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 flex items-start space-x-3">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full">
            <Download className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">Notification Set!</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              You will be notified when the VidDL extension is available.
            </p>
          </div>
          <button
            onClick={() => toast.dismiss(t)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ),
      {
        duration: 5000,
        position: 'bottom-right',
      }
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg shadow-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  VidDL
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Social Media Downloader
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Platforms Dropdown */}

            <Link
              href="/#features"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <Info className="inline-block mr-1 h-4 w-4" />
              Features
            </Link>

            <Link
              href="/#faq"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <HelpCircle className="inline-block mr-1 h-4 w-4" />
              FAQ
            </Link>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Get Chrome Extension
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader className="space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
                        <Download className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Coming Soon!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                      Our Chrome extension is currently under development. Stay tuned for updates!
                    </DialogDescription>
                    <div className="flex justify-center pt-2">
                      <Button
                        variant="outline"
                        className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
                        onClick={handleNotify}
                      >
                        Notify Me When Available
                      </Button>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200/50 dark:border-gray-700/50"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/#features"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="mr-2 h-4 w-4" />
                Features
              </Link>

              <Link
                href="/#faq"
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                FAQ
              </Link>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-full mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Get Chrome Extension
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader className="space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
                        <Download className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Coming Soon!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                      Our Chrome extension is currently under development. Stay tuned for updates!
                    </DialogDescription>
                    <div className="flex justify-center pt-2">
                      <Button
                        variant="outline"
                        className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
                        onClick={handleNotify}
                      >
                        Notify Me When Available
                      </Button>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
