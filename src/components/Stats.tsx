import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const stats = [
  { value: '190+', label: 'Projects Delivered' },
  { value: '30+', label: 'Studio Partners' },
  { value: '240+', label: 'Art Assets Shipped' },
  { value: '680+', label: 'Happy Players Mentions' },
]

export function Stats() {
  const { ref: parallaxRef, y: parallaxY } = useParallax(50)

  return (
    <section className="slant-both relative overflow-hidden bg-navy text-white section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-8 lg:grid-cols-2">
        <motion.div
          ref={parallaxRef}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <motion.img
            style={{ y: parallaxY }}
            src="/images/stats-island.png"
            alt="Fantasy island illustration"
            className="character-cutout float mx-auto w-[80%] max-w-md"
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
