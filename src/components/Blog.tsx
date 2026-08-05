import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  formatBlogDate,
  getFeaturedBlogs,
  getSideBlogs,
} from '../utils/blogs-data.js'

export function Blog() {
  const featured = getFeaturedBlogs(2)
  const sidePosts = getSideBlogs(4, 2)

  return (
    <section id="blog" className="bg-white section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
            Take A Look At Our Latest Blog & Articles
          </h2>
          <Link to="/blogs" className="btn-primary shrink-0 self-start sm:self-auto">
            View All
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link to={`/blogs/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-wider text-violet">
                    {formatBlogDate(post.date)}
                  </p>
                  <h3 className="mt-2 font-display text-sm font-bold uppercase leading-snug tracking-wide text-navy transition group-hover:text-violet">
                    {post.title}
                  </h3>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="divide-y divide-slate-200 rounded-[22px] bg-slate-50 px-6 py-2">
            {sidePosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  to={`/blogs/${post.slug}`}
                  className="block py-5 transition hover:translate-x-1"
                >
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {formatBlogDate(post.date)}
                  </p>
                  <h3 className="mt-2 font-semibold text-navy transition hover:text-violet">
                    {post.title}
                  </h3>
                </Link>
              </motion.div>
            ))}

            <div className="py-5">
              <Link
                to="/blogs"
                className="text-sm font-semibold text-violet transition hover:text-violet-deep"
              >
                Browse all articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
