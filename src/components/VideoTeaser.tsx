import { motion } from 'framer-motion'

export function VideoTeaser() {
  return (
    <section className="slant-both relative overflow-hidden bg-navy">
      <div
        className="relative min-h-[420px] bg-cover bg-center section-pad"
        style={{ backgroundImage: 'url(/images/video-teaser.png)' }}
      >
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative mx-auto flex min-h-[320px] max-w-4xl flex-col items-center justify-center text-center text-white">
          <motion.button
            type="button"
            aria-label="Play teaser"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06 }}
            className="mb-8 grid h-20 w-20 place-items-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur transition"
          >
            <span className="ml-1 border-y-[12px] border-l-[20px] border-y-transparent border-l-white" />
          </motion.button>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Get Ready To Show Your Skills
          </h2>
        </div>
      </div>
    </section>
  )
}
