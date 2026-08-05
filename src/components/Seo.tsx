import { Helmet } from 'react-helmet-async'
import {
  absoluteImageUrl,
  absoluteUrl,
  buildPageTitle,
  defaultMeta,
  SITE_NAME,
} from '../utils/site-meta.js'

type SeoProps = {
  title?: string
  description?: string
  keywords?: string
  image?: string
  path?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  publishedTime?: string
  author?: string
}

export function Seo({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  path = '/',
  type = 'website',
  noIndex = false,
  publishedTime,
  author,
}: SeoProps) {
  const pageTitle = buildPageTitle(title)
  const canonical = absoluteUrl(path)
  const ogImage = absoluteImageUrl(image)

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || SITE_NAME} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={pageTitle} />

      {type === 'article' && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === 'article' && author ? <meta property="article:author" content={author} /> : null}

      <meta name="theme-color" content="#0b1120" />
    </Helmet>
  )
}
