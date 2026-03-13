'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck } from 'lucide-react'

const brands = [
  {
    logo: '/images/chemtex.png',
    name: 'Chemtex Specialty',
    logoHeight: 'h-18',
    tagline: 'Your global partner for every industrial chemical need.',
    description: 'Authorized distributor of Chemtex\'s massive portfolio covering Thermal Power, Water Treatment, Food & Pharma, Hospitality, and more.',
    badges: ['All Industry Solutions', 'ISO Certified', 'MSDS Compliance'],
    accent: '#0F2A44',
  },
  {
    logo: '/images/indokem.png',
    name: 'Indokem Limited',
    logoHeight: 'h-12',
    tagline: 'Specialized care for textiles and laundry.',
    description: 'High-performance chemicals dedicated to professional clothing washing, commercial laundry machines, and textile care operations.',
    badges: ['Laundry Specialist', 'Textile Care', 'Premium Washing'],
    accent: '#1e6aa7',
  },
]

export function Brands() {
  return (
    <section id="brands" className="py-5 bg-[#F8FAFC] scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1e6aa7] mb-3">Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44] mb-3">Our Brand Partners</h2>
          <p className="text-[15px] text-slate-500 max-w-lg">
            Authorized distributor of globally trusted leaders in industrial and clinical chemical solutions.
          </p>
          <div className="w-12 h-[3px] bg-[#0F2A44] rounded-full mt-4" />
        </motion.div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Logo */}
              <div className={`relative ${brand.logoHeight} w-44 mb-6`}>
                <Image src={brand.logo} alt={brand.name} fill className="object-contain object-left" />
              </div>

              <h3 className="text-xl font-bold text-[#0F2A44] mb-2">{brand.name}</h3>
              <p className="text-[13px] text-[#1e6aa7] font-medium italic mb-3">{brand.tagline}</p>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-5">{brand.description}</p>

              <div className="flex flex-wrap gap-2">
                {brand.badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="secondary"
                    className="bg-[#0F2A44]/6 text-[#0F2A44] border-[#0F2A44]/15 text-[10px] font-bold uppercase tracking-wider px-3 py-1"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-6"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0F2A44]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#0F2A44]" />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#0F2A44] mb-1">Official Regional Partnership — Chhattisgarh</h4>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              As an authorized distributor, we guarantee 100% authentic products, proper handling, technical support, and full warranty coverage on all items supplied.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
