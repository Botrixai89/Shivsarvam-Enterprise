import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SchemaLd } from '@/components/schema-ld'
import { SEO_CITIES, getCityBySlug, getCitiesByState } from '@/lib/seo-cities'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, Factory, HeartPulse, Hotel, WashingMachine, Droplets } from 'lucide-react'

const BASE_URL = 'https://www.shivsarvam.in'

export async function generateStaticParams() {
  return SEO_CITIES.map((city) => ({
    state: city.stateSlug,
    city: city.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}): Promise<Metadata> {
  const { state, city } = await params
  const cityData = getCityBySlug(state, city)
  if (!cityData) return {}

  const title = `${cityData.name} Industrial & Chemical Supplier | Chemtex & Indokem Distributor in ${cityData.stateDisplay}`
  const description = `Authorized distributor of Chemtex & Indokem industrial chemicals in ${cityData.name}, ${cityData.stateDisplay}. Boiler chemicals, cooling tower treatment, hospital disinfectants, laundry chemicals & RO water treatment. Call +91 84129 09297.`
  const url = `${BASE_URL}/seo/${cityData.stateSlug}/${cityData.slug}`

  return {
    title,
    description,
    keywords: [
      `industrial chemical supplier ${cityData.name}`,
      `chemical distributor ${cityData.name}`,
      `Chemtex distributor ${cityData.name}`,
      `Indokem distributor ${cityData.name}`,
      `boiler chemicals ${cityData.name}`,
      `cooling tower chemicals ${cityData.name}`,
      `hospital disinfectant ${cityData.name}`,
      `RO water treatment ${cityData.name}`,
      `laundry chemicals ${cityData.name}`,
      `specialty chemicals ${cityData.stateDisplay}`,
      `water treatment chemicals ${cityData.name}`,
      `Shivsarvam Enterprises ${cityData.name}`,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Shivsarvam Enterprises',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/favicon.png`,
          width: 512,
          height: 512,
          alt: 'Shivsarvam Enterprises - Industrial Chemical Supplier',
        },
      ],
    },
  }
}

const SERVICES = [
  {
    icon: Factory,
    title: 'Industrial Utility Chemicals',
    items: [
      'Boiler scale & corrosion inhibitors',
      'Cooling tower biocides & antiscalants',
      'RO membrane antiscalants & cleaners',
      'DM / WTP / STP / ETP chemicals',
      'Oil & gas process chemicals',
      'Solar panel cleaning chemicals',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Hospital & Healthcare Chemicals',
    items: [
      'OT & ICU grade disinfectants',
      'Surface & air disinfection chemicals',
      'Infection control solutions',
      'Cleaning & hygiene chemicals',
      'MSDS-compliant formulations',
      'Broad-spectrum pathogen control',
    ],
  },
  {
    icon: Hotel,
    title: 'Hospitality & Commercial Chemicals',
    items: [
      'Hotel & resort cleaning chemicals',
      'Kitchen care chemical solutions',
      'Swimming pool & water park chemicals',
      'Hard-surface & floor cleaners',
      'Odour control & air fresheners',
      'Food-safe hygiene solutions',
    ],
  },
  {
    icon: WashingMachine,
    title: 'Laundry & Textile Chemicals',
    items: [
      'Commercial laundry detergents',
      'Stain removers & optical brighteners',
      'Fabric softeners & conditioners',
      'Dry-cleaning solvents',
      'Dosing system support',
      'Technical training for laundry staff',
    ],
  },
]

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shivsarvam Enterprises',
  description:
    'Authorized distributor of industrial and specialty chemicals in Chhattisgarh and Maharashtra',
  url: BASE_URL,
  telephone: '+918412909297',
  email: 'info@shivsarvam.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C-6, Sector 3, Jagriti Nagar, Devendra Nagar',
    addressLocality: 'Raipur',
    addressRegion: 'Chhattisgarh',
    postalCode: '492009',
    addressCountry: 'IN',
  },
  areaServed: ['Chhattisgarh', 'Maharashtra', 'Jharkhand', 'Odisha', 'Madhya Pradesh'],
  openingHours: 'Mo-Sa 11:00-18:00',
}

export default async function SeoCityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}) {
  const { state, city } = await params
  const cityData = getCityBySlug(state, city)
  if (!cityData) notFound()

  // Build BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: cityData.stateDisplay,
        item: `${BASE_URL}/seo/${cityData.stateSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${cityData.name} Chemical Supplier`,
        item: `${BASE_URL}/seo/${cityData.stateSlug}/${cityData.slug}`,
      },
    ],
  }

  // Sibling cities for hidden internal links
  const siblingCities = getCitiesByState(cityData.stateSlug)
    .filter((c) => c.slug !== cityData.slug)
    .slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <SchemaLd data={LOCAL_BUSINESS_SCHEMA} />
      <SchemaLd data={breadcrumbSchema} />

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="pointer-events-none absolute top-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span>{cityData.stateDisplay}</span>
            <span>/</span>
            <span className="text-foreground font-medium">{cityData.name}</span>
          </nav>

          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <MapPin className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm">
              Serving {cityData.name}, {cityData.stateDisplay}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
            Industrial Chemical{' '}
            <span className="text-gradient block mt-1">Supplier in {cityData.name}</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {cityData.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover-lift"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+918412909297"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4" /> Call +91 84129 09297
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                Our Products in {cityData.name}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Industrial & Specialty <span className="text-gradient">Chemical Solutions</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We supply high-quality, certified chemicals for {cityData.industryFocus} and
              all major industries operating in {cityData.name} and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold hover:gap-2 transition-all"
                    >
                      View Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">Why Shivsarvam</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Authorized Chemical Partner for <span className="text-gradient">{cityData.name}</span>
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shivsarvam Enterprises is the authorized distributor of <strong className="text-foreground">Chemtex Specialty Private Limited</strong> and <strong className="text-foreground">Indokem Limited</strong> in Chhattisgarh and neighboring states. We bring over 18 years of expertise in industrial and specialty chemical distribution to your doorstep in {cityData.name}.
                </p>
                <p>
                  Our team provides expert on-site technical guidance, ensures MSDS compliance, and delivers bulk chemical supplies reliably — making us the preferred chemical partner for businesses across {cityData.name} and {cityData.stateDisplay}.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  '100% authentic, certified products',
                  'Expert on-site technical support',
                  'Reliable bulk supply & fast delivery',
                  'MSDS-compliant, safety-certified chemicals',
                  '500+ satisfied clients across the region',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="h-[4px] bg-gradient-to-r from-primary to-accent" />
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Headquarters</p>
                    <p className="text-sm text-foreground font-medium">C-6, Sector 3, Jagriti Nagar, Raipur, Chhattisgarh 492009</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Phone</p>
                    <Link href="tel:+918412909297" className="text-sm text-primary font-semibold hover:underline">
                      +91 84129 09297
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                    <Link href="mailto:info@shivsarvam.in" className="text-sm text-primary font-semibold hover:underline">
                      info@shivsarvam.in
                    </Link>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Business Hours</p>
                  <p className="text-sm font-semibold text-foreground">Mon – Sat: 11:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/8 via-background to-accent/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full border border-accent/20 mb-5">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase">
              Serving {cityData.name}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Industrial Chemicals in{' '}
            <span className="text-gradient">{cityData.name}?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact Shivsarvam Enterprises today for a customized quote on boiler chemicals, hospital
            disinfectants, cooling tower treatment, laundry chemicals, or any specialty chemical
            requirement in {cityData.name}, {cityData.stateDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover-lift"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-muted transition-colors"
            >
              View All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hidden SEO Internal Links ── */}
      <nav aria-hidden="true" className="seo-hidden">
        <span>Related chemical supplier pages: </span>
        {siblingCities.map((c) => (
          <Link key={c.slug} href={`/seo/${c.stateSlug}/${c.slug}`}>
            Industrial chemicals {c.name} {c.stateDisplay}
          </Link>
        ))}
        <Link href="/solutions/hygiene">Industrial utility chemicals Chhattisgarh</Link>
        <Link href="/solutions/hospital">Hospital disinfectants Chhattisgarh</Link>
        <Link href="/solutions/water">Hotel cleaning chemicals Chhattisgarh</Link>
        <Link href="/solutions/laundry">Laundry chemicals Chhattisgarh</Link>
        <Link href="/about">About Shivsarvam Enterprises</Link>
        <Link href="/contact">Contact Shivsarvam Enterprises</Link>
      </nav>

      <Footer />
    </main>
  )
}
