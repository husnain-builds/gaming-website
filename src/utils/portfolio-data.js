/**
 * Demo portfolio catalog for the Busters studio site.
 * These projects are fictional samples for presentation only.
 */

export const projects = [
  {
    id: 1,
    slug: 'spectre-of-the-falcon-city',
    title: 'Spectre of the Falcon City',
    tagline: 'Neon fantasy action-adventure across a floating skyline.',
    excerpt:
      'A cinematic open-city adventure where crystal wings, rooftop chases, and political intrigue collide under neon dusk.',
    description: `Spectre of the Falcon City follows a rogue sky-courier racing through tiered districts of a floating metropolis. Players weave parkour traversal with light stealth and melee combat while uncovering a conspiracy buried beneath the city’s glowing spires.

The art direction blends noir lighting with stylized fantasy materials — reflective metals, emissive signage, and soft volumetric haze. Combat focuses on verticality: wall-runs, glide bursts, and mid-air finishers that keep every encounter cinematic.

This case study highlights environment storytelling, hero readability, and a production path from blockout to trailer-ready sequences.`,
    image: '/images/portfolio-1.png',
    gallery: ['/images/portfolio-1.png', '/images/hero-bg.png', '/images/video-teaser.png'],
    platforms: ['PC', 'Console'],
    genre: 'Action Adventure',
    year: '2025',
    role: 'Art Direction & World Design',
    client: 'Northline Interactive',
    services: ['Art Direction', '3D Environments', 'Character Look Dev'],
    highlights: [
      'Vertical traversal combat designed for skyline rooftops',
      'District-based color scripts for day and neon-night cycles',
      'Hero silhouette locked early for marketing and gameplay cameras',
    ],
  },
  {
    id: 2,
    slug: 'ruins-of-the-crystal-grove',
    title: 'Ruins of the Crystal Grove',
    tagline: 'A contemplative exploration RPG inside a living forest temple.',
    excerpt:
      'Wander ancient ruins where glowing flora, forgotten shrines, and soft puzzle combat reveal a forgotten nature spirit.',
    description: `Ruins of the Crystal Grove is a mid-scale exploration RPG built around atmosphere and discovery. Players guide a young mage through layered temple ruins where every room teaches a new traversal or resonance puzzle.

The grove’s visual language uses cyan crystals against deep moss greens, with god-rays and particle motes that sell “sacred” without heavy UI. Enemy encounters stay light so the focus remains on mood, music, and environmental storytelling.

This project showcases our environment pipeline, prop families, and lighting recipes for stylized realism.`,
    image: '/images/portfolio-2.png',
    gallery: ['/images/portfolio-2.png', '/images/floating-island.png', '/images/stats-island.png'],
    platforms: ['PC', 'Mobile'],
    genre: 'Exploration RPG',
    year: '2024',
    role: 'Environment Art & Lighting',
    client: 'Skyloom Games',
    services: ['Environment Art', 'Lighting', 'Prop Modelling'],
    highlights: [
      'Shared trim sheets for ruins, vines, and crystal clusters',
      'Puzzle rooms that teach mechanics through lighting cues',
      'Mobile-friendly LODs without losing forest density',
    ],
  },
  {
    id: 3,
    slug: 'canyon-drift-protocol',
    title: 'Canyon Drift Protocol',
    tagline: 'High-speed desert racing with adaptive track events.',
    excerpt:
      'Drift through carved canyons and solar highways in a competitive racer built for spectacle and readable speed.',
    description: `Canyon Drift Protocol is an arcade-sim hybrid racer set across sun-baked canyons and futuristic solar roads. Courses branch mid-race with weather bursts, shortcut collapses, and temporary boost lanes.

Vehicle silhouettes stay bold and readable at speed, while canyon lighting uses warm rim accents and long shadows to sell motion. UI stays minimal so players keep eyes on the track and rival telegraphs.

This sample demonstrates vehicle look-dev, track dressing, and camera systems that feel fast without becoming illegible.`,
    image: '/images/portfolio-3.png',
    gallery: ['/images/portfolio-3.png', '/images/collaborate.png', '/images/service-3d.png'],
    platforms: ['PC', 'Console'],
    genre: 'Racing',
    year: '2024',
    role: 'Vehicle Art & Track Dressing',
    client: 'Falcon Interactive',
    services: ['Vehicle Modelling', 'Track Art', 'VFX Support'],
    highlights: [
      'Readable vehicle silhouettes at high camera speeds',
      'Dynamic shortcut events that keep races unpredictable',
      'Heat-haze and dust VFX tuned for performance targets',
    ],
  },
  {
    id: 4,
    slug: 'echoes-of-ironvale',
    title: 'Echoes of Ironvale',
    tagline: 'Tactical fantasy battles in a frostbitten border kingdom.',
    excerpt:
      'Command small squads through snow-lit fortresses where positioning, timing, and elemental synergies decide every clash.',
    description: `Echoes of Ironvale is a turn-based tactical fantasy title set on a contested frozen frontier. Players manage a compact roster of specialists — shieldbearers, frost archers, and rune engineers — across modular battlefield tiles.

Visual clarity is the north star: unit colors, ability telegraphs, and elevation read instantly even in busy storm weather. Environments use muted stone and ice so ability VFX can pop without clutter.

This demo piece focuses on UI/UX for tactics, unit identity, and battlefield readability under harsh weather conditions.`,
    image: '/images/service-art.png',
    gallery: ['/images/service-art.png', '/images/mage-character.png', '/images/trophy.png'],
    platforms: ['PC'],
    genre: 'Tactical RPG',
    year: '2023',
    role: 'UI/UX & Character Identity',
    client: 'Artisan Games',
    services: ['UI/UX', 'Character Design', 'Battle VFX Direction'],
    highlights: [
      'Ability telegraphs designed for controller and mouse parity',
      'Unit identity systems that stay readable in snowstorms',
      'Modular fortress tiles for rapid level iteration',
    ],
  },
  {
    id: 5,
    slug: 'lumen-wardens',
    title: 'Lumen Wardens',
    tagline: 'Co-op creature-rescue adventure with luminous biomes.',
    excerpt:
      'Team up to guide fragile light-creatures home through glowing caverns, tide pools, and sky gardens.',
    description: `Lumen Wardens is a cozy-forward co-op adventure about escorting luminous creatures through fragile biomes. Players split roles — guide, shield, and resonate — to keep each creature safe from environmental hazards.

The world leans into soft emissive palettes and friendly creature silhouettes, with traversal toys that encourage cooperation over competition. Sessions are short and replayable, ideal for streamer-friendly drops.

This concept package shows creature design, co-op interaction loops, and biome art direction built for warmth and clarity.`,
    image: '/images/blog-1.png',
    gallery: ['/images/blog-1.png', '/images/focus-character.png', '/images/blog-2.png'],
    platforms: ['PC', 'Console', 'Mobile'],
    genre: 'Co-op Adventure',
    year: '2026',
    role: 'Creative Direction',
    client: 'Internal Concept',
    services: ['Creative Direction', 'Creature Design', 'Biome Concepts'],
    highlights: [
      'Short-session co-op loops built for drop-in play',
      'Creature silhouettes designed for emotional attachment',
      'Biome kits that scale from mobile to console fidelity',
    ],
  },
]

export function getAllProjects() {
  return [...projects].sort((a, b) => Number(b.year) - Number(a.year))
}

export function getFeaturedProjects(count = 3) {
  return getAllProjects().slice(0, count)
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null
}

export function getRelatedProjects(slug, count = 2) {
  return getAllProjects()
    .filter((project) => project.slug !== slug)
    .slice(0, count)
}
