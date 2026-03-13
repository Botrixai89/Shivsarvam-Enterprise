import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Shivsarvam Enterprises',
  description: '19+ years of trusted chemical distribution. Authorized distributor of Chemtex & Indokem serving Chhattisgarh and Maharashtra.',
  openGraph: { title: 'About Us | Shivsarvam Enterprises', description: '19+ years of trusted chemical distribution. Authorized distributor of Chemtex & Indokem.' },
}
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Factory,
  Building2,
  HeartPulse,
  Shirt,
  History,
  Users,
  Award,
  Layers,
  Target,
  Eye,
  ChevronRight,
} from 'lucide-react'

const segments = [
  {
    title: 'Industrial Segment',
    icon: Factory,
    items: ['Thermal Power Plants', 'Cooling Tower & RO', 'DM/WTP/STP/ETP', 'Oil & Gas Process', 'Solar Panel Maintenance'],
  },
  {
    title: 'Hospitality & Commercial',
    icon: Building2,
    items: ['Hotels & Resorts', 'Commercial Complexes', 'Kitchen Care', 'Swimming Pools & Water Parks'],
  },
  {
    title: 'Hospitals & Healthcare',
    icon: HeartPulse,
    items: ['Certified Disinfection', 'Infection Control', 'MSDS Compliance', 'Healthcare Hygiene'],
  },
  {
    title: 'Laundry Segment',
    icon: Shirt,
    items: ['Commercial Laundries', 'Dry Cleaners', 'Laundry Machines', 'Technical Training & Support'],
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-[#1a2744] to-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Authorized Distributor & Trusted Chemical Solutions Provider.
          </p>
        </div>
      </section>

      {/* Company Overview + Founder */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">Company Overview</h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Shivsarvam Enterprises is a trusted supplier and distributor of high-quality industrial and specialty chemicals. With over <strong>19 years of experience</strong>, we deliver reliable chemical solutions across multiple sectors.
                </p>
                <p>
                  We are the authorized distributors of certified chemicals from <strong>Chemtex Specialty Private Limited</strong> and <strong>Indokem Limited</strong> in Chhattisgarh and Maharashtra, with a focus on safe usage through training and technical support.
                </p>
                <div className="p-6 bg-white rounded-xl border border-slate-100 italic text-slate-700">
                  &ldquo;शिवसर्वम्-गुणवत्ता सर्वप्रथम&rdquo;
                </div>
              </div>
            </div>

            {/* Founder */}
            <Card className="p-8 rounded-xl shadow-sm border-slate-100 overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-28 h-28 rounded-xl bg-primary/10 shrink-0 flex items-center justify-center border-2 border-primary/20">
                  <span className="text-4xl font-bold text-primary" aria-hidden>SE</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Founder</h3>
                  <p className="text-primary font-semibold mb-4">Shivsarvam Enterprises</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Founded with a vision to bring certified, high-quality chemical solutions to industries and institutions across the region. Our mission is to combine product excellence with hands-on support—training, demos, and technical guidance—so every client can operate safely and efficiently.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-xl border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted regional partner for industrial and specialty chemicals by supplying only certified products from leading brands, backed by technical support and training that ensure safe, effective use across every sector we serve.
              </p>
            </Card>
            <Card className="p-8 rounded-xl border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To set the standard for chemical distribution in Chhattisgarh and beyond—where quality, safety, and customer success come first, and every industry has access to the right solutions and expertise.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core segments as icon cards */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Business Segments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {segments.map((seg, i) => {
              const Icon = seg.icon
              return (
                <Card key={i} className="p-8 rounded-xl border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{seg.title}</h3>
                  <ul className="space-y-2">
                    {seg.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to work with us?</h2>
          <p className="text-slate-600 mb-8">Get a tailored quote or speak to our team for your chemical and hygiene needs.</p>
          <Button size="lg" className="rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white px-8 py-6 text-lg font-bold shadow-lg" asChild>
            <Link href="/contact">
              Get a Quote <ChevronRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
