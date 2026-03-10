import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft, Droplets, Settings, TrendingDown, ShieldCheck,
  Building2, HeartPulse, Hotel, Sparkles,
} from 'lucide-react'
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
    icon: Droplets,
    title: 'Laundry Chemicals for Commercial Laundries & Dry Cleaners',
    description:
      'Laundry chemicals for commercial laundries and dry cleaners. Detergents, additives and speciality chemicals for professional fabric care operations.',
    features: ['Commercial laundry chemicals', 'Dry cleaning solutions', 'Stain removal', 'Fabric care'],
    downloadLinks: [
      { label: 'Download Brochure', href: '/pdfs/Indokem Limited Laundry Corporate Brochure.pdf' },
    ],
  },
  {
    icon: Settings,
    title: 'Laundry Machines Supplier / Support',
    description:
      'Support for laundry machines and dosing systems. Equipment supply and technical support for commercial and institutional laundry operations.',
    features: ['Machine support', 'Dosing system support', 'Technical assistance', 'Equipment supply'],
  },
]

const benefits = [
  {
    icon: Sparkles,
    title: 'Increased Cleaning Efficiency',
    description:
      'Professional formulations remove deep stains and ensure brighter fabrics optimised for commercial machines.',
  },
  {
    icon: TrendingDown,
    title: 'Optimised Chemical Usage',
    description:
      'Advanced concentrations reduce chemical consumption per cycle, lowering operational costs and waste.',
  },
  {
    icon: ShieldCheck,
    title: 'Fabric Protection',
    description:
      'Maintains fabric softness, colour integrity and durability even after repeated high-temperature wash cycles.',
  },
]

const applications = [
  { icon: Hotel, label: 'Hotels & Resorts' },
  { icon: HeartPulse, label: 'Hospitals' },
  { icon: Building2, label: 'Commercial Laundries' },
  { icon: Settings, label: 'Textile Processing Units' },
  { icon: Droplets, label: 'Dry Cleaners' },
  { icon: Sparkles, label: 'Industrial Facilities' },
]

export default function LaundrySolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/laundry-hero.png" alt="Commercial Laundry Systems" fill priority className="object-cover" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Laundry Systems</h1>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Laundry chemicals for commercial laundries &amp; dry cleaners. Support for laundry machines and dosing systems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Segment Introduction */}
      <SectionContainer>
        <div className="max-w-3xl">
          <SectionHeading>Laundry Solutions</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed">
            Our laundry solutions cover laundry chemicals for commercial laundries and dry cleaners, plus support for
            laundry machines and dosing systems. Designed for hotels, hospitals, commercial laundries and industrial
            fabric care facilities to deliver powerful stain removal, fabric protection and optimised washing performance.
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
          Trusted across hospitality, healthcare and commercial laundry operations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((a) => (
            <ApplicationCard key={a.label} icon={a.icon} label={a.label} />
          ))}
        </div>
      </SectionContainer>

      {/* 6. CTA */}
      <CTASection
        title="Need Laundry Chemical Solutions for Your Facility?"
        description="Our team will recommend the right laundry chemical program for your machine types, load volumes and fabric requirements."
      />

      <Footer />
    </main>
  )
}
