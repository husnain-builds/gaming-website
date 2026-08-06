import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Contact } from '../components/Contact'
import { Seo } from '../components/Seo'
import {
  getAboutPage,
  getAboutStats,
  getAboutTeam,
  getAboutValues,
} from '../utils/about-data.js'
import { routeMeta } from '../utils/site-meta.js'

export function AboutPage() {
  const about = getAboutPage()
  const values = getAboutValues()
  const stats = getAboutStats()
  const team = getAboutTeam()
  const meta = routeMeta.about
  const storyParagraphs = about.story
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="bg-white">
      <Seo
        title={meta.title}
        description={meta.description}
        image={meta.image}
        path={meta.path}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(ellipse_at_80%_80%,rgba(251,191,36,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            {about.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
            {about.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {about.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary">
              Our Services
            </Link>
            <a href="#contact" className="btn-ghost">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <img
              src={about.focusImage}
              alt="Studio world art"
              className="character-cutout float-delayed mx-auto w-[88%] max-w-lg"
            />
            <img
              src={about.focusPortrait}
              alt="Studio character"
              className="absolute -bottom-2 right-4 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl sm:h-36 sm:w-36 lg:right-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl">
              {about.focusTitle}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {about.focusCopy}
            </p>
            <Link to="/portfolio" className="btn-primary mt-8">
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy text-white section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
              {about.storyTitle}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px]">
            <img
              src={about.heroImage}
              alt="Busters studio team collaborating"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[22px] bg-slate-50 p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-violet">
                {about.missionTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-navy sm:text-lg">{about.mission}</p>
            </article>
            <article className="rounded-[22px] bg-slate-50 p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-violet">
                {about.visionTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-navy sm:text-lg">{about.vision}</p>
            </article>
          </div>

          <h2 className="mt-16 font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl">
            What We Believe
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.article
                key={value.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-[22px] border border-slate-100 p-6"
              >
                <p className="font-display text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="slant-both relative overflow-hidden bg-navy text-white section-pad">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 py-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl">
            Meet The Crew
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            Designers, artists, and producers shipping worlds players remember.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto aspect-square w-full max-w-[220px] rounded-[28px] object-cover"
                />
                <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-violet">{member.role}</p>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-slate-100">
        <Contact />
      </div>
    </div>
  )
}
