'use client';

import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQ } from '@/components/sections/FAQ';
import { Features } from '@/components/sections/Features';
import { Hero } from '@/components/sections/Hero';
import { PlatformGrid } from '@/components/sections/PlatformGrid';
import { motion } from 'framer-motion';

export default function ClientWrapper() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <DownloadSection />
      <PlatformGrid />
      <Features />
      <FAQ />
    </motion.main>
  );
}
