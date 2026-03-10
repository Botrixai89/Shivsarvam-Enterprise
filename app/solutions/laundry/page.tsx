import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft, Droplets, Zap, Settings, Sparkles,
  TrendingDown, ShieldCheck, Building2, HeartPulse, Hotel,
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
    title: 'Laundrex Detergent Range',
    description:
      'Premium detergent powders and liquids formulated for all types of industrial laundry loads including heavily soiled items.',
    features: ['Removes heavy stains', 'Maintains fabric softness', 'Industrial-grade formula', 'Optimised for high-volume machines'],
    downloadLinks: [
      { label: 'Indokem Laundry Brochure', href: '/pdfs/Indokem Limited Laundry Corporate Brochure.pdf' },
    ],
  },
  {
    icon: Zap,
    title: 'Specialized Additives',
    description:
      'Bleaches, Neutra series and high-quality fabric softeners for achieving consistent results across commercial laundry operations.',
    features: ['Optical brighteners', 'Neutra pH balancers', 'Fabric softeners', 'Colour-safe bleaches'],
    downloadLinks: [
      { label: 'Indokem Laundry Brochure', href: '/pdfs/Indokem Limited Laundry Corporate Brochure.pdf' },
    ],
  },
  {
    icon: Settings,
    title: 'Advanced Stain Spotters',
    description:
      'Specialised stain removal treatments targeting ink, grease, rust and medical stains for professional laundry facilities.',
    features: ['Ink & rust removal', 'Grease stain treatment', 'Medical stain removal', 'Pre-treatment application'],
  },
  {
    icon: Sparkles,
    title: 'Liquid Range for Auto Dosing',
    description:
      'Ready-to-use liquid formulations compatible with automatic dosing systems for consistent, measured chemical use.',
    features: ['Auto-dosing compatible', 'Precise measurement', 'Reduced wastage', 'Consistent results'],
  },
  {
    icon: HeartPulse,
    title: 'Hospital Laundry Specialties',
    description:
      'Dedicated laundry chemicals formulated for healthcare linen processing with disinfection and hygiene compliance.',
    features: ['Healthcare linen safe', 'Disinfection integrated', 'Compliance-ready', 'Colour-preserving'],
  },
  {
    icon: Droplets,
    title: 'Dry Cleaning Chemicals',
    description:
      'Solvent-based and aqueous dry cleaning formulations for delicate fabrics and specialist garment care operations.',
    features: ['Delicate fabric safe', 'Low residue', 'Spot cleaning', 'Professional grade'],
  },
]

const benefits = [
  {
    icon: Sparkles,
    title: 'Increased Cleaning Efficiency',
    description: 'Removes deep stains and ensures brighter fabrics with industrial-strength formulations optimised for commercial machines.',
  },
  {
    icon: TrendingDown,
    title: 'Optimised Chemical Usage',
    description: 'Advanced concentrations reduce chemical consumption per cycle, lowering operational costs and waste.',
  },
  {
    icon: ShieldCheck,
    title: 'Fabric Protection',
    description: 'Maintains fabric softness, colour integrity and durability even after repeated high-temperature wash cycles.',
  },
]

const applications = [
  { icon: Hotel, label: 'Hotels & Resorts' },
  { icon: HeartPulse, label: 'Hospitals' },
  { icon: Building2, label: 'Commercial Laundries' },
  { icon: Settings, label: 'Textile Processing Units' },
  { icon: Droplets, label: 'Dry Cleaners' },
  { icon: Zap, label: 'Industrial Facilities' },
]

export default function LaundrySolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/laundry-hero.png" alt="Laundry Systems" fill priority className="object-cover" />
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
              Professional chemicals and fabric care solutions designed for commercial and institutional laundry operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Segment Introduction */}
      <SectionContainer>
        <div className="max-w-3xl">
          <SectionHeading>Laundry Solutions</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed">
            Our laundry chemical systems are designed for commercial laundries, hotels, hospitals and industrial fabric care
            facilities. As an authorized Indokem distributor, we supply a complete range of detergents, additives and
            speciality chemicals that ensure powerful stain removal, fabric protection and optimised washing performance
            across all machine types and load volumes.
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
          Trusted across hospitality, healthcare and commercial laundry operations in Chhattisgarh.
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
        description="Our team will recommend the right Indokem laundry chemical program for your machine types, load volumes and fabric requirements."
      />

      <Footer />
    </main>
  )
}
