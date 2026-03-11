import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions | Shivsarvam Enterprises',
  description: 'Industrial, hospital, laundry, water treatment & solar maintenance chemical solutions. Authorized Chemtex & Indokem distributor.',
  openGraph: { title: 'Solutions | Shivsarvam Enterprises', description: 'Chemical solutions for every sector — industrial, healthcare, commercial.' },
}

const solutions = [
  {
    title: "Industrial Segment",
    href: "/solutions/hygiene",
    image: "/images/industry segment.png",
    items: [
      "Utility chemicals for boilers, cooling towers, chillers, RO systems & waste water management",
      "Oil & gas industry chemicals",
      "Solar panel cleaning chemicals"
    ]
  },
  {
    title: "Hospital Segment",
    href: "/solutions/hospital",
    image: "/images/Hostpital.png",
    items: [
      "Hospital-grade disinfection chemicals",
      "Cleaning & hygiene solutions"
    ]
  },
  {
    title: "Hotels & Resorts Segment",
    href: "/solutions/water",
    image: "/images/Hotel and resort.png",
    items: [
      "Cleaning & hygiene chemicals",
      "Kitchen care chemical solutions",
      "Water park & swimming pool cleaning chemicals"
    ]
  },
  {
    title: "Laundry Solutions",
    href: "/solutions/laundry",
    image: "/images/Laundry Solutions.png",
    items: [
      "Laundry chemicals for commercial laundries & dry cleaners",
      "Laundry machines supplier / support for laundry machines and dosing systems"
    ]
  }
]

export default function SolutionsLanding() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Dark Hero Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-wider uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Authorized Distributor
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Chemical Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Every Sector
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial, healthcare, and commercial chemical solutions tailored for
            Chhattisgarh region — backed by 19+ years of expertise.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Core Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industrial Utility, Cleaning, Hygiene &amp; Disinfection Chemical Solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <Link
                key={idx}
                href={sol.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-xl"
              >
                {/* Background Image */}
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/30" />
                
                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-3">{sol.title}</h3>
                  
                  {/* Bullet list */}
                  <ul className="mb-6 space-y-2">
                    {sol.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="text-sm text-gray-200 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white font-bold">
                    <span>View Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA to contact */}
            <Link
              href="/contact"
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute inset-0 p-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Can&apos;t find what you&apos;re looking for? Talk to our chemical experts for a
                  tailored recommendation.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  Contact Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
