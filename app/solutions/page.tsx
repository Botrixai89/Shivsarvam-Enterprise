import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageSquare, Download } from 'lucide-react'

const solutionCategories = [
  {
    title: "Industrial & Hygiene",
    href: "/solutions/hygiene",
    image: "/images/hygiene-hero.png",
    badge: "Most Popular",
    desc: "Utility and cleaning chemicals for boilers, cooling towers, chillers, RO systems, waste water management and oil & gas applications."
  },
  {
    title: "Hospital Care",
    href: "/solutions/hospital",
    image: "/images/hospital-hero.png",
    badge: "FDA Approved",
    desc: "Hospital‑grade disinfection and hygiene chemicals designed for OT, ICU and clinical environments."
  },
  {
    title: "Laundry Systems",
    href: "/solutions/laundry",
    image: "/images/laundry-hero.png",
    badge: "Indokem Range",
    desc: "Laundry chemicals for commercial laundries and dry cleaners, along with specialized support for laundry machines."
  },
  {
    title: "Water Treatment",
    href: "/solutions/water",
    image: "/images/water-hero.png",
    badge: "Pool & Industrial",
    desc: "Water park and swimming pool cleaning chemicals plus water treatment support for safe, crystal clear water."
  },
  {
    title: "Solar Maintenance",
    href: "/solutions/solar",
    image: "/images/solar-hero.png",
    badge: "Efficiency First",
    desc: "Solar panel cleaning chemicals that help maintain output and protect installations from deposits."
  }
]

const brochureGroups = [
  {
    title: 'Industrial & Utility',
    desc: 'Utility chemicals for boilers, cooling towers, chillers, RO systems and oil & gas.',
    items: [
      {
        label: 'Utility Chemicals D2 Portfolio',
        file: '/pdfs/Utility Chemicals D2 (24.03.2025).pdf'
      },
      {
        label: 'Chemicals for Oil & Gas Industry',
        file: '/pdfs/Brochure - Chemicals for Oil and Gas Industry.pdf'
      },
      {
        label: 'Portfolio 2024 (Overview)',
        file: '/pdfs/Portfolio 2024.pdf'
      }
    ]
  },
  {
    title: 'Cleaning & Hygiene',
    desc: 'Regular and premium cleaning & hygiene chemicals for all sectors.',
    items: [
      {
        label: 'Cleaning & Hygiene Chemicals – Catalogue',
        file: '/pdfs/CLEANING & HYGIENE CHEMICALS (Regular Products Catalogue).pdf'
      },
      {
        label: 'Chemtex Cleaning & Hygiene Brochure',
        file: '/pdfs/Chemtex Cleaning & Hygiene Chemicals_Brochure-1.pdf'
      }
    ]
  },
  {
    title: 'Hospital Segment',
    desc: 'Hospital‑grade disinfectants and infection‑control chemicals.',
    items: [
      {
        label: 'Hospital Disinfectants Brochure',
        file: '/pdfs/Hospital Disinfectants Brochure_modified.pdf'
      },
      {
        label: 'Hospital Solutions Portfolio',
        file: '/pdfs/Hospital- Brochure 12.09.2024-2.pdf'
      }
    ]
  },
  {
    title: 'Laundry Solutions',
    desc: 'Indokem laundry chemicals for commercial laundries and dry cleaners.',
    items: [
      {
        label: 'Indokem Laundry Corporate Brochure',
        file: '/pdfs/Indokem Limited Laundry Corporate Brochure.pdf'
      }
    ]
  },
  {
    title: 'Swimming Pools & Water',
    desc: 'Swimming pool care and water treatment programs.',
    items: [
      {
        label: 'Swimming Pool Chemicals Brochure',
        file: '/pdfs/Swiming pool brochure_compressed.pdf'
      }
    ]
  },
  {
    title: 'Solar Panel Cleaning',
    desc: 'Neutral pH solar panel cleaning solutions.',
    items: [
      {
        label: 'Solar Panel Cleaning Chemical',
        file: '/pdfs/Brochure - Solar Panel Cleaning Chemical.pdf'
      }
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

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold tracking-wide backdrop-blur-sm">
                    {cat.badge}
                  </span>
                </div>

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

      {/* Core solutions mapped from brochure */}
      <section className="pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Core Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Inspired by our on‑ground solutions portfolio across industrial, healthcare, hospitality
              and laundry applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industrial Segment</h3>
              <ul className="space-y-2 text-slate-700 text-sm leading-relaxed">
                <li>Utility chemicals for boilers, cooling towers, chillers and RO systems.</li>
                <li>Oil &amp; gas industry process and protection chemicals.</li>
                <li>Solar panel cleaning and maintenance chemicals for plants.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hospital Segment</h3>
              <ul className="space-y-2 text-slate-700 text-sm leading-relaxed">
                <li>Hospital‑grade disinfection systems for critical areas.</li>
                <li>Cleaning and hygiene chemicals tailored for healthcare workflows.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hotels &amp; Resorts Segment</h3>
              <ul className="space-y-2 text-slate-700 text-sm leading-relaxed">
                <li>Cleaning and hygiene chemicals for guest areas and back‑of‑house.</li>
                <li>Kitchen care and food‑area compatible chemicals.</li>
                <li>Water park &amp; swimming pool cleaning and treatment programs.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Laundry Solutions</h3>
              <ul className="space-y-2 text-slate-700 text-sm leading-relaxed">
                <li>Laundry chemicals for commercial laundries and dry cleaners.</li>
                <li>Support for laundry machines and dosing systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable brochures by industry/segment */}
      <section className="pb-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Download Industry Brochures
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Explore detailed product lists and technical information for each segment. All brochures
              are served as downloadable PDFs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochureGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{group.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{group.desc}</p>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.file}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                      >
                        <Download className="w-4 h-4" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
