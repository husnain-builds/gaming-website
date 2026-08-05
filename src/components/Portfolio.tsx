import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../utils/portfolio-data.js'

export function Portfolio() {
  const works = getFeaturedProjects(3)

  return (
    <section id="portfolio" className="bg-white section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
            We Have Completed Some Amazing Works
          </h2>
          <Link to="/portfolio" className="btn-primary shrink-0 self-start sm:self-auto">
            View All
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {works.map((work, i) => (
            <motion.article
              key={work.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[22px] bg-slate-50"
            >
              <Link to={`/portfolio/${work.slug}`} className="block">
                <div className="overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy transition group-hover:text-violet">
                    {work.title}
                  </h3>
                  <div className="mt-3 flex gap-2">
                    {work.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-muted"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
