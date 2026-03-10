import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft, ShieldCheck, Droplets, Sparkles, HeartPulse,
  CheckCircle2, Leaf, Building2, FlaskConical, Stethoscope,
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

const disinfectionProducts = [
  {
    icon: ShieldCheck,
    title: 'Alstasan Silvox 150',
    description: 'Silver Hydrogen Peroxide based disinfectant for critical areas including OT and ICU environments.',
    features: ['Broad-spectrum efficacy', 'Silver-synergised formula', 'Safe for surfaces & air', 'Approved for critical zones'],
    downloadLinks: [
      { label: 'Hospital Disinfectants Brochure', href: '/pdfs/Hospital Disinfectants Brochure_modified.pdf' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Alstasan LF 125',
    description: '4th Generation QAC based high-efficacy disinfectant with refreshing fragrance for general hospital areas.',
    features: ['4th Gen QAC formula', 'Refreshing scent', 'Surface safe', 'Broad application'],
    downloadLinks: [
      { label: 'Hospital Solutions Portfolio', href: '/pdfs/Hospital- Brochure 12.09.2024-2.pdf' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Alstasan QC5 / QC7',
    description: 'Indoor use disinfectant and biocide for comprehensive protection in wards and clinical areas.',
    features: ['Indoor biocide', 'Comprehensive coverage', 'Easy application', 'Residual protection'],
  },
  {
    icon: HeartPulse,
    title: 'Alstasan Handrub',
    description: 'Professional alcohol-based hand disinfectant formulated for medical personnel use.',
    features: ['Alcohol-based', 'Fast acting', 'Skin-friendly formula', 'WHO-compliant'],
  },
  {
    icon: HeartPulse,
    title: 'Alstasan Mecerub',
    description: 'Ready-to-use skin antiseptic for pre-operative skin preparation and general clinical use.',
    features: ['Pre-operative use', 'Ready-to-use', 'Antiseptic action', 'Gentle on skin'],
  },
  {
    icon: HeartPulse,
    title: 'Alstasan Handwash',
    description: 'Surgical scrub providing superior antimicrobial protection during surgical procedures.',
    features: ['Surgical scrub grade', 'Superior antimicrobial', 'Moisturising formula', 'Non-irritating'],
  },
]

const hygieneProducts = [
  {
    icon: Sparkles,
    title: 'HSC-C2 (Hard Surface Cleaner)',
    description: 'Deep cleaning and sanitization chemical for hard surfaces in clinical and hospital environments.',
    features: ['Powerful degreasing', 'Sparkling finish', 'Lemon scented', 'Professional grade'],
    downloadLinks: [
      { label: 'Cleaning & Hygiene Catalogue', href: '/pdfs/CLEANING & HYGIENE CHEMICALS (Regular Products Catalogue).pdf' },
      { label: 'Chemtex Hygiene Brochure', href: '/pdfs/Chemtex Cleaning & Hygiene Chemicals_Brochure-1.pdf' },
    ],
  },
  {
    icon: Sparkles,
    title: 'GC-C3 (Glass Cleaner)',
    description: 'Streak-free glass cleaning solution for windows, partitions and mirrors in healthcare environments.',
    features: ['Ammonia-free', 'Fast drying', 'Streak-free', 'Highly concentrated'],
  },
  {
    icon: Droplets,
    title: 'AF-C5 (Air Freshener)',
    description: 'Refreshing air freshener that eliminates malodours across hospital corridors and ward areas.',
    features: ['Long-lasting fragrance', 'Odour eliminating', 'Non-staining', 'Eco-friendly'],
  },
  {
    icon: Droplets,
    title: 'Soft-Shield Personal Care',
    description: 'Gentle pH-balanced hand wash designed for frequent use by healthcare staff.',
    features: ['pH balanced', 'Food & Pharma safe', 'Rose & Lemon variants', 'Moisturising'],
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Infection Control Assurance',
    description: 'Hospital-grade disinfectants destroy pathogens in OT, ICU and general wards to ensure a safe patient environment.',
  },
  {
    icon: CheckCircle2,
    title: 'Regulatory Compliance',
    description: 'Products meet healthcare standards and infection control protocols required by hospital accreditation bodies.',
  },
  {
    icon: Leaf,
    title: 'Staff & Patient Safety',
    description: 'Formulations designed to be effective against pathogens while remaining safe for regular staff use.',
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
        <Image src="/images/hospital-hero.png" alt="Hospital Disinfection" fill priority className="object-cover" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hospital Grade Disinfection</h1>
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
            Our hospital chemical solutions cover hospital-grade disinfection for critical areas alongside comprehensive
            cleaning and hygiene chemicals tailored for healthcare workflows. Products are formulated to meet infection
            control protocols and maintain the high standards of cleanliness required in clinical environments.
          </p>
        </div>
      </SectionContainer>

      {/* 3a. Products – Disinfection */}
      <SectionContainer>
        <SectionHeading>Air &amp; Surface Disinfection</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disinfectionProducts.map((p) => (
            <ProductCard key={p.title} {...p} buttonText="Request Quote" />
          ))}
        </div>
      </SectionContainer>

      {/* 3b. Products – Cleaning & Hygiene */}
      <SectionContainer>
        <SectionHeading>Cleaning &amp; Hygiene Solutions</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hygieneProducts.map((p) => (
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
