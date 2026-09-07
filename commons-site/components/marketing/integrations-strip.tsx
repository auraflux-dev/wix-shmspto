import { INTEGRATIONS } from '@/lib/marketing'

export function MarketingIntegrationsStrip() {
  const loop = [...INTEGRATIONS, ...INTEGRATIONS]

  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)]" id="integrations">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
        <p className="type-eyebrow text-center text-[var(--accent)]">Trusted infrastructure</p>
        <p className="type-small mt-2 text-center text-[var(--ink-muted)]">
          Built on tools boards already trust.
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--paper)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--paper)] to-transparent" />
          <div className="integrations-marquee flex w-max gap-10">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="type-ui whitespace-nowrap text-[var(--ink-muted)]/55 transition hover:text-[var(--ink)]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
