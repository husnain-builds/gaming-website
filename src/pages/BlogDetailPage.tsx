import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/Seo'
import {
  formatBlogDate,
  getBlogBySlug,
  getRelatedBlogs,
} from '../utils/blogs-data.js'

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogBySlug(slug) : null

  if (!post) {
    return <Navigate to="/blogs" replace />
  }

  const related = getRelatedBlogs(post.slug, 3)
  const paragraphs = post.content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="bg-white">
      <Seo
        title={post.title}
        description={post.excerpt}
        image={post.image}
        path={`/blogs/${post.slug}`}
        type="article"
        publishedTime={post.date}
        author={post.author}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(168,85,247,0.2),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan transition hover:text-white"
          >
            ← Back to blogs
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-white/60">
            <span className="text-violet">{post.category}</span>
            <span>{formatBlogDate(post.date)}</span>
            <span>{post.readTime}</span>
            <span>By {post.author}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="section-pad pt-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[28px]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </motion.div>

          <article className="prose-blog mt-10 space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-slate-50 px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Written by</p>
              <p className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-navy">
                {post.author}
              </p>
            </div>
            <Link to="/blogs" className="btn-primary !py-2.5 !px-5 text-sm">
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 section-pad">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-extrabold uppercase text-navy sm:text-3xl">
            Related Articles
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/blogs/${item.slug}`} className="group block">
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-violet">
                  {formatBlogDate(item.date)}
                </p>
                <h3 className="mt-2 font-display text-sm font-bold uppercase leading-snug tracking-wide text-navy transition group-hover:text-violet">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
