import { motion } from 'framer-motion'

export function Collaborate() {
  return (
    <section id="games" className="bg-white pb-4 section-pad pt-0">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
            Let&apos;s Create Great Things Together
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Partner with our team to ship bold gameplay experiences — from prototype to launch.
          </p>
          <a href="#contact" className="btn-primary mt-8">
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[28px]"
        >
          <img
            src="/images/collaborate.png"
            alt="Game developers collaborating"
            className="aspect-[16/10] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
