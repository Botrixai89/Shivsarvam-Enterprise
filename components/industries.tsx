'use client'

import { motion } from 'framer-motion'
import { Factory, HeartPulse, Hotel, WashingMachine, Droplets, Zap } from 'lucide-react'

const industries = [
  { icon: Factory, name: 'Manufacturing & Power Plants', desc: 'Boiler, cooling tower & water treatment' },
  { icon: HeartPulse, name: 'Hospitals & Healthcare', desc: 'Clinical-grade hygiene & disinfection' },
  { icon: Hotel, name: 'Hotels & Resorts', desc: 'Housekeeping, kitchen & pool solutions' },
  { icon: WashingMachine, name: 'Commercial Laundry', desc: 'Textile care & laundry chemicals' },
  { icon: Droplets, name: 'Oil & Gas', desc: 'Specialty process & utility chemicals' },
  { icon: Zap, name: 'Water Treatment Plants', desc: 'RO, ETP & sewage treatment chemicals' },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 bg-white scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1e6aa7] mb-3">Sectors We Serve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44] mb-3">Industries We Serve</h2>
          <p className="text-[15px] text-slate-500 max-w-xl">
            Delivering specialized chemical solutions across diverse sectors with precision and quality assurance.
          </p>
          <div className="w-12 h-[3px] bg-[#0F2A44] rounded-full mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center hover:bg-[#0F2A44] hover:border-[#0F2A44] hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2A44]/10 group-hover:bg-white/15 flex items-center justify-center mb-3 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[13px] font-bold text-[#0F2A44] group-hover:text-white transition-colors duration-300 leading-tight mb-1.5">
                  {industry.name}
                </h3>
                <p className="text-[11px] text-slate-500 group-hover:text-white/70 transition-colors duration-300 leading-snug">
                  {industry.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
