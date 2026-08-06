import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/Seo'
import { getAllProjects } from '../utils/portfolio-data.js'
import { routeMeta } from '../utils/site-meta.js'

export function PortfolioPage() {
  const projects = getAllProjects()
  const meta = routeMeta.portfolio

  return (
    <div className="bg-white">
      <Seo
        title={meta.title}
        description={meta.description}
        image={meta.image}
        path={meta.path}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(ellipse_at_80%_80%,rgba(251,191,36,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Selected Works
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Games & Worlds We Craft
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A short collection of concept projects showcasing art direction, gameplay fantasy, and
            production craft.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-extrabold uppercase text-navy sm:text-3xl">
              All Projects
            </h2>
            <p className="text-sm text-muted">{projects.length} demo projects</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
                className="overflow-hidden rounded-[22px] bg-slate-50"
              >
                <Link to={`/portfolio/${project.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider">
                      <span className="text-violet">{project.genre}</span>
                      <span className="text-muted">{project.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold uppercase leading-snug tracking-wide text-navy transition group-hover:text-violet">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.platforms.map((platform) => (
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
    </div>
  )
}
