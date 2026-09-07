'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SURFACES } from '@/lib/marketing'
import { BrowserFrame } from '@/components/marketing/browser-frame'

type SurfaceId = (typeof SURFACES)[number]['id']

type SurfaceTourProps = {
  linkToProduct?: boolean
}

export function MarketingSurfaceTour({ linkToProduct = false }: SurfaceTourProps) {
  const [activeId, setActiveId] = useState<SurfaceId>('public')
  const active = SURFACES.find((s) => s.id === activeId) ?? SURFACES[0]

  return (
    <section className="bg-[var(--paper)]" id="surfaces">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="type-section text-[var(--ink)]">
          Three surfaces.
          <br />
          One operating system.
        </h2>
        <p className="type-lede mt-4 max-w-2xl whitespace-pre-line text-[var(--ink-muted)]">
          {`Parents join and pay on your branded site.\nStaff run membership, events, and communications in one workspace.`}
        </p>

        <div
          role="tablist"
          aria-label="Product surfaces"
          className="mt-10 flex flex-col gap-2 sm:flex-row sm:flex-wrap"
        >
          {SURFACES.map((surface, index) => {
            const selected = surface.id === activeId
            return (
              <button
                key={surface.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`surface-tab-${surface.id}`}
                aria-controls={`surface-panel-${surface.id}`}
                className={`rounded-md border px-4 py-3 text-left transition sm:min-w-[10.5rem] sm:flex-1 ${
                  selected
                    ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
                    : 'border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)]'
                }`}
                onClick={() => setActiveId(surface.id)}
              >
                <span className="type-small block opacity-80">{`${index + 1}.`}</span>
                <span className="type-ui mt-0.5 block">{surface.title}</span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`surface-panel-${active.id}`}
          aria-labelledby={`surface-tab-${active.id}`}
          className="mt-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div key={`${active.id}-copy`} className="surface-fade">
            <p className="type-eyebrow text-[var(--accent)]">{active.tagline}</p>
            <h3 className="type-title mt-2 text-[var(--ink)]">
              {linkToProduct ? (
                <Link href={active.href} className="hover:text-[var(--accent)]">
                  {active.title}
                </Link>
              ) : (
                active.title
              )}
            </h3>
            <p className="type-body mt-3 whitespace-pre-line text-[var(--ink-muted)]">{active.body}</p>
            <ul className="mt-5 space-y-2">
              {active.benefits.map((benefit) => (
                <li key={benefit} className="type-small flex gap-2 text-[var(--ink)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div key={`${active.id}-frame`} className="surface-fade">
            <BrowserFrame
              src={active.imageSrc}
              alt={active.imageAlt}
              hostLabel={active.hostLabel}
              large
            />
          </div>
        </div>
      </div>
    </section>
  )
}
