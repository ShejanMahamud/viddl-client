'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Language, getTranslation } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en-US');

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language as Language;

    if (savedLanguage && Object.keys(getTranslation('en-US')).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else if (browserLanguage && Object.keys(getTranslation('en-US')).includes(browserLanguage)) {
      setLanguage(browserLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: getTranslation(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
