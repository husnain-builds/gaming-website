import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy text-white"
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(7,11,22,0.92) 0%, rgba(11,17,32,0.78) 45%, rgba(11,17,32,0.55) 100%), url(/images/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(ellipse_at_80%_70%,rgba(34,211,238,0.12),transparent_40%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan">
            Game Studio
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] uppercase sm:text-5xl lg:text-6xl">
            <span className="block text-cyan">Busters</span>
            We Design
            <br />
            Exceptional
            <br />
            <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
              Games
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            From concept art to polished gameplay, we craft immersive worlds and unforgettable
            characters that players love to return to.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary">
              Explore Games
            </a>
            <a href="#about" className="btn-ghost">
              About Studio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-xl"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-3xl" />
          <img
            src="/images/hero-character.png?v=2"
            alt="Fantasy warrior character"
            width={1024}
            height={1536}
            className="character-cutout float relative z-10 mx-auto h-auto w-full max-w-[420px] object-contain lg:max-w-[520px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
