'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Download, Smartphone, Globe, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Download videos in seconds with our optimized servers and advanced compression technology.',
  },
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Your privacy is our priority. No data is stored on our servers, and all downloads are encrypted.',
  },
  {
    icon: Download,
    title: 'No Limits',
    description: 'Download as many videos as you want without any restrictions or daily limits.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile with responsive design.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Access from anywhere in the world with our global CDN and mirror servers.',
  },
  {
    icon: Settings,
    title: 'Advanced Options',
    description: 'Choose quality, format, and customize your downloads with our advanced settings.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> VidDL</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the fastest, most secure, and feature-rich video downloader 
            available on the web today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}