export default function robots() {
    return {
      rules: [
        {
          userAgent: 'Googlebot',
          allow: ['/'],
          disallow: ['/private/'],
        },
        {
          userAgent: ['Applebot', 'Bingbot'],
          disallow: ['/'],
        },
      ],
      sitemap: 'https://shecancodeschool.org/sitemap.xml',
    }
  }