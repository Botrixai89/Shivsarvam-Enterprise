import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import {
  Factory,
  Building2,
  HeartPulse,
  Shirt,
  Target,
  Eye,
  Award,
  Headphones,
  Truck,
  Users,
  CheckCircle,
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Shivsarvam Enterprises',
  description: 'Trusted chemical distribution with years of experience. Authorized distributor of Chemtex & Indokem serving Chhattisgarh and Maharashtra.',
  openGraph: {
    title: 'About Us | Shivsarvam Enterprises',
    description: 'Authorized distributor of Chemtex & Indokem. Trusted chemical solutions across Chhattisgarh.',
  },
}

const stats = [
  // { value: '18+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Availability' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: '2', label: 'Premium Brands' },
  { value: '4', label: 'Industry Segments' },
]

const segments = [
  {
    icon: Factory,
    number: '01',
    title: 'Industrial Segment',
    items: ['Thermal Power Plants', 'Cooling Tower & RO Systems', 'DM / WTP / STP / ETP', 'Oil & Gas Process', 'Solar Panel Maintenance'],
  },
  {
    icon: Building2,
    number: '02',
    title: 'Hospitality & Commercial',
    items: ['Hotels & Resorts', 'Commercial Complexes', 'Kitchen Care Solutions', 'Swimming Pools & Water Parks'],
  },
  {
    icon: HeartPulse,
    number: '03',
    title: 'Hospitals & Healthcare',
    items: ['Certified Disinfection', 'Infection Control', 'MSDS Compliance', 'Healthcare Hygiene Protocols'],
  },
  {
    icon: Shirt,
    number: '04',
    title: 'Laundry Segment',
    items: ['Commercial Laundries', 'Dry Cleaners', 'Laundry Machine Support', 'Technical Training'],
  },
]

const advantages = [
  {
    icon: Award,
    title: 'Authorized Distributor',
    description: 'Official distributor for Chemtex & Indokem in Chhattisgarh — 100% authentic, certified products.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    description: 'Every chemical meets international standards with full MSDS compliance and safety documentation.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert on-site guidance and technical assistance for every application and sector.',
  },
  {
    icon: Truck,
    title: 'Reliable Bulk Supply',
    description: 'Dependable supply chain built for large-scale industrial and commercial operations.',
  },
  {
    icon: Users,
    title: '500+ Satisfied Clients',
    description: 'Trusted by hospitals, factories, hotels, and laundry businesses across the region.',
  },
  {
    icon: Zap,
    title: 'Right Chemical, Right Use',
    description: '18 years of expertise ensuring optimal chemical selection for maximum performance and safety.',
  },
]

const brandLogos = [
  { name: 'Chemtex', logo: '/images/chemtex.png' },
  { name: 'Indokem Limited', logo: '/images/indokem.png' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="pointer-events-none absolute top-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6 animate-slideDown">
            <span className="text-accent font-medium text-sm">Authorized Distributor · Chhattisgarh & Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight animate-slideUp">
            Trusted Chemical <span className="text-gradient block mt-1">Solutions Partner</span>
          </h1>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slideUp" style={{ animationDelay: '0.15s' }}>
            Shivsarvam Enterprises delivers certified industrial and specialty chemicals across four key sectors backed by two premium brands.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.25s' }}>
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-2xl px-5 py-4 border border-border/50">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Overview + Founder ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              About <span className="text-gradient">Shivsarvam Enterprises</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mb-6" />

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Shivsarvam Enterprises is a trusted supplier and distributor of high-quality industrial and specialty chemicals delivering reliable solutions across industrial utilities, healthcare, hospitality, and laundry sectors.
              </p>
              <p>
                We are the authorized distributors of <strong className="text-foreground">Chemtex Specialty Private Limited</strong> and{' '}
                <strong className="text-foreground">Indokem Limited</strong> in Chhattisgarh and Maharashtra, with a firm focus on safe application through training and technical support.
              </p>
            </div>

            <blockquote className="relative mt-8 p-6 pl-8 bg-gradient-to-r from-primary/8 to-transparent rounded-2xl border-l-4 border-primary overflow-hidden">
              <span className="absolute top-1 left-3 text-6xl text-primary/15 font-serif leading-none select-none" aria-hidden>&ldquo;</span>
              <p className="relative z-10 text-lg font-semibold italic text-foreground leading-relaxed">
                शिवसर्वम् — गुणवत्ता सर्वप्रथम
              </p>
              <span className="absolute bottom-0 right-4 text-6xl text-primary/15 font-serif leading-none select-none" aria-hidden>&rdquo;</span>
              <footer className="mt-2 text-sm font-medium text-primary/80 not-italic tracking-wide">— Shivsarvam Enterprises</footer>
            </blockquote>
          </div>

         <div className="relative rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
  
  {/* Top gradient line */}
  <div className="h-[4px] bg-gradient-to-r from-primary to-accent" />

  <div className="p-6 sm:p-8">

    {/* Layout */}
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

      {/* Image (Bigger + Better visibility) */}
    <div className="w-40 h-48 sm:w-44 sm:h-52 md:w-48 md:h-60 rounded-xl overflow-hidden border border-primary/20 shrink-0 shadow-md bg-muted">
      <img
        src="/images/founder.jpg"
        alt="Founder"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center 15%" }}
      />
    </div>

      {/* Content */}
      <div className="text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
          Founder & Director
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-1">
          Laxmidatta Bajpayee
        </h3>

        <span className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full border border-accent/20 text-accent text-xs font-semibold mb-4">
          18+ Years Industry Experience
        </span>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          Holds a Master's degree in Chemistry and an MBA in Operations Management. His expertise spans Thermal Power, Cement, and Chemical industries — combining deep chemical knowledge with strategic business insight to deliver optimal, safe chemical solutions.
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
      <div>
        <p className="text-xl font-bold text-primary">M.Sc</p>
        <p className="text-xs text-muted-foreground">Chemistry</p>
      </div>
      <div>
        <p className="text-xl font-bold text-primary">MBA</p>
        <p className="text-xs text-muted-foreground">Operations Mgmt</p>
      </div>
      <div>
        <p className="text-xl font-bold text-primary">18+</p>
        <p className="text-xs text-muted-foreground">Years Exp.</p>
      </div>
    </div>

  </div>
</div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Direction</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mission &amp; <span className="text-gradient">Vision</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="relative p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted regional partner for industrial and specialty chemicals supplying only certified products from leading brands, backed by technical support and training that ensure safe, effective use across every sector we serve.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="relative p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Eye className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To set the standard for chemical distribution in Chhattisgarh and beyond where quality, safety, and customer success come first, and every industry has access to the right solutions and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Business Segments ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">What We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Core Business <span className="text-gradient">Segments</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {segments.map((seg, i) => {
              const Icon = seg.icon
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
                >
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-4xl font-black text-muted/60 leading-none select-none group-hover:text-primary/20 transition-colors duration-300">
                        {seg.number}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-bold text-foreground mb-4">{seg.title}</h3>

                    <ul className="space-y-2">
                      {seg.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-[12px] text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-gradient">Us?</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-[15px] font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Authorized Brands Strip ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-to-r from-primary/8 via-card to-accent/8 p-8 text-center">
            <div className="pointer-events-none absolute top-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <FlaskConical className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Authorized Brands</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Official Distributor of <span className="text-gradient">Premium Brands</span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {brandLogos.map((brand, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border shadow-sm"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={90}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/8 via-background to-accent/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full border border-accent/20 mb-5">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase">Let's Work Together</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Partner <span className="text-gradient">With Us?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-base max-w-xl mx-auto">
            Get a tailored quote or speak with our team about your industrial, hygiene, or specialty chemical requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover-lift">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-muted transition-colors">
              View Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
