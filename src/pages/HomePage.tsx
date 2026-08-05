import { Hero } from '../components/Hero'
import { Focus } from '../components/Focus'
import { Services } from '../components/Services'
import { Portfolio } from '../components/Portfolio'
import { Collaborate } from '../components/Collaborate'
import { Stats } from '../components/Stats'
import { Awards } from '../components/Awards'
import { VideoTeaser } from '../components/VideoTeaser'
import { Team } from '../components/Team'
import { Testimonials } from '../components/Testimonials'
import { Blog } from '../components/Blog'
import { Marquee } from '../components/Marquee'
import { Contact } from '../components/Contact'
import { Seo } from '../components/Seo'
import { routeMeta } from '../utils/site-meta.js'

export function HomePage() {
  const meta = routeMeta.home

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        image={meta.image}
        path={meta.path}
      />
      <Hero />
      <Focus />
      <Services />
      <Portfolio />
      <Collaborate />
      <Stats />
      <Awards />
      <VideoTeaser />
      <Team />
      <Testimonials />
      <Blog />
      <Marquee />
      <Contact />
    </>
  )
}
