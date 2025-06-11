'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from 'sonner';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isVerifyPage = pathname?.startsWith('/verify');

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {!isVerifyPage && <Header />}
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-400" />
              </div>
            }
          >
            {children}
            <SpeedInsights />
            <Analytics />
          </Suspense>
          {!isVerifyPage && <Footer />}
        </div>
      </LanguageProvider>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
