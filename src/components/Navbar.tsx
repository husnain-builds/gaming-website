import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const homeLinks = [
  { href: '/#home', label: 'Home' },
  // { href: '/#games', label: 'Games' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-navy/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet to-violet-deep font-display text-sm font-bold text-white">
            B
          </span>
          <span className="font-display text-lg font-bold tracking-[0.18em] text-white">
            BUSTERS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {homeLinks.map((link) => (
            <Link key={link.href} to={link.href} className="nav-link text-sm font-medium transition">
              {link.label}
            </Link>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link text-sm font-medium transition ${isActive ? '!text-cyan' : ''}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `nav-link text-sm font-medium transition ${isActive ? '!text-cyan' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `nav-link text-sm font-medium transition ${isActive ? '!text-cyan' : ''}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `nav-link text-sm font-medium transition ${isActive ? '!text-cyan' : ''}`
            }
          >
            Blog
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/#contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Join Us
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {homeLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className="nav-link" onClick={() => setOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/blogs" className="nav-link" onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <Link to="/#contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
