import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const quotes = [
  {
    quote:
      'Busters elevated our art pipeline overnight. The characters felt iconic from the first pass.',
    name: 'Elena Voss',
    role: 'Producer, Northline Games',
    avatar: '/images/team-2.png',
  },
  {
    quote:
      'Clear communication, stunning environments, and assets that dropped straight into production.',
    name: 'Marcus Hale',
    role: 'Studio Lead, Falcon Interactive',
    avatar: '/images/team-1.png',
  },
  {
    quote:
      'They understood our fantasy tone immediately. Players still talk about the world they built.',
    name: 'Priya Nair',
    role: 'Creative Lead, Skyloom',
    avatar: '/images/team-4.png',
  },
]

export function Testimonials() {
  const { ref: parallaxRef, y: parallaxY } = useParallax<HTMLElement>(70)

  return (
    <section ref={parallaxRef} className="slant-both relative overflow-hidden bg-navy text-white section-pad">
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-30 lg:block"
      >
        <img
          src="/images/mage-character.png"
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl py-8">
        <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
          Here&apos;s What Clients Say
        </h2>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quotes.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="min-w-[280px] max-w-sm shrink-0 rounded-3xl border border-white/10 bg-navy-soft/80 p-6 backdrop-blur sm:min-w-[340px]"
            >
              <p className="text-base leading-relaxed text-white/75">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/50">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
