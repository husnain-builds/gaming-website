import { motion } from 'framer-motion'

const team = [
  { name: 'Aiden Cole', role: 'Creative Director', image: '/images/team-1.png' },
  { name: 'Maya Chen', role: 'Lead Artist', image: '/images/team-2.png' },
  { name: 'Noah Reyes', role: 'Art Director', image: '/images/team-3.png' },
  { name: 'Lila Brooks', role: 'Producer', image: '/images/team-4.png' },
]

export function Team() {
  return (
    <section className="bg-white section-pad">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-extrabold uppercase leading-tight text-navy sm:text-4xl lg:text-5xl">
          Trusted By Top Gaming Publishers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          A tight crew of designers, artists, and producers shipping worlds players remember.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
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
              <p className="mt-1 text-sm text-muted">{member.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
