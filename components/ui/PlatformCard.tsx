'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PlatformCardProps {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  textColor: string;
  formats: string[];
}

export function PlatformCard({
  name,
  description,
  color,
  bgColor,
  textColor,
  formats,
}: PlatformCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
    >
      <div className={`${bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300`}>
        <div className="flex items-start justify-between mb-4">
          <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-wrap gap-1">
            {formats.slice(0, 2).map((format) => (
              <span
                key={format}
                className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 text-xs rounded-full text-gray-600 dark:text-gray-300"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className={`text-xl font-bold ${textColor} mb-2`}>
          {name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <span>Download now</span>
          <ExternalLink className="ml-1 h-3 w-3" />
        </div>
      </div>
    </motion.div>
  );
}