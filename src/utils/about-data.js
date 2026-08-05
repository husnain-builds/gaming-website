/**
 * About page content for the Busters studio site.
 * Homepage teaser and /about both read from here.
 */

export const aboutPage = {
  eyebrow: 'About Busters',
  title: 'We Design Worlds Players Never Forget',
  subtitle:
    'Busters is a creative game studio focused on exceptional art, clear pipelines, and playable craft that feels alive from the first frame.',
  heroImage: '/images/collaborate.png',
  storyTitle: 'Our Story',
  story: `Busters started as a small crew of artists and designers who believed beautiful games should also feel great to play. We grew by shipping with partners who care about identity, atmosphere, and production discipline.

Today we help studios and publishers with art direction, 3D production, character design, UI/UX, and development support. Every project gets the same standard: readable silhouettes, honest milestones, and worlds with a point of view.

We are not the biggest studio in the room. We are the ones who make sure your game looks like itself — in trailers, in menus, and in the moment a player first presses start.`,
  focusTitle: 'We Focus On Creating Beautiful Games',
  focusCopy:
    'Every environment, character, and interaction is designed with care. We blend bold art direction with technical craft so your game feels alive from the first frame.',
  focusImage: '/images/floating-island.png',
  focusPortrait: '/images/focus-character.png',
  missionTitle: 'Our Mission',
  mission:
    'To help teams ship distinctive games with craft that holds up under real production pressure — not just moodboards.',
  visionTitle: 'Our Vision',
  vision:
    'A studio known for worlds with identity: clear art language, fair gameplay feel, and partnerships built on trust.',
}

export const aboutValues = [
  {
    id: 1,
    title: 'Identity First',
    description:
      'If removing the logo makes your game look like anyone else’s, the direction is not finished.',
  },
  {
    id: 2,
    title: 'Playable Craft',
    description:
      'Pretty frames matter. So do timing, clarity, and the feeling in a player’s hands.',
  },
  {
    id: 3,
    title: 'Honest Pipelines',
    description:
      'Clear handoffs, early engine drops, and milestones you can show — not surprise rework.',
  },
  {
    id: 4,
    title: 'Partner Mindset',
    description:
      'We surface risks with options. Your success is the only metric that counts.',
  },
]

export const aboutStats = [
  { value: '190+', label: 'Projects Delivered' },
  { value: '30+', label: 'Studio Partners' },
  { value: '240+', label: 'Art Assets Shipped' },
  { value: '680+', label: 'Player Mentions' },
]

export const aboutTeam = [
  {
    id: 1,
    name: 'Aiden Cole',
    role: 'Creative Director',
    bio: 'Leads visual fantasy and gameplay tone across pitches and production.',
    image: '/images/team-1.png',
  },
  {
    id: 2,
    name: 'Maya Chen',
    role: 'Lead Artist',
    bio: 'Owns character identity, material language, and key art quality.',
    image: '/images/team-2.png',
  },
  {
    id: 3,
    name: 'Noah Reyes',
    role: 'Art Director',
    bio: 'Keeps worlds cohesive from color script to final lighting passes.',
    image: '/images/team-3.png',
  },
  {
    id: 4,
    name: 'Lila Brooks',
    role: 'Producer',
    bio: 'Protects schedules, reviews, and clear partner communication.',
    image: '/images/team-4.png',
  },
]

export function getAboutPage() {
  return aboutPage
}

export function getAboutValues() {
  return [...aboutValues]
}

export function getAboutStats() {
  return [...aboutStats]
}

export function getAboutTeam() {
  return [...aboutTeam]
}
