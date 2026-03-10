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

const solutionCategories = [
  {
    title: "Industrial & Hygiene",
    href: "/solutions/hygiene",
    image: "/images/hygiene-hero.png",
    desc: "Utility and cleaning chemicals for boilers, cooling towers, chillers, RO systems, waste water management and oil & gas applications."
  },
  {
    title: "Hospital Care",
    href: "/solutions/hospital",
    image: "/images/hospital-hero.png",
    desc: "Hospital‑grade disinfection and hygiene chemicals designed for OT, ICU and clinical environments."
  },
  {
    title: "Laundry Systems",
    href: "/solutions/laundry",
    image: "/images/laundry-hero.png",
    desc: "Laundry chemicals for commercial laundries and dry cleaners, along with specialized support for laundry machines."
  },
  {
    title: "Water Treatment",
    href: "/solutions/water",
    image: "/images/water-hero.png",
    desc: "Water park and swimming pool cleaning chemicals plus water treatment support for safe, crystal clear water."
  },
  {
    title: "Solar Maintenance",
    href: "/solutions/solar",
    image: "/images/solar-hero.png",
    desc: "Solar panel cleaning chemicals that help maintain output and protect installations from deposits."
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                  <p className="text-slate-300 text-sm mb-5 line-clamp-2">{cat.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    View Products{' '}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}

            {/* 6th card: CTA to contact */}
            <Link
              href="/contact"
              className="group relative h-[420px] overflow-hidden rounded-[2rem] border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center justify-center text-center p-10"
            >
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
