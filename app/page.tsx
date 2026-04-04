import { Navbar } from '@/components/navbar'
import { HeroClient } from '@/components/hero-client'
import { SolutionsAdvanced } from '@/components/solutions-advanced'
import { About } from '@/components/about'
import { Brands } from '@/components/brands'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroClient />
      <SolutionsAdvanced />
      <About />
      <Brands />
      <CtaSection />
      <Footer />
    </main>
  )
}
