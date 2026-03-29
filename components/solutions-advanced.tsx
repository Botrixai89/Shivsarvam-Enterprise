'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FlaskConical, HeartPulse, Hotel, WashingMachine } from 'lucide-react'

const solutions = [
  {
    icon: FlaskConical,
    title: 'Industrial Segment',
    href: '/solutions/hygiene',
    image: '/images/industry segment.png',
    description: 'Utility chemicals for boilers, cooling towers, chillers, RO systems & waste water management.',
    items: [
      'Boiler & cooling tower treatment',
      'Oil & gas industry chemicals',
      'Solar panel cleaning chemicals',
      'Water treatment & RO chemicals',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Hospital Segment',
    href: '/solutions/hospital',
    image: '/images/Hostpital.png',
    description: 'Clinical-grade disinfection and hygiene chemicals for healthcare facilities.',
    items: [
      'Hospital-grade disinfectants',
      'Surgical & OT hygiene solutions',
      'Surface & floor cleaning chemicals',
    ],
  },
  {
    icon: Hotel,
    title: 'Hotels & Resorts',
    href: '/solutions/water',
    image: '/images/Hotel and resort.png',
    description: 'Complete hygiene and maintenance solutions for hospitality industry.',
    items: [
      'Housekeeping & cleaning chemicals',
      'Kitchen care solutions',
      'Swimming pool & water park chemicals',
    ],
  },
  {
    icon: WashingMachine,
    title: 'Laundry Solutions',
    href: '/solutions/laundry',
    image: '/images/Laundry Solutions.png',
    description: 'High-performance laundry chemicals for commercial operations.',
    items: [
      'Commercial laundry chemicals',
      'Dry cleaning solutions',
      'Dosing system support',
    ],
  },
]

export function SolutionsAdvanced() {
  return (
    <section
      id="solutions"
      className="relative py-24 bg-gradient-to-b from-background via-background to-muted/30 scroll-mt-[70px] overflow-hidden"
    >
      {/* Ambient orbs — echoes the hero */}
      <div className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">What We Offer</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-md leading-tight">
              Our Core <span className="text-gradient">Solutions</span>
            </h2>
            <Link
              href="/solutions"
              className="group flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              View All Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="group"
              >
                <Link
                  href={sol.href}
                  className="relative flex flex-col h-[400px] rounded-2xl overflow-hidden border border-border/40 shadow-lg hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-400 block"
                >
                  {/* Full-bleed image */}
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Base dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                  {/* Primary colour tint — fades in on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top row: icon badge + ghost number */}
                  <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-4 z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-6xl font-black leading-none select-none text-white/10 group-hover:text-white/20 transition-colors duration-500">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom content — anchored to bottom, grows upward */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">

                    {/* Reveal block: hidden on desktop until hover; always visible on mobile */}
                    <div className="mb-3 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 ease-out">
                      <p className="text-white/80 text-[13px] leading-relaxed mb-3 line-clamp-2">
                        {sol.description}
                      </p>
                      <ul className="space-y-1.5">
                        {sol.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] text-white/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Always-visible title + CTA */}
                    <h3 className="text-[16px] font-bold text-white mb-2 leading-snug">{sol.title}</h3>
                    <div className="flex items-center gap-2 text-[12px] font-bold text-accent group-hover:gap-3 transition-all duration-200">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom sweep accent */}
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
