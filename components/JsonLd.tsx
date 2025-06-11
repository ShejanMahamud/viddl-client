'use client';

import { useEffect } from 'react';

export function JsonLd() {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'VidDL',
      url: 'https://viddl.johuniq.xyz',
      logo: 'https://viddl.johuniq.xyz/logo.png',
      sameAs: [
        'https://twitter.com/viddl',
        'https://facebook.com/viddl',
        'https://instagram.com/viddl',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-234-567-8900',
        contactType: 'customer service',
        email: 'support@viddl.johuniq.xyz',
        availableLanguage: [
          'English',
          'Spanish',
          'French',
          'German',
          'Portuguese',
          'Italian',
          'Japanese',
          'Korean',
          'Chinese',
          'Arabic',
        ],
      },
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'VidDL - Free Social Media Video Downloader',
      url: 'https://viddl.johuniq.xyz',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://viddl.johuniq.xyz/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    };

    const softwareApplicationSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'VidDL Video Downloader',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
      },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://viddl.johuniq.xyz',
        },
      ],
    };

    const schemas = [
      organizationSchema,
      websiteSchema,
      softwareApplicationSchema,
      breadcrumbSchema,
    ];

    // Remove any existing JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new JSON-LD scripts
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
}
