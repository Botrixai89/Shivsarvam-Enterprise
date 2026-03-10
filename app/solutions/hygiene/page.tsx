import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ChevronLeft, Factory, Flame, Sun, TrendingDown, ShieldCheck, Leaf, Building2, Zap, Droplets } from 'lucide-react'
import Image from 'next/image'
import { ProductCard } from '@/components/cards/product-card'
import { BenefitCard } from '@/components/cards/benefit-card'
import { ApplicationCard } from '@/components/cards/application-card'
import { CTASection } from '@/components/sections/cta-section'
import { SectionContainer } from '@/components/sections/section-container'

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-12 border-l-4 border-primary pl-4">
    {children}
  </h2>
)

const products = [
  {
    icon: Factory,
    title: 'Utility Chemicals – Boilers & Cooling Towers',
    description:
      'Chemtex utility chemicals for boilers, cooling towers, chillers, RO systems and waste water management. Prevents scale, corrosion and bio-fouling.',
    features: ['Scale inhibitors', 'Corrosion inhibitors', 'Bio-dispersants', 'RO antiscalants'],
    downloadLinks: [
      { label: 'Utility Chemicals Catalogue', href: '/pdfs/Utility Chemicals D2 (24.03.2025).pdf' },
    ],
  },
  {
    icon: Flame,
    title: 'Oil & Gas Industry Chemicals',
    description:
      'Specialised chemical treatments for oil & gas pipelines, process equipment and production facilities.',
    features: ['Demulsifiers', 'Corrosion inhibitors', 'H₂S scavengers', 'Flow assurance'],
    downloadLinks: [
      { label: 'Oil & Gas Chemicals Brochure', href: '/pdfs/Brochure - Chemicals for Oil and Gas Industry.pdf' },
      { label: 'Chemtex Portfolio 2024', href: '/pdfs/Portfolio 2024.pdf' },
    ],
  },
  {
    icon: Sun,
    title: 'Solar Panel Cleaning Chemicals',
    description:
      'Neutral pH Detpol SPC range designed for photovoltaic panel cleaning without scratching or damage.',
    features: ['Neutral pH', 'Non-corrosive', 'Streak-free finish', 'Safe for all panels'],
    downloadLinks: [
      { label: 'Solar Panel Cleaning Brochure', href: '/pdfs/Brochure - Solar Panel Cleaning Chemical.pdf' },
    ],
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Protect Critical Assets',
    description:
      'Reduce scale, corrosion and fouling in boilers, condensers, cooling towers and RO plants to extend equipment life.',
  },
  {
    icon: TrendingDown,
    title: 'Improve Efficiency',
    description:
      'Higher heat-transfer efficiency and cleaner solar panels translate into better output and lower energy costs.',
  },
  {
    icon: Leaf,
    title: 'Support Compliance',
    description:
      'Treatment programs designed around OEM guidelines and regulatory limits for blowdown and effluent discharge.',
  },
]

const applications = [
  { icon: Factory, label: 'Power Plants' },
  { icon: Zap, label: 'Steel & Cement Plants' },
  { icon: Building2, label: 'Commercial Buildings' },
  { icon: Droplets, label: 'Industrial Utilities' },
  { icon: Sun, label: 'Solar Plants' },
  { icon: Flame, label: 'Oil & Gas Facilities' },
]

export default function IndustrialSegment() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/hygiene-hero.png" alt="Industrial Segment" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-4 shrink-0">
          <div className="max-w-6xl mx-auto">
            <Link href="/solutions" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Back to Solutions
            </Link>
          </div>
        </div>
        <div className="flex-1" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 shrink-0">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industrial Segment</h1>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Utility, process and protection chemicals for boilers, cooling towers, RO systems, oil &amp; gas and solar installations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Segment Introduction */}
      <SectionContainer>
        <div className="max-w-3xl">
          <SectionHeading>Industrial Water &amp; Process Treatment</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed">
            Our industrial chemical programs are designed for power plants, process industries and commercial infrastructure.
            The range covers boiler, cooling water, RO, waste water and solar cleaning chemicals to maximise asset life,
            efficiency and reliability while meeting operational and environmental compliance standards.
          </p>
        </div>
      </SectionContainer>

      {/* 3. Products */}
      <SectionContainer>
        <SectionHeading>Products in This Category</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} buttonText="Request Quote" />
          ))}
        </div>
      </SectionContainer>

      {/* 4. Key Benefits */}
      <SectionContainer>
        <SectionHeading>Key Benefits</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
          ))}
        </div>
      </SectionContainer>

      {/* 5. Applications */}
      <SectionContainer>
        <SectionHeading>Applications</SectionHeading>
        <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
          Industrial utility programs that support a wide range of core and supporting operations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((a) => (
            <ApplicationCard key={a.label} icon={a.icon} label={a.label} />
          ))}
        </div>
      </SectionContainer>

      {/* 6. CTA */}
      <CTASection
        title="Need an Industrial Water or Process Treatment Program?"
        description="Share your boiler, cooling tower, RO or process details and our team will design a complete chemical and monitoring package for your plant."
      />

      <Footer />
    </main>
  )
}
