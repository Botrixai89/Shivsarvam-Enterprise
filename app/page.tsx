import { Navbar } from '@/components/navbar'
import { HeroClient } from '@/components/hero-client'
import { About } from '@/components/about'
import { SolutionsAdvanced } from '@/components/solutions-advanced'
import { Brands } from '@/components/brands'
import { Industries } from '@/components/industries'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroClient />
      <About />
      <SolutionsAdvanced />
      <Brands />
      <Industries />
      <Contact />
      <Footer />
    </main>
  )
}
