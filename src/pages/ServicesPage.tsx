import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/Seo'
import { getAllServices } from '../utils/services-data.js'
import { routeMeta } from '../utils/site-meta.js'

export function ServicesPage() {
  const items = getAllServices()
  const meta = routeMeta.services

  return (
    <div className="bg-white">
      <Seo
        title={meta.title}
        description={meta.description}
        image={meta.image}
        path={meta.path}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(ellipse_at_80%_80%,rgba(34,211,238,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">What We Offer</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Game Art And Development Services
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            End-to-end creative and production support for studios that want distinctive worlds and
            shippable craft.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-extrabold uppercase text-navy sm:text-3xl">
              All Services
            </h2>
            <p className="text-sm text-muted">{items.length} capabilities</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((service, i) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="overflow-hidden rounded-[22px] bg-slate-50"
              >
                <Link to={`/services/${service.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wider text-violet">{service.category}</p>
                    <h3 className="mt-3 font-display text-sm font-bold uppercase leading-snug tracking-wide text-navy transition group-hover:text-violet">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.excerpt}</p>
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
