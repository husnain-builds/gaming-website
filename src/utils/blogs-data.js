/**
 * Central blog catalog for the Busters studio site.
 * Homepage, blog index, and detail pages all read from here.
 */

export const blogs = [
  {
    id: 1,
    slug: 'building-immersive-controllers-for-fantasy-worlds',
    title: 'Building Immersive Controllers For Fantasy Worlds',
    excerpt:
      'How thoughtful input design turns magic systems into muscle memory players never want to put down.',
    content: `Great fantasy games do more than look magical — they feel magical in the hands. At Busters, controller and input design sits next to art direction from day one.

We start by mapping every fantasy verb to a physical action: cast, dodge, climb, and converse. Then we prototype those actions on a blank stick figure before a single prop is modeled. If the fantasy does not feel good with placeholders, prettier art will not save it.

Haptic feedback and subtle camera push help sell weight without cluttering the HUD. For spellcasting, we use short wind-up windows that reward timing rather than spam. The result is a control scheme players can learn in minutes and master for months.

When you ship a fantasy world, remember: immersion is not only what players see. It is what their thumbs believe.`,
    image: '/images/blog-1.png',
    category: 'Game Design',
    author: 'Aiden Cole',
    date: '2026-07-18',
    readTime: '6 min read',
  },
  {
    id: 2,
    slug: 'how-our-art-team-shapes-character-identity',
    title: 'How Our Art Team Shapes Character Identity',
    excerpt:
      'From silhouette sketches to final materials, the pipeline that makes every hero instantly recognizable.',
    content: `Character identity is solved long before texturing begins. Our artists lock a readable silhouette first — something you could recognize as a black cutout on a foggy horizon.

We then build a color script that assigns emotional roles: cool blues for resolve, warm accents for vulnerability, and metallic highlights for power. Costume language follows the same rules. Every strap, crystal, and cape fold must support the character’s story, not decorate it.

Feedback loops are short. Concept, blockout, and greybox passes happen in the same week so narrative and gameplay can still pivot. Only when the character feels “right” in motion do we push to high-resolution detail.

Identity is not a coat of paint. It is a decision stack that starts with shape and ends with feeling.`,
    image: '/images/blog-2.png',
    category: 'Art Direction',
    author: 'Maya Chen',
    date: '2026-06-02',
    readTime: '5 min read',
  },
  {
    id: 3,
    slug: 'color-scripts-that-sell-emotion-early',
    title: 'Color Scripts That Sell Emotion Early',
    excerpt:
      'Why painting mood before modeling saves production weeks and keeps teams aligned on tone.',
    content: `A color script is a film strip for emotion. Before we build levels or animate cutscenes, we paint key beats in broad color so lighting, VFX, and audio share one emotional map.

Early scripts expose conflicts fast. A “hopeful” green forest next to a “dread” purple dungeon might fight the story if the transition is abrupt. Fixing that on a color board takes hours. Fixing it after world lighting is locked takes weeks.

We share color scripts with publishers and partners as early alignment tools. Stakeholders react to feeling, not wireframes. That clarity protects budgets and keeps the final game coherent from trailer to end credits.`,
    image: '/images/service-art.png',
    category: 'Art Direction',
    author: 'Noah Reyes',
    date: '2026-05-21',
    readTime: '4 min read',
  },
  {
    id: 4,
    slug: 'lighting-tricks-for-stylized-realism',
    title: 'Lighting Tricks For Stylized Realism',
    excerpt:
      'Practical lighting recipes that keep stylized worlds readable without looking flat or over-lit.',
    content: `Stylized realism lives in the middle ground between cartoon bounce and photographic grit. Our lighting rule is simple: one hero light with intention, one fill for form, and one accent for magic.

We avoid flooding scenes with ambient light. Shadows create depth and guide the eye to interactive props. Rim lights separate characters from busy backgrounds, especially in forest and city nightscapes.

For fantasy crystals and VFX, we treat emissive materials as secondary light sources. They should tint nearby surfaces slightly without washing out the palette. The goal is atmosphere players notice subconsciously — not a lighting showcase that steals focus from gameplay.`,
    image: '/images/portfolio-2.png',
    category: 'Technical Art',
    author: 'Maya Chen',
    date: '2026-04-09',
    readTime: '7 min read',
  },
  {
    id: 5,
    slug: 'from-sketch-to-engine-ready-hero',
    title: 'From Sketch To Engine-Ready Hero',
    excerpt:
      'A clear production path from concept sketch to a hero character that drops cleanly into real-time engines.',
    content: `Shipping a hero is a relay, not a solo sprint. Concept hands a clear brief to modeling. Modeling hands clean topology to rigging. Rigging hands deformation tests to animation. Animation hands motion language to gameplay.

At each handoff we run a “drop test” into the engine. If the asset fails performance, scale, or readability checks, it goes back before more detail is added. That discipline prevents beautiful characters that break combat cameras or exceed poly budgets.

We also prototype LODs early. A hero that looks perfect in a close-up trailer still needs to read at distance during open-world traversal. Engine-ready means ready for every camera the player will ever use.`,
    image: '/images/hero-character.png',
    category: 'Production',
    author: 'Lila Brooks',
    date: '2026-03-14',
    readTime: '8 min read',
  },
  {
    id: 6,
    slug: 'pipeline-habits-that-save-production-weeks',
    title: 'Pipeline Habits That Save Production Weeks',
    excerpt:
      'Small studio habits — naming, reviews, and versioning — that quietly protect launch dates.',
    content: `Pipelines fail quietly until they fail loudly. The habits that save weeks are boring on purpose: consistent naming, weekly art reviews, and one source of truth for asset status.

We keep a living checklist for every asset: concept approved, blockout approved, materials approved, engine validated. No asset jumps stages without a stamp. That sounds strict until you remember the cost of rework after marketing has already locked trailer footage.

Automation helps, but culture matters more. Teams that celebrate clean handoffs ship faster than teams that celebrate last-minute heroics.`,
    image: '/images/collaborate.png',
    category: 'Production',
    author: 'Lila Brooks',
    date: '2026-02-27',
    readTime: '5 min read',
  },
  {
    id: 7,
    slug: 'designing-open-worlds-players-actually-explore',
    title: 'Designing Open Worlds Players Actually Explore',
    excerpt:
      'How landmarks, curiosity loops, and readable routes turn big maps into memorable journeys.',
    content: `Open worlds fail when they are large but empty of intention. Players do not explore hectares — they chase questions. Why is that tower glowing? What lives beyond the ridge? Who left those footprints?

We design curiosity loops every thirty to ninety seconds of travel: a silhouette landmark, a sound cue, a scrap of environmental storytelling. Traversal tools then reward answering those questions with shortcuts and vistas.

The map should teach itself. If players need a quest marker for every point of interest, the world is not speaking clearly enough.`,
    image: '/images/portfolio-1.png',
    category: 'Game Design',
    author: 'Aiden Cole',
    date: '2026-02-10',
    readTime: '6 min read',
  },
  {
    id: 8,
    slug: '3d-modelling-for-real-time-fantasy-props',
    title: '3D Modelling For Real-Time Fantasy Props',
    excerpt:
      'Topology, texel budgets, and material tricks that keep fantasy props sharp in modern engines.',
    content: `Fantasy props tempt artists into over-detail. Crystals, runes, and ornate metals look stunning in isolation and expensive in a crowded scene. Our modelling brief always asks: what is this prop doing for gameplay?

Interactive props get cleaner topology and dedicated collision. Background props lean on trim sheets and baked detail. Shared material libraries keep worlds cohesive and reduce shader switches.

We also author prop families — one dagger base, many cultural variants — so worlds feel rich without exploding unique asset counts.`,
    image: '/images/service-3d.png',
    category: '3D Art',
    author: 'Noah Reyes',
    date: '2026-01-22',
    readTime: '6 min read',
  },
  {
    id: 9,
    slug: 'crafting-combat-that-feels-weighty-and-fair',
    title: 'Crafting Combat That Feels Weighty And Fair',
    excerpt:
      'Timing windows, telegraphing, and camera rules behind combat that players call “juicy” and fair.',
    content: `Weighty combat is clarity plus consequence. Players need to see attacks coming, commit to responses, and feel the result in animation, sound, and camera.

We telegraph enemy moves with readable shapes and audio stingers, then protect fair recovery frames so skillful play is rewarded. Hit reactions are authored, not improvised by physics alone.

Camera rules matter as much as damage numbers. A fight that looks dramatic but hides the next wind-up will feel unfair no matter how pretty the VFX are.`,
    image: '/images/video-teaser.png',
    category: 'Game Design',
    author: 'Aiden Cole',
    date: '2025-12-18',
    readTime: '7 min read',
  },
  {
    id: 10,
    slug: 'building-trust-with-gaming-publishers',
    title: 'Building Trust With Gaming Publishers',
    excerpt:
      'How clear milestones, visual packages, and honest risk reports turn partnerships into long-term alliances.',
    content: `Publishers do not only buy talent — they buy predictability. We earn trust with transparent milestones, early playable slices, and weekly visual packages that show progress without vanity metrics.

When risks appear, we surface them with options, not excuses. A delayed boss fight is easier to absorb when the alternative schedule and scope tradeoffs are already drafted.

Long-term relationships come from shipping what you promised, then offering a clear path for what comes next.`,
    image: '/images/team-1.png',
    category: 'Studio',
    author: 'Lila Brooks',
    date: '2025-11-30',
    readTime: '4 min read',
  },
  {
    id: 11,
    slug: 'sound-design-that-makes-worlds-feel-alive',
    title: 'Sound Design That Makes Worlds Feel Alive',
    excerpt:
      'Layering ambience, Foley, and musical motifs so players feel presence even with their eyes closed.',
    content: `Audio is half of immersion and often less than a tenth of the conversation. We treat sound as worldbuilding: regional ambience, creature vocabularies, and musical motifs that evolve with player progress.

Foley for footsteps and cloth should change with surface and weather. Magic needs unique sonic signatures so players recognize spells without looking at the UI.

When art, animation, and audio move together, a forest does not just look alive — it breathes.`,
    image: '/images/hero-bg.png',
    category: 'Audio',
    author: 'Maya Chen',
    date: '2025-11-05',
    readTime: '5 min read',
  },
  {
    id: 12,
    slug: 'ui-ux-patterns-for-modern-rpg-menus',
    title: 'UI/UX Patterns For Modern RPG Menus',
    excerpt:
      'Inventory, maps, and skill trees that stay beautiful without slowing players down mid-adventure.',
    content: `RPG menus carry a heavy load: identity, systems literacy, and inventory management. Our UX principle is “pause with purpose.” Opening a menu should feel like consulting a grimoire, not filing taxes.

We prioritize scannable layouts, strong iconography, and keyboard or controller parity. Deep systems stay one or two clicks away. Tooltips teach without dumping novels onto the screen.

A beautiful menu that takes twelve seconds to find a potion is still a failed menu.`,
    image: '/images/portfolio-3.png',
    category: 'UI/UX',
    author: 'Noah Reyes',
    date: '2025-10-12',
    readTime: '6 min read',
  },
  {
    id: 13,
    slug: 'lessons-from-shipping-multiplayer-prototypes',
    title: 'Lessons From Shipping Multiplayer Prototypes',
    excerpt:
      'What early netcode spikes taught us about scope, fun loops, and knowing when to stay single-player.',
    content: `Multiplayer is a product decision, not a feature checkbox. Our prototypes proved that latency, social friction, and server cost can rewrite a game’s fantasy overnight.

We spike netcode early on the smallest fun loop possible. If that loop collapses under latency or requires endless catch-up systems, we reconsider scope before art investment balloons.

Sometimes the bravest call is staying single-player and making that experience unforgettable.`,
    image: '/images/stats-island.png',
    category: 'Engineering',
    author: 'Aiden Cole',
    date: '2025-09-20',
    readTime: '7 min read',
  },
  {
    id: 14,
    slug: 'awards-and-why-craft-still-matters',
    title: 'Awards And Why Craft Still Matters',
    excerpt:
      'Trophies are nice. The real prize is a studio culture that keeps raising the craft bar every project.',
    content: `Awards validate craft, but they are lagging indicators. The work that wins trophies started years earlier as quiet standards: readable silhouettes, fair combat, honest pipelines.

We celebrate awards as a team, then return to the board. What did players actually love? What felt unfinished even if critics were kind?

Craft compounds. Studios that chase medals alone burn out. Studios that chase better player feelings keep earning both.`,
    image: '/images/trophy.png',
    category: 'Studio',
    author: 'Lila Brooks',
    date: '2025-08-28',
    readTime: '4 min read',
  },
]

/** Newest first */
export function getAllBlogs() {
  return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getFeaturedBlogs(count = 2) {
  return getAllBlogs().slice(0, count)
}

export function getSideBlogs(count = 4, skip = 2) {
  return getAllBlogs().slice(skip, skip + count)
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug) ?? null
}

export function getRelatedBlogs(slug, count = 3) {
  const current = getBlogBySlug(slug)
  if (!current) return getAllBlogs().slice(0, count)

  return getAllBlogs()
    .filter((blog) => blog.slug !== slug)
    .filter((blog) => blog.category === current.category)
    .concat(getAllBlogs().filter((blog) => blog.slug !== slug && blog.category !== current.category))
    .slice(0, count)
}

export function formatBlogDate(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString))
}
