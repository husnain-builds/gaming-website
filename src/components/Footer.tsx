import { Link } from 'react-router-dom'
import { ImageMarquee } from './ImageMarquee'
import { getFeaturedServices } from '../utils/services-data.js'

export function Footer() {
  const footerServices = getFeaturedServices(4)

  return (
    <footer className="bg-navy text-white">
      <ImageMarquee />

      <div className="relative overflow-hidden section-pad">
        <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18vw] font-extrabold uppercase tracking-widest text-white/[0.04]">
          BUSTERS
        </p>

        <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-deep font-display text-sm font-bold">
                B
              </span>
              <span className="font-display text-lg font-bold tracking-[0.18em]">BUSTERS</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              A creative game studio crafting exceptional art, worlds, and playable experiences.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-cyan">
              Sitemap
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>
                <Link to="/" className="text-white/65 transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/65 transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/65 transition hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white/65 transition hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-cyan">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-white/65 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-cyan transition hover:text-white">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-cyan">
              Social
            </h4>
            <ul className="mt-4 flex gap-3 text-sm text-white/65">
              {['X', 'IG', 'YT', 'LI'].map((s) => (
                <li
                  key={s}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Busters Studio. All rights reserved.
      </div>
    </footer>
  )
}
