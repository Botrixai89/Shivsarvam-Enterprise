import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft, Droplets, ShieldCheck, Leaf, Building2,
  Hotel, Waves, TrendingDown, CheckCircle2,
} from 'lucide-react'
import { ProductCard } from '@/components/cards/product-card'
import { BenefitCard } from '@/components/cards/benefit-card'
import { ApplicationCard } from '@/components/cards/application-card'
import { CTASection } from '@/components/sections/cta-section'
import { SectionContainer } from '@/components/sections/section-container'

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 border-l-4 border-primary pl-4">
    {children}
  </h2>
)

const products = [
  {
    icon: Droplets,
    title: 'Water Park & Swimming Pool Cleaning Chemicals',
    description:
      'Water park and swimming pool cleaning chemicals for sparkling clean, safe and well-maintained water facilities. Disinfection, pH correction and algae control.',
    features: ['Pool disinfection', 'pH & water balance', 'Algae control', 'Water park maintenance'],
    downloadLinks: [
      { label: 'Download Brochure', href: '/pdfs/Swiming pool brochure_compressed.pdf' },
    ],
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Safe & Hygienic Water',
    description:
      'Maintain safe disinfection levels that protect swimmers from pathogens and waterborne illness.',
  },
  {
    icon: TrendingDown,
    title: 'Cost-Efficient Dosing',
    description:
      'Highly concentrated formulations reduce chemical consumption and operational costs per litre of pool water.',
  },
  {
    icon: CheckCircle2,
    title: 'Equipment Longevity',
    description:
      'Balanced water chemistry prevents corrosion, scaling and staining that damage pool surfaces and equipment.',
  },
]

const applications = [
  { icon: Waves, label: 'Swimming Pools' },
  { icon: Hotel, label: 'Water Parks' },
  { icon: Building2, label: 'Hotels & Resorts' },
  { icon: ShieldCheck, label: 'Sports Facilities' },
  { icon: Droplets, label: 'Apartment Complexes' },
  { icon: Leaf, label: 'Residential Pools' },
]

export default function WaterTreatment() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/Hotel and resort.png" alt="Swimming Pool & Water Treatment" fill priority className="object-cover" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hotels &amp; Resorts Segment</h1>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Water park and swimming pool cleaning chemicals for sparkling clean, safe and well-maintained water facilities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Segment Introduction */}
      <SectionContainer>
        <div className="max-w-3xl">
          <SectionHeading>Pool &amp; Water Treatment Solutions</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed">
            We supply water park and swimming pool cleaning chemicals for hotels, resorts, water parks and residential
            complexes. From disinfection and pH correction to algae control and equipment care, our programs keep pool
            water crystal clear, compliant and safe for swimmers throughout the year.
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
          Serving pools and water facilities across the hospitality, sports and residential sectors.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((a) => (
            <ApplicationCard key={a.label} icon={a.icon} label={a.label} />
          ))}
        </div>
      </SectionContainer>

      {/* 6. CTA */}
      <CTASection
        title="Need a Complete Pool Chemical Management Program?"
        description="Share your pool specifications and we will recommend the right chemicals, dosing schedule and maintenance plan to keep your water safe and clear."
      />

      <Footer />
    </main>
  )
}
