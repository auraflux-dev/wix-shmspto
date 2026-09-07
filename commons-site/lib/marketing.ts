import { PRODUCT_NAME } from '@/lib/brand'
import { DEMO_URL } from '@/lib/pricing'

export { DEMO_URL }

export const HERO_EYEBROW = 'For PTOs, PTAs, and school communities'

export const HERO_HEADLINE =
  'The operating system\nfor modern PTOs.'

export const HERO_SUPPORT =
  'Fewer tools. Cleaner handoffs.\nLess volunteer burnout.'

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
      'Custom domain and school colors',
      'Membership join and renew',
      'Programs and enrichment catalog',
      'Events calendar and RSVPs',
      'Volunteer openings',
      'Fundraising and donate',
      'Board and meetings pages',
      'News and announcements',
    ],
    imageSrc: '/gallery/riverside-public.jpg',
    imageAlt: 'Riverside demo public site homepage',
    href: '/product#public',
    hostLabel: 'demo.onpavilion.com',
  },
  {
    id: 'member',
    title: 'Family portal',
    shortLabel: '2. Family',
    tagline: 'One household login for fall rush.',
    body: 'Parents sign in once for students, membership, programs, volunteers, and the store card.',
    benefits: [
      'Household and student profiles',
      'Membership status and renewals',
      'Program registration',
      'Volunteer shift sign-ups',
      'Store and prepaid card',
      'Messages and newsletters',
      'Surveys and forms',
      'Purchase history',
    ],
    imageSrc: '/gallery/riverside-member.jpg',
    imageAlt: 'Riverside demo family membership page',
    href: '/product#member',
    hostLabel: 'demo.onpavilion.com/membership',
  },
  {
    id: 'staff',
    title: 'Staff portal',
    shortLabel: '3. Staff',
    tagline: 'The board working desk.',
    body: 'Everything the board runs during the year, in one secure workspace.\nGoogle and Canva stay attached to the role, not a personal inbox.',
    benefits: [
      'Membership roster and renewals',
      'Programs and enrichment ops',
      'Events and volunteer queues',
      'Expenses and reimbursements',
      'Fundraising and Square sales',
      'Newsletters and parent messages',
      'Website and form queues',
      'Google Drive and Canva by role',
      'Reports and year history',
      'Board seats and handoff',
    ],
    imageSrc: '/gallery/riverside-staff.jpg',
    imageAlt: 'Riverside demo staff home with workspace tiles',
    href: '/product#staff',
    hostLabel: 'demo.onpavilion.com/staff',
  },
] as const

export const AUDIENCES = [
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

export const ABOUT = {
  eyebrow: 'About',
  headline: 'Built for parent-run boards.',
  support:
    `${PRODUCT_NAME} is the operating system for PTOs, PTAs, and school communities.\nWe keep the school brand in front of parents, and the board tools in one place.`,
  points: [
    {
      title: 'Product of HSKRG LLC',
      body: 'Software billing is separate from your school Square.\nParents keep checking out on your school account.',
    },
    {
      title: 'White-labeled for schools',
      body: 'Families see your PTO name, colors, and domain.\nThey should not need to learn a vendor brand to join.',
    },
    {
      title: 'Proven with live boards',
      body: 'The product ships first on Pavilion demo and trials.\nCustomer schools promote when ready.',
    },
  ],
} as const

export const PROCESS = {
  eyebrow: 'Our process',
  headline: 'Tour. Brand. Prune. Pay.',
  support:
    'A clear path from first look to a board-ready school year.\nNo second product to learn midstream.',
  steps: [
    {
      title: '1. Tour Riverside',
      body: 'See public, family, and staff on the sample school.\nClick through real surfaces, not slides.',
    },
    {
      title: '2. Brand a private trial',
      body: 'We apply your logo, colors, and school name.\nYour board logs in on a private host.',
    },
    {
      title: '3. Prune what you do not offer',
      body: 'Hide store, card, programs, or pages you skip.\nThe trial should feel like your PTO.',
    },
    {
      title: '4. Pay and go live',
      body: 'Lock look and feel, then deepen onboarding.\nSquare stays yours for parent cards and sales.',
    },
  ],
} as const

export const CLOSE_SLOGAN = 'Ready when your board is.'

export const CLOSE_SUPPORT =
  'Start with a branded trial.\nOr tour the Riverside demo first.'
