import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAboutPage } from '../utils/about-data.js'

export function Focus() {
  const about = getAboutPage()

  return (
    <section id="about" className="relative overflow-hidden bg-white section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={about.focusImage}
            alt="Floating fantasy island"
            className="character-cutout float-delayed mx-auto w-[88%] max-w-lg"
          />
          <img
            src={about.focusPortrait}
            alt="Game character portrait"
            className="absolute -bottom-2 right-4 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl sm:h-36 sm:w-36 lg:right-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
            {about.focusTitle}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {about.focusCopy}
          </p>
          <Link to="/about" className="btn-primary mt-8">
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
