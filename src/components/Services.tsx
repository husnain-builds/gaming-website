import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getFeaturedServices } from '../utils/services-data.js'
import { useParallax } from '../hooks/useParallax'

export function Services() {
  const services = getFeaturedServices(2)
  const { ref: parallaxRef, y: parallaxY } = useParallax(45)

  return (
    <section
      id="services"
      className="slant-both relative -mt-8 overflow-hidden bg-navy text-white section-pad"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 pt-10 pb-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          ref={parallaxRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative order-2 lg:order-1"
        >
          <div className="pointer-events-none absolute inset-x-8 bottom-8 h-24 rounded-full bg-gold/20 blur-3xl" />
          <motion.img
            style={{ y: parallaxY }}
            src="/images/mage-character.png"
            alt="Fantasy mage character"
            className="character-cutout float relative z-10 mx-auto w-[85%] max-w-md"
          />
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl"
          >
            Game Art And Development Services
          </motion.h2>
          <p className="mt-4 max-w-xl text-white/65">
            End-to-end creative support for studios and publishers who want distinctive worlds and
            production-ready assets.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-navy-soft/80 p-4 backdrop-blur"
              >
                <Link to={`/services/${service.slug}`} className="group block">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mb-4 h-36 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{service.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>

          <Link to="/services" className="btn-primary mt-8">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
