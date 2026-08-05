/**
 * Central SEO / Open Graph config for Busters.
 * Set VITE_SITE_URL in .env for production absolute OG URLs.
 */

export const SITE_NAME = 'Busters'
export const SITE_TAGLINE = 'Exceptional Game Design'
export const TWITTER_HANDLE = '@BustersStudio'
export const DEFAULT_DESCRIPTION =
  'Busters is a creative game studio crafting exceptional game art, 3D modelling, character design, and development services for studios and publishers.'
export const DEFAULT_KEYWORDS =
  'Busters, game studio, game art, 3D modelling, art direction, game development, character design, portfolio'

/** Production site origin — no trailing slash */
export function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return 'https://gaming-website-gilt.vercel.app'
}

export function absoluteUrl(path = '/') {
  const base = getSiteUrl()
  if (!path) return base
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

/** Prefer compressed 1200x630 JPEG OG variants for share cards */
export function toOgImagePath(imagePath) {
  if (!imagePath) return '/og-default.jpg'
  if (/\.jpe?g$/i.test(imagePath) || imagePath.startsWith('/og-')) return imagePath
  const match = imagePath.match(/\/images\/([^/]+)\.(png|webp)$/i)
  if (match) return `/og-assets/${match[1]}.jpg`
  return imagePath
}

export function absoluteImageUrl(imagePath) {
  return absoluteUrl(toOgImagePath(imagePath))
}

export const defaultMeta = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  image: '/og-default.jpg',
  type: 'website',
  twitterCard: 'summary_large_image',
}

export const routeMeta = {
  home: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    image: '/og-home.jpg',
    path: '/',
  },
  about: {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Meet Busters — a creative game studio focused on beautiful worlds, honest pipelines, and playable craft.',
    image: '/og-about.jpg',
    path: '/about',
  },
  services: {
    title: `Services | ${SITE_NAME}`,
    description:
      'Game art and development services including 3D modelling, art direction, character design, UI/UX, and platform support.',
    image: '/og-services.jpg',
    path: '/services',
  },
  portfolio: {
    title: `Portfolio | ${SITE_NAME}`,
    description:
      'Explore demo concept projects from Busters — art direction, worlds, and gameplay fantasy showcases.',
    image: '/og-portfolio.jpg',
    path: '/portfolio',
  },
  blogs: {
    title: `Blog | ${SITE_NAME}`,
    description:
      'Design notes, production habits, and craft lessons from the Busters game studio team.',
    image: '/og-blog.jpg',
    path: '/blogs',
  },
}

export function buildPageTitle(title) {
  if (!title || title === defaultMeta.title) return defaultMeta.title
  if (title.includes(SITE_NAME)) return title
  return `${title} | ${SITE_NAME}`
}

export function buildWebPageJsonLd({ title, description, path = '/', image, type = 'WebPage' }) {
  const url = absoluteUrl(path)
  const imageUrl = absoluteImageUrl(image || defaultMeta.image)
  const orgId = `${getSiteUrl()}/#organization`
  const websiteId = `${getSiteUrl()}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE_NAME,
        url: getSiteUrl() + '/',
        logo: absoluteUrl('/icon-512.png'),
        description: DEFAULT_DESCRIPTION,
        sameAs: ['https://twitter.com/BustersStudio'],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: getSiteUrl() + '/',
        name: defaultMeta.title,
        description: DEFAULT_DESCRIPTION,
        publisher: { '@id': orgId },
        inLanguage: 'en-US',
      },
      {
        '@type': type,
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        inLanguage: 'en-US',
      },
    ],
  }
}
