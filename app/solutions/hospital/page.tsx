import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft, ShieldCheck, Sparkles, CheckCircle2, Leaf,
  Building2, FlaskConical, Stethoscope, HeartPulse,
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
    icon: ShieldCheck,
    title: 'Hospital-Grade Disinfection Chemicals',
    description:
      'Hospital-grade disinfection chemicals for critical areas including OT, ICU and general ward environments. Formulated to meet infection control protocols.',
    features: ['Critical area disinfection', 'Surface & air disinfection', 'Broad-spectrum efficacy', 'Healthcare compliant'],
    downloadLinks: [
      { label: 'Hospital Disinfectants Brochure', href: '/pdfs/Hospital Disinfectants Brochure_modified.pdf' },
      { label: 'Hospital Solutions Portfolio', href: '/pdfs/Hospital- Brochure 12.09.2024-2.pdf' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Cleaning & Hygiene Solutions',
    description:
      'Cleaning and hygiene chemicals tailored for healthcare workflows. Hard surface cleaners, glass cleaners and hygiene solutions for clinical environments.',
    features: ['Hard surface cleaning', 'Glass & mirror care', 'Hygiene solutions', 'Clinical environment safe'],
    downloadLinks: [
      { label: 'Cleaning & Hygiene Catalogue', href: '/pdfs/CLEANING & HYGIENE CHEMICALS (Regular Products Catalogue).pdf' },
      { label: 'Chemtex Hygiene Brochure', href: '/pdfs/Chemtex Cleaning & Hygiene Chemicals_Brochure-1.pdf' },
    ],
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Infection Control Assurance',
    description:
      'Hospital-grade disinfectants destroy pathogens in OT, ICU and general wards to ensure a safe patient environment.',
  },
  {
    icon: CheckCircle2,
    title: 'Regulatory Compliance',
    description:
      'Products meet healthcare standards and infection control protocols required by hospital accreditation bodies.',
  },
  {
    icon: Leaf,
    title: 'Staff & Patient Safety',
    description:
      'Formulations designed to be effective against pathogens while remaining safe for regular staff use.',
  },
]

const applications = [
  { icon: Building2, label: 'Hospitals' },
  { icon: Stethoscope, label: 'Clinics & Nursing Homes' },
  { icon: FlaskConical, label: 'Diagnostic Labs' },
  { icon: HeartPulse, label: 'OT / ICU Areas' },
  { icon: ShieldCheck, label: 'Pharmaceutical Units' },
  { icon: Sparkles, label: 'Healthcare Facilities' },
]

export default function HospitalSolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/Hostpital.png" alt="Hospital Grade Disinfection" fill priority className="object-cover" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hospital Segment</h1>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Medical-grade disinfection and cleaning &amp; hygiene chemicals for the highest standards of safety in healthcare environments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Segment Introduction */}
      <SectionContainer>
        <div className="max-w-3xl">
          <SectionHeading>Hospital Segment</SectionHeading>
          <p className="text-base text-gray-600 leading-relaxed">
            Our hospital chemical solutions cover hospital-grade disinfection chemicals for critical areas alongside
            comprehensive cleaning and hygiene solutions tailored for healthcare workflows. Products are formulated to
            meet infection control protocols and maintain the high standards of cleanliness required in clinical environments.
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
          Trusted by healthcare facilities requiring hospital-grade hygiene and infection control.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((a) => (
            <ApplicationCard key={a.label} icon={a.icon} label={a.label} />
          ))}
        </div>
      </SectionContainer>

      {/* 6. CTA */}
      <CTASection
        title="Need Hospital-Grade Disinfection Solutions?"
        description="Talk to our experts to select the right infection-control and hygiene chemicals for your healthcare facility."
      />

      <Footer />
    </main>
  )
}
