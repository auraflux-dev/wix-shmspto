import { AUDIENCES } from '@/lib/marketing'

export function MarketingAudienceStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
        <p className="type-eyebrow text-center text-[var(--accent)]">Built for</p>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {AUDIENCES.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:shadow-[0_14px_28px_-22px_rgba(13,30,26,0.35)]"
            >
              <p className="type-ui text-[var(--ink)]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
