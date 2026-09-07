import Link from 'next/link'
import { HERO_EYEBROW, HERO_HEADLINE, HERO_SUPPORT, SURFACES } from '@/lib/marketing'
import { COMMONS_LIST_PRICE_USD, DEMO_URL } from '@/lib/pricing'
import { BrowserFrame } from '@/components/marketing/browser-frame'

export function MarketingHero() {
  const [front, mid, back] = [SURFACES[0], SURFACES[1], SURFACES[2]]

  return (
    <section className="hero-plane relative overflow-hidden text-[#f7f5f0]">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
        <div className="motion-rise flex flex-col justify-center gap-5 sm:gap-6">
          <p className="type-eyebrow text-[var(--accent-soft)]">{HERO_EYEBROW}</p>
          <h1 className="type-display max-w-xl whitespace-pre-line">{HERO_HEADLINE}</h1>
          <p className="type-lede max-w-md whitespace-pre-line text-[#d5cec0]">{HERO_SUPPORT}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/start" className="btn-on-dark">
              {`Start at $${COMMONS_LIST_PRICE_USD}/mo`}
            </Link>
            <a href={DEMO_URL} className="btn-on-dark-outline">
              Try the Riverside demo
            </a>
          </div>
        </div>

        <div className="motion-rise motion-rise-delay relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[16/12] w-full">
            <div className="absolute left-[8%] top-[12%] w-[78%] rotate-[-2deg] opacity-55">
              <BrowserFrame src={back.imageSrc} alt={back.imageAlt} hostLabel={back.hostLabel} />
            </div>
            <div className="absolute left-[14%] top-[6%] w-[78%] rotate-[1.5deg] opacity-75">
              <BrowserFrame src={mid.imageSrc} alt={mid.imageAlt} hostLabel={mid.hostLabel} />
            </div>
            <div className="absolute left-0 top-0 w-[86%]">
              <BrowserFrame
                src={front.imageSrc}
                alt={front.imageAlt}
                hostLabel={front.hostLabel}
                priority
                large
              />
            </div>
          </div>
          <p className="type-small mt-4 text-center text-[#9bb0a8] lg:text-left">
            Public, family, and staff. One product.
          </p>
        </div>
      </div>
    </section>
  )
}
