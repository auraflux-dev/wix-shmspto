import { MarketingAudienceStrip } from '@/components/marketing/audience-strip'
import { MarketingBoardHandoff } from '@/components/marketing/board-handoff'
import { MarketingCloseCta } from '@/components/marketing/close-cta'
import { MarketingHero } from '@/components/marketing/hero'
import { MarketingIntegrationsStrip } from '@/components/marketing/integrations-strip'
import { MarketingPillars } from '@/components/marketing/pillars'
import { MarketingSurfaceTour } from '@/components/marketing/surface-tour'

export default function HomePage() {
  return (
    <>
      <MarketingHero />
      <MarketingAudienceStrip />
      <MarketingSurfaceTour />
      <MarketingBoardHandoff />
      <MarketingPillars />
      <MarketingIntegrationsStrip />
      <MarketingCloseCta />
    </>
  )
}
