'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: "Industrial Segment",
    href: "/solutions/hygiene",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Utility chemicals for boilers, cooling towers, chillers, RO systems & waste water management",
      "Oil & gas industry chemicals",
      "Solar panel cleaning chemicals"
    ]
  },
  {
    title: "Hospital Segment",
    href: "/solutions/hospital",
    image: "https://images.unsplash.com/photo-1584820927498-cafe8c108157?q=80&w=1470&auto=format&fit=crop",
    items: [
      "Hospital-grade disinfection chemicals",
      "Cleaning & hygiene solutions"
    ]
  },
  {
    title: "Hotels & Resorts Segment",
    href: "/solutions/hygiene",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470&auto=format&fit=crop",
    items: [
      "Cleaning & hygiene chemicals",
      "Kitchen care chemical solutions",
      "Water park & swimming pool cleaning chemicals"
    ]
  },
  {
    title: "Laundry Solutions",
    href: "/solutions/laundry",
    image: "https://images.unsplash.com/photo-1582735780517-573e8e16fdcf?q=80&w=1374&auto=format&fit=crop",
    items: [
      "Laundry chemicals for commercial laundries & dry cleaners",
      "Laundry machines supplier / support for laundry machines and dosing systems"
    ]
  }
]

export function SolutionsAdvanced() {
  return (
    <section id="solutions" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Solutions</h2>
            <p className="text-lg text-slate-600">
              Industrial Utility, Cleaning, Hygiene &amp; Disinfection Chemical Solutions
            </p>
          </div>
          <Link href="/solutions" className="flex items-center gap-2 font-bold text-primary group">
            All Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
