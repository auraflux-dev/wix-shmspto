import { AUDIENCES } from '@/lib/marketing'

export function MarketingAudienceStrip() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
          Built for
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
          {AUDIENCES.map((label) => (
            <li key={label} className="text-sm font-medium text-[var(--ink-muted)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] align-middle" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
