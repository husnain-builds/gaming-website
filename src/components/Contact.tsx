import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-white section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-3xl" />
          <img
            src="/images/hero-character.png?v=2"
            alt="Busters character"
            width={1024}
            height={1536}
            className="character-cutout float relative z-10 mx-auto h-auto w-[75%] max-w-md object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
            Book Your Appointment Today!
          </h2>
          <p className="mt-4 text-muted">
            Tell us about your next game. We&apos;ll reply with a tailored production plan.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
                Name
              </label>
              <input id="name" name="name" required className="field" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="field"
                placeholder="you@studio.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="field resize-none"
                placeholder="Project details..."
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              {sent ? 'Message Sent' : 'Submit'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
