import { motion, useTransform } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const awards = [
  { year: '2024', title: 'Best Indie Visual Design', org: 'PixelForge Awards' },
  { year: '2023', title: 'Outstanding Character Art', org: 'GameCraft Summit' },
  { year: '2022', title: 'Studio of the Year Nominee', org: 'Northline Expo' },
  { year: '2021', title: 'Excellence in Worldbuilding', org: 'Artisan Games' },
]

export function Awards() {
  const { ref: parallaxRef, y: parallaxY, scrollYProgress } = useParallax(35)
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6])

  return (
    <section className="bg-white section-pad">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
          We Receive Memorable & Worthy Rewards
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[28px] bg-gradient-to-b from-slate-50 to-violet/5 p-8"
          >
            <motion.img
              style={{ y: parallaxY, rotate }}
              src="/images/trophy.png"
              alt="Gaming award trophy"
              className="character-cutout mx-auto w-64"
            />
          </motion.div>

          <ul className="divide-y divide-slate-200">
            {awards.map((award, i) => (
              <motion.li
                key={award.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center justify-between gap-4 py-5"
              >
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                    {award.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{award.org}</p>
                </div>
                <span className="font-display text-lg font-bold text-violet">{award.year}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
