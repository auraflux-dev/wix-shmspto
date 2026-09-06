import { PRODUCT_NAME } from '@/lib/brand'
import { DEMO_URL } from '@/lib/pricing'

export { DEMO_URL }

export const HERO_EYEBROW = 'For PTOs, PTAs, and school communities'

export const HERO_HEADLINE = 'Run your whole PTO in one place.'

export const HERO_SUPPORT =
  'Public site. Family portal. Staff workspace.\nParents see your school. Not Pavilion.'

export const PILLARS = [
  {
    id: 'engage',
    title: 'Engage',
    body: 'Families join, renew, and stay in the loop.',
  },
  {
    id: 'simplify',
    title: 'Simplify',
    body: 'Programs, events, and volunteer sign-ups together.',
  },
  {
    id: 'sell',
    title: 'Sell',
    body: 'Online and in-person sales on your school Square.',
  },
  {
    id: 'streamline',
    title: 'Streamline',
    body: 'Staff workspaces that survive board turnover.',
  },
] as const

export const SURFACES = [
  {
    id: 'public',
    title: 'Public site',
    body: `Membership, events, programs, and fundraising on your school brand.\nParents do not see ${PRODUCT_NAME}. They see your PTO.`,
    imageSrc: '/gallery/riverside-public.jpg',
    imageAlt: 'Riverside demo public site homepage',
    href: '/product#public',
  },
  {
    id: 'member',
    title: 'Family portal',
    body: 'One household login for students, membership, and the store card.\nBuilt for fall rush, not a power-user admin console.',
    imageSrc: '/gallery/riverside-member.jpg',
    imageAlt: 'Riverside demo family membership page',
    href: '/product#member',
  },
  {
    id: 'staff',
    title: 'Staff portal',
    body: 'Role workspaces for the board.\nGoogle and Canva sit inside Staff so the next treasurer inherits the year.',
    imageSrc: '/gallery/riverside-staff.jpg',
    imageAlt: 'Riverside demo staff home',
    href: '/product#staff',
  },
] as const

export const AUDIENCES = [
  'PTOs / PTAs',
  'Schools / districts',
  'Enrichment programs',
  'Camps',
  'Clubs / boosters',
  'Arts / music',
  'Sports orgs',
  'Education nonprofits',
] as const

export const CLOSE_SLOGAN = 'Ready when your board is.'

export const CLOSE_SUPPORT =
  'Start with a branded trial.\nOr tour the Riverside demo first.'
