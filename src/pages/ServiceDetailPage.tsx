import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/Seo'
import { getRelatedServices, getServiceBySlug } from '../utils/services-data.js'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : null

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = getRelatedServices(service.slug, 3)
  const paragraphs = service.description
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="bg-white">
      <Seo
        title={service.title}
        description={service.excerpt}
        image={service.image}
        path={`/services/${service.slug}`}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(168,85,247,0.2),transparent_45%)]" />
        <div className="relative mx-auto max-w-5xl px-5 pb-14 pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan transition hover:text-white"
          >
            ← Back to services
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-white/60">
            <span className="text-violet">{service.category}</span>
            <span>{service.timeline}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="section-pad pt-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[28px]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <article className="space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}

              <div className="pt-4">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                  How We Work
                </h2>
                <ol className="mt-4 space-y-3">
                  {service.process.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm text-muted sm:text-base">
                      <span className="font-display text-xs font-bold text-violet">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                  Highlights
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="h-fit rounded-[22px] bg-slate-50 p-6">
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Best for</dt>
                  <dd className="mt-1 font-semibold text-navy">{service.bestFor}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Typical timeline</dt>
                  <dd className="mt-1 font-semibold text-navy">{service.timeline}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Deliverables</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-violet/10 px-3 py-1 text-xs font-medium text-violet"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <Link to="/#contact" className="btn-primary mt-6 w-full text-sm">
                Book A Call
              </Link>
            </aside>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {service.gallery.map((src) => (
              <div key={src} className="overflow-hidden rounded-[18px]">
                <img src={src} alt="" className="aspect-video w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-slate-50 px-6 py-5">
            <p className="text-sm text-muted">Need something custom? Tell us about your next game.</p>
            <Link to="/services" className="btn-primary !py-2.5 !px-5 text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-100 section-pad">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-extrabold uppercase text-navy sm:text-3xl">
              Related Services
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group overflow-hidden rounded-[22px] bg-slate-50"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wider text-violet">{item.category}</p>
                    <h3 className="mt-2 font-display text-sm font-bold uppercase tracking-wide text-navy transition group-hover:text-violet">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
