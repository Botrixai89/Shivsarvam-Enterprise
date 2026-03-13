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
    <section id="solutions" className="py-20 bg-[#F8FAFC] scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1e6aa7] mb-3">What We Offer</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44] max-w-md leading-tight">
              Our Core Solutions
            </h2>
            <Link
              href="/solutions"
              className="flex items-center gap-2 text-[14px] font-semibold text-[#1e6aa7] hover:text-[#0F2A44] transition-colors group"
            >
              View All Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="w-12 h-[3px] bg-[#0F2A44] rounded-full mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group"
              >
                <Link href={sol.href} className="flex flex-col h-full bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A44]/50 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 rounded-lg flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#0F2A44]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[15px] font-bold text-[#0F2A44] mb-2">{sol.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed mb-4 flex-1">{sol.description}</p>

                    {/* Bullet items */}
                    <ul className="space-y-1.5 mb-4">
                      {sol.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1e6aa7] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1 text-[12px] font-bold text-[#1e6aa7] group-hover:gap-2 transition-all">
                      View Solutions <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
