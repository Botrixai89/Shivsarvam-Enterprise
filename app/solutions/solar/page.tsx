import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft, Sun, Droplets, ShieldCheck, Leaf,
  TrendingUp, CheckCircle2, Factory, Building2, Zap,
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
    icon: Sun,
    title: 'Detpol SPC – Neutral pH Cleaner',
    description:
      'Specially formulated neutral pH solar panel cleaner that removes dust, bird droppings and soiling without scratching or damaging panel surfaces.',
    features: ['Neutral pH (6.5–7.5)', 'Non-corrosive formula', 'Streak-free finish', 'Safe for all panel types'],
    downloadLinks: [
      { label: 'Solar Panel Cleaning Brochure', href: '/pdfs/Brochure - Solar Panel Cleaning Chemical.pdf' },
      { label: 'Chemtex Portfolio 2024', href: '/pdfs/Portfolio 2024.pdf' },
    ],
  },
  {
    icon: Droplets,
    title: 'Detpol SPC Concentrate',
    description:
      'Concentrated variant of the Detpol SPC range designed for high-volume applications such as utility-scale solar farms.',
    features: ['High concentration ratio', 'Cost-effective dosing', 'Low foam formula', 'Compatible with spray systems'],
    downloadLinks: [
      { label: 'Solar Panel Cleaning Brochure', href: '/pdfs/Brochure - Solar Panel Cleaning Chemical.pdf' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Static Coating Additive',
    description:
      'Post-cleaning anti-static treatment that reduces dust re-adhesion on photovoltaic panels, extending the time between cleaning cycles.',
    features: ['Reduces dust adhesion', 'Extends cleaning intervals', 'UV stable', 'Compatible with SPC cleaners'],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Maximise Energy Output',
    description: 'Clean panels restore light absorption efficiency, directly improving energy generation and ROI of the solar installation.',
  },
  {
    icon: Leaf,
    title: 'Protect Panel Investment',
    description: 'Neutral pH, non-abrasive formula prevents micro-scratches and chemical corrosion that can degrade panel performance over time.',
  },
  {
    icon: CheckCircle2,
    title: 'Reduce Maintenance Costs',
    description: 'Anti-static additives reduce dust re-accumulation, cutting cleaning frequency and long-term operational maintenance costs.',
  },
]

const applications = [
  { icon: Sun, label: 'Rooftop Solar Panels' },
  { icon: Zap, label: 'Utility-Scale Solar Farms' },
  { icon: Factory, label: 'Industrial Solar Plants' },
  { icon: Building2, label: 'Commercial Buildings' },
  { icon: Droplets, label: 'Solar Water Heaters' },
  { icon: ShieldCheck, label: 'Government Solar Projects' },
]

export default function SolarMaintenance() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/solar-hero.png" alt="Solar Panel Maintenance" fill priority className="object-cover" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Solar Panel Maintenance</h1>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Neutral pH solar panel cleaning chemicals that maximise energy output and protect your installation from damage.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Segment Introduction */}
      <SectionContainer>
        <div className="max-w-3xl">
          <SectionHeading>Solar Panel Cleaning Solutions</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed">
            Dust, bird droppings and environmental soiling can reduce solar panel efficiency by up to 30%. Our Detpol SPC
            range provides safe, effective and residue-free cleaning for all types of photovoltaic panels — from rooftop
            installations to large utility-scale solar farms — without risking surface damage or voiding panel warranties.
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
          Our solar cleaning chemicals are used across residential, commercial and industrial solar installations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((a) => (
            <ApplicationCard key={a.label} icon={a.icon} label={a.label} />
          ))}
        </div>
      </SectionContainer>

      {/* 6. CTA */}
      <CTASection
        title="Need Solar Panel Cleaning Chemicals for Your Installation?"
        description="Tell us about your panel type, installation size and cleaning frequency and we will recommend the right Detpol SPC product and dosing plan."
      />

      <Footer />
    </main>
  )
}
