'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, Users, Truck, Award, Headphones } from 'lucide-react'

const WHY_US = [
  {
    icon: Award,
    title: 'Authorized Distributor',
    description: 'Official distributor for Chemtex & Indokem in Chhattisgarh — 100% authentic products.',
  },
  {
    icon: Target,
    title: 'Premium Quality',
    description: 'Chemicals meeting international standards with full MSDS compliance.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert guidance and on-site technical assistance for every application.',
  },
  {
    icon: Truck,
    title: 'Reliable Bulk Supply',
    description: 'Dependable supply chain for large-scale industrial and commercial operations.',
  },
  {
    icon: Users,
    title: '500+ Satisfied Clients',
    description: 'Trusted by hospitals, factories, hotels, and laundry businesses across the region.',
  },
  {
    icon: CheckCircle,
    title: '19+ Years Experience',
    description: 'Decades of industry expertise ensuring the right chemical for every need.',
  },
]

const CORE_SEGMENTS = [
  'Industrial & Power Plants',
  'Hospitality & Swimming Pools',
  'Hospitals & Healthcare Sector',
  'Commercial Laundry & Textile Care',
]

export function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-10 bg-[#F8FAFC] scroll-mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1e6aa7] mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44] mb-5 leading-tight">
                About Shivsarvam Enterprises
              </h2>
              <div className="w-12 h-[3px] bg-[#0F2A44] rounded-full mb-6" />
              <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                Shivsarvam Enterprises is a trusted supplier and distributor of high-quality industrial and specialty chemicals. With over <strong>19 years of experience</strong> in industrial chemical applications, we deliver reliable and effective chemical solutions across multiple sectors.
              </p>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                We are the authorized distributors of <strong>Chemtex Specialty Private Limited</strong> and <strong>Indokem Limited</strong> in Chhattisgarh. Our focus is on supplying premium products while ensuring safe usage through training and technical support.
              </p>
            </motion.div>

            {/* Right: Core segments card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
            >
              <h4 className="text-[13px] font-bold uppercase tracking-widest text-slate-400 mb-6">Core Business Segments</h4>
              <ul className="space-y-4">
                {CORE_SEGMENTS.map((seg, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0F2A44]/8 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#0F2A44]" />
                    </div>
                    <span className="text-[15px] font-medium text-slate-700">{seg}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tag */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[13px] text-slate-400 italic font-medium">"शिवसर्वम् — गुणवत्ता सर्वप्रथम"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1e6aa7] mb-3">Our Advantage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44] mb-3">Why Choose Us?</h2>
            <div className="w-12 h-[3px] bg-[#0F2A44] rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 hover:border-[#0F2A44]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F2A44]/10 flex items-center justify-center mb-4 group-hover:bg-[#0F2A44] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#0F2A44] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-[15px] font-bold text-[#0F2A44] mb-2">{item.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
