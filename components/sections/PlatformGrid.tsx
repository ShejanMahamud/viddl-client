"use client";

import { PlatformCard } from "@/components/ui/PlatformCard";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "YouTube",
    description: "Download videos, shorts, and playlists",
    color: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-600 dark:text-red-400",
    formats: ["MP4", "MP3", "4K", "HD"],
  },
  {
    name: "Instagram",
    description: "Stories, Reels, IGTV, and posts",
    color: "bg-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    textColor: "text-pink-600 dark:text-pink-400",
    formats: ["MP4", "JPG", "Stories"],
  },
  {
    name: "TikTok",
    description: "Download without watermark",
    color: "bg-gray-900",
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
    textColor: "text-gray-900 dark:text-gray-100",
    formats: ["MP4", "No Watermark"],
  },
  {
    name: "Facebook",
    description: "Videos, stories, and live streams",
    color: "bg-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    formats: ["MP4", "HD", "Stories"],
  },
  {
    name: "Twitter/X",
    description: "Videos and GIFs from tweets",
    color: "bg-gray-900",
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
    textColor: "text-gray-900 dark:text-gray-100",
    formats: ["MP4", "GIF"],
  },
  {
    name: "Pinterest",
    description: "Video pins and idea pins",
    color: "bg-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-600 dark:text-red-400",
    formats: ["MP4", "JPG"],
  },
];

export function PlatformGrid() {
  return (
    <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Supported
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download videos from all major social media platforms and file
            sharing services with just one click. Fast, reliable, and always
            up-to-date.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PlatformCard {...platform} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
