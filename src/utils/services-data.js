/**
 * Services catalog for the Busters studio site.
 * Homepage, services index, and detail pages all read from here.
 */

export const services = [
  {
    id: 1,
    slug: '3d-modelling',
    title: '3D Modelling',
    tagline: 'Production-ready characters, props, and worlds for real-time engines.',
    excerpt:
      'High-fidelity characters, props, and environments built for modern game engines without wasting poly budgets.',
    description: `Our 3D modelling team turns concepts into engine-ready assets with clean topology, smart UV layouts, and materials that hold up in gameplay cameras. We model for performance first, then push detail where players will actually look.

Whether you need a hero character, modular environment kits, or prop families for an entire biome, we align modelling with animation, lighting, and LODs from the first blockout pass.

You get assets that drop into Unity, Unreal, or custom pipelines with clear naming, documentation, and handoff notes your team can trust.`,
    image: '/images/service-3d.png',
    gallery: ['/images/service-3d.png', '/images/hero-character.png', '/images/floating-island.png'],
    category: 'Art Production',
    deliverables: ['Characters', 'Props', 'Environments', 'LODs & Collision'],
    timeline: '2–8 weeks',
    bestFor: 'Studios needing shippable 3D assets with clear production standards',
    process: [
      'Brief & reference alignment',
      'Blockout and scale validation',
      'High-detail sculpt or hard-surface pass',
      'Retopo, UVs, materials, and engine drop-in',
    ],
    highlights: [
      'Topology authored for deformation and performance',
      'Shared material libraries for cohesive worlds',
      'Engine validation before final polish',
    ],
  },
  {
    id: 2,
    slug: 'art-direction',
    title: 'Art Direction',
    tagline: 'A visual language players recognize in a single glance.',
    excerpt:
      'A cohesive visual language that makes your world instantly recognizable across trailers, UI, and gameplay.',
    description: `Art direction is where fantasy becomes a system. We define silhouette rules, color scripts, material language, and lighting intent so every artist and partner ships toward the same look.

Our directors work side-by-side with design and narrative so the world feels intentional — not like a collage of pretty frames. From moodboards to production bibles, we keep the vision sharp through the full pipeline.

The result is a game that looks like itself in every screenshot, social clip, and store page.`,
    image: '/images/service-art.png',
    gallery: ['/images/service-art.png', '/images/portfolio-2.png', '/images/mage-character.png'],
    category: 'Creative Leadership',
    deliverables: ['Style Guides', 'Color Scripts', 'Moodboards', 'Art Bibles'],
    timeline: 'Ongoing or 3–6 week kickoff',
    bestFor: 'Teams aligning a new IP or refreshing an existing visual identity',
    process: [
      'Tone and audience discovery',
      'Visual pillars and reference boards',
      'Key art and color script exploration',
      'Production bible and review cadence',
    ],
    highlights: [
      'Direction that survives production pressure',
      'Clear rules for characters, worlds, and UI',
      'Weekly reviews that unblock artists fast',
    ],
  },
  {
    id: 3,
    slug: 'game-development',
    title: 'Game Development',
    tagline: 'Playable systems, prototypes, and production support that feel good.',
    excerpt:
      'From vertical slices to feature support — gameplay implementation grounded in fun, clarity, and ship dates.',
    description: `We help studios turn design intent into playable builds. That can mean a vertical slice, combat prototype, traversal system, or production support inside an existing codebase.

Our developers partner closely with design and art so features land with the right feel — timing, camera, feedback, and edge cases included. Scope stays honest, milestones stay readable.

Whether you need a spike in two weeks or a longer feature track, we ship playable progress you can evaluate with real players.`,
    image: '/images/collaborate.png',
    gallery: ['/images/collaborate.png', '/images/video-teaser.png', '/images/portfolio-3.png'],
    category: 'Engineering',
    deliverables: ['Prototypes', 'Vertical Slices', 'Gameplay Features', 'Tooling Support'],
    timeline: '2–12 weeks',
    bestFor: 'Teams needing playable proof or feature bandwidth',
    process: [
      'Gameplay goals and success metrics',
      'Rapid prototype or spike',
      'Iteration with design and QA feedback',
      'Hardening, polish, and handoff',
    ],
    highlights: [
      'Fun-first prototyping before over-engineering',
      'Clear milestone demos for stakeholders',
      'Clean handoff docs for your internal team',
    ],
  },
  {
    id: 4,
    slug: 'character-design',
    title: 'Character Design',
    tagline: 'Heroes and casts with identity that survives every camera angle.',
    excerpt:
      'From silhouette sketches to final look-dev — characters built to be loved, marketed, and animated.',
    description: `Strong characters start as readable shapes. We design casts with clear roles, costume language, and emotional range so players know who someone is before a line of dialogue lands.

Our pipeline covers concept exploration, turnarounds, expression sheets, and collaboration with modelling and rigging so the final 3D hero still feels like the approved concept.

Marketing teams get icons. Animators get clear volumes. Players get characters they remember.`,
    image: '/images/hero-character.png',
    gallery: ['/images/hero-character.png', '/images/focus-character.png', '/images/team-2.png'],
    category: 'Art Production',
    deliverables: ['Concepts', 'Turnarounds', 'Expression Sheets', 'Look-Dev Support'],
    timeline: '1–5 weeks per character',
    bestFor: 'Games needing iconic heroes, enemies, or NPCs',
    process: [
      'Role and story brief',
      'Silhouette and costume exploration',
      'Color and material passes',
      'Handoff package for 3D and marketing',
    ],
    highlights: [
      'Silhouette-first identity that reads at distance',
      'Designs that animate cleanly',
      'Consistent cast language across factions',
    ],
  },
  {
    id: 5,
    slug: 'ui-ux-for-games',
    title: 'UI/UX For Games',
    tagline: 'Menus and HUDs that stay beautiful without slowing players down.',
    excerpt:
      'Inventory, maps, skill trees, and combat HUDs designed for clarity on controller, mouse, and touch.',
    description: `Game UI is part of the fantasy. We design interfaces that feel native to your world while remaining fast to scan under pressure.

From wireframes to final visual systems, we cover HUD logic, menu architecture, iconography, and accessibility basics. Controller and keyboard/mouse parity is planned early — not patched late.

Players spend less time fighting menus and more time inside your game.`,
    image: '/images/blog-1.png',
    gallery: ['/images/blog-1.png', '/images/portfolio-1.png', '/images/service-art.png'],
    category: 'Design',
    deliverables: ['Wireframes', 'HUD Systems', 'Menu Flows', 'Icon Sets'],
    timeline: '2–6 weeks',
    bestFor: 'RPGs, action games, and live-service UIs needing clarity',
    process: [
      'Player journey and friction mapping',
      'Information architecture and wireframes',
      'Visual UI language aligned to art direction',
      'Prototype reviews and implementation support',
    ],
    highlights: [
      'Readable under combat and motion',
      'Controller-first thinking when needed',
      'UI that matches your world tone',
    ],
  },
  {
    id: 6,
    slug: 'platform-support',
    title: 'Platform Support',
    tagline: 'Ship clean across PC, console, and mobile targets.',
    excerpt:
      'Platform packaging, performance targets, and certification-minded polish so launches feel professional.',
    description: `Launching on multiple platforms means different constraints, stores, and player expectations. We help teams plan performance budgets, control schemes, UI scaling, and submission-minded polish.

Support can include optimization passes, platform feature integration guidance, and QA-focused checklists that reduce last-minute surprises.

Your game should feel native wherever players meet it.`,
    image: '/images/portfolio-3.png',
    gallery: ['/images/portfolio-3.png', '/images/collaborate.png', '/images/stats-island.png'],
    category: 'Production',
    deliverables: ['Platform Plans', 'Perf Passes', 'Control Mapping', 'Launch Checklists'],
    timeline: '2–10 weeks',
    bestFor: 'Teams preparing multi-platform releases',
    process: [
      'Target platform audit',
      'Performance and UX gap analysis',
      'Implementation and polish sprints',
      'Pre-submission review support',
    ],
    highlights: [
      'Practical budgets for art and gameplay',
      'Input and UI parity across devices',
      'Checklists that reduce launch risk',
    ],
  },
]

export function getAllServices() {
  return [...services]
}

export function getFeaturedServices(count = 2) {
  return getAllServices().slice(0, count)
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null
}

export function getRelatedServices(slug, count = 3) {
  const current = getServiceBySlug(slug)
  if (!current) return getAllServices().slice(0, count)

  return getAllServices()
    .filter((service) => service.slug !== slug)
    .filter((service) => service.category === current.category)
    .concat(
      getAllServices().filter(
        (service) => service.slug !== slug && service.category !== current.category,
      ),
    )
    .slice(0, count)
}
