import { PRODUCT_NAME } from '@/lib/brand'
import { DEMO_URL } from '@/lib/pricing'

export { DEMO_URL }

export const HERO_EYEBROW = 'For PTOs, PTAs, and school communities'

export const HERO_HEADLINE =
  'The operating system\nfor modern PTOs.'

export const HERO_SUPPORT =
  'Public site. Family portal. Staff workspace.\nFewer tools. Cleaner handoffs. Less volunteer burnout.'

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
    body: 'Membership, money, and communications in one staff home.',
  },
] as const

export const SURFACES = [
  {
    id: 'public',
    title: 'Public website',
    shortLabel: '1. Public',
    tagline: 'Your school brand out front.',
    body: `Membership, events, programs, and fundraising on your school brand.\nParents do not see ${PRODUCT_NAME}. They see your PTO.`,
    benefits: [
      'Custom domain and school branding',
      'Programs, events, and membership on one site',
      'Parents never see Pavilion chrome',
    ],
    imageSrc: '/gallery/riverside-public.jpg',
    imageAlt: 'Riverside demo public site homepage',
    href: '/product#public',
    hostLabel: 'riversidepto.demo.onpavilion.com',
  },
  {
    id: 'member',
    title: 'Family portal',
    shortLabel: '2. Family',
    tagline: 'One household login for fall rush.',
    body: 'Students, membership, volunteer shifts, and the store card in one login.',
    benefits: [
      'Household accounts for students and membership',
      'Volunteer shifts and program sign-ups',
      'Store and prepaid card in the same login',
    ],
    imageSrc: '/gallery/riverside-member.jpg',
    imageAlt: 'Riverside demo family membership page',
    href: '/product#member',
    hostLabel: 'riversidepto.demo.onpavilion.com/membership',
  },
  {
    id: 'staff',
    title: 'Staff portal',
    shortLabel: '3. Staff',
    tagline: 'The board working desk.',
    body: 'Membership, money, programs, and communications in one staff home.\nGoogle and Canva live here with the rest of the year.',
    benefits: [
      'Role workspaces for board seats',
      'Google and Canva inside Staff',
      'Queues for membership, money, and programs',
    ],
    imageSrc: '/gallery/riverside-staff.jpg',
    imageAlt: 'Riverside demo staff home',
    href: '/product#staff',
    hostLabel: 'riversidepto.demo.onpavilion.com/staff',
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

export const BOARD_HANDOFF = {
  eyebrow: 'Board handoff',
  headline: 'Built to survive annual board turnover.',
  support:
    'Roles hold the tools.\nNot personal Gmail accounts and a shared password list.',
  points: [
    {
      title: 'Role inherits the workspace',
      body: 'Treasurer, President, and committee seats keep Drive folders, Canva, and Staff tools when the person changes.',
    },
    {
      title: 'History stays put',
      body: 'Budget logs, sign-up sheets, and year files stay attached to the school, not a laptop that left in June.',
    },
    {
      title: 'One-click seat change',
      body: 'Incoming board members pick up the role.\nOutgoing access closes without a scavenger hunt.',
    },
  ],
} as const

export const INTEGRATIONS = [
  'Next.js',
  'Square',
  'Google Workspace',
  'Canva',
  'Vercel',
  'TypeScript',
] as const

export const CLOSE_SLOGAN = 'Ready when your board is.'

export const CLOSE_SUPPORT =
  'Start with a branded trial.\nOr tour the Riverside demo first.'
