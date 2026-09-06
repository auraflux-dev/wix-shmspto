import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ADDON_CREATIVE_USD,
  ADDON_STORE_USD,
  COMMONS_LIST_PRICE_USD,
} from '@/lib/pricing'

export const metadata: Metadata = { title: 'Pricing' }

export default function PricingPage() {
  const year = COMMONS_LIST_PRICE_USD * 12
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="type-page">Pricing</h1>
      <p className="type-lede mt-4 whitespace-pre-line text-[var(--ink-muted)]">
        {`One number.\n$${COMMONS_LIST_PRICE_USD} per school per month.\n12-month term. Same price as long as you stay.`}
      </p>

      <div className="mt-10 rounded-lg border border-[var(--line)] bg-[var(--paper-deep)] p-6">
        <p className="type-price text-[var(--ink)]">
          ${COMMONS_LIST_PRICE_USD}
          <span className="type-title font-normal text-[var(--ink-muted)]">/mo</span>
        </p>
        <p className="type-small mt-2 text-[var(--ink-muted)]">${year.toLocaleString()}/year</p>
        <ul className="type-body mt-6 space-y-2 text-[var(--ink)]">
          <li>Public site, family portal, and staff portal</li>
          <li>Domain and Google connect in onboarding</li>
          <li>No separate setup invoice</li>
          <li>Parent card fees stay on your school Square</li>
        </ul>
        <Link href="/start" className="btn-primary mt-8">
          {`Start at $${COMMONS_LIST_PRICE_USD}/mo`}
        </Link>
      </div>

      <h2 className="type-title mt-14 text-[var(--ink)]">Add-ons</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="border-t border-[var(--line)] pt-4">
          <p className="font-semibold">On-site school store</p>
          <p className="type-small mt-1 whitespace-pre-line text-[var(--ink-muted)]">
            {`In-person window, staff register, family prepaid card.\n$${ADDON_STORE_USD}/mo`}
          </p>
        </div>
        <div className="border-t border-[var(--line)] pt-4">
          <p className="font-semibold">Done-for-you creative</p>
          <p className="type-small mt-1 whitespace-pre-line text-[var(--ink-muted)]">
            {`Flyers and video production help.\n$${ADDON_CREATIVE_USD}/mo`}
          </p>
        </div>
      </div>
    </div>
  )
}
