/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://viddl.johuniq.xyz',
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('downloader')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('how-to')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('privacy') || path.includes('terms')) {
      priority = 0.4;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'en',
        },
        {
          href: `${config.siteUrl}/es${path}`,
          hreflang: 'es',
        },
        {
          href: `${config.siteUrl}/fr${path}`,
          hreflang: 'fr',
        },
        {
          href: `${config.siteUrl}/de${path}`,
          hreflang: 'de',
        },
        {
          href: `${config.siteUrl}/pt${path}`,
          hreflang: 'pt',
        },
      ],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://viddl.johuniq.xyz/sitemap.xml',
    ],
  },
};