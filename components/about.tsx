'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Truck, Award, Headphones, Factory, Building2, HeartPulse, Shirt, ShieldCheck, Zap } from 'lucide-react'

const WHY_US = [
  {
    icon: Award,
    title: 'Authorized Distributor',
    description: 'Official distributor for Chemtex & Indokem in Chhattisgarh — 100% authentic products.',
  },
  {
    icon: ShieldCheck,
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
    icon: Zap,
    title: 'Right Chemical, Right Use',
    description: 'Industry expertise ensuring the right chemical selection for every need and application.',
  },
]

const CORE_SEGMENTS = [
  { icon: Factory,    label: 'Industrial & Power Plants' },
  { icon: Building2,  label: 'Hospitality & Swimming Pools' },
  { icon: HeartPulse, label: 'Hospitals & Healthcare Sector' },
  { icon: Shirt,      label: 'Commercial Laundry & Textile Care' },
]

const STATS = [
  { value: '18+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '2', label: 'Premium Brands' },
  { value: '4', label: 'Sectors Covered' },
]

export function About() {
  return (
    <>
      {/* ── About Section ── */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-muted/20 to-background scroll-mt-[70px] overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[280px] h-[280px] bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">Who We Are</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                About <span className="text-gradient">Shivsarvam Enterprises</span>
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mb-6" />

              <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed mb-6">
                <p>
                  Shivsarvam Enterprises is a trusted supplier and distributor of high-quality industrial and specialty chemicals — delivering reliable solutions across multiple sectors with over{' '}
                  <strong className="text-foreground">18 years of industry experience</strong>.
                </p>
                <p>
                  We are the authorized distributors of certified chemicals from{' '}
                  <strong className="text-foreground">Chemtex Specialty Private Limited</strong> and{' '}
                  <strong className="text-foreground">Indokem Limited</strong> in Chhattisgarh and Maharashtra, with a focus on safe usage through training and technical support.
                </p>
              </div>

              <blockquote className="relative p-6 pl-8 bg-gradient-to-r from-primary/8 to-transparent rounded-2xl border-l-4 border-primary overflow-hidden">
                <span className="absolute top-1 left-3 text-6xl text-primary/15 font-serif leading-none select-none" aria-hidden>&ldquo;</span>
                <p className="relative z-10 text-base md:text-lg font-semibold italic text-foreground leading-relaxed">
                  शिवसर्वम् — गुणवत्ता सर्वप्रथम
                </p>
                <span className="absolute bottom-0 right-4 text-6xl text-primary/15 font-serif leading-none select-none" aria-hidden>&rdquo;</span>
                <footer className="mt-2 text-sm font-medium text-primary/80 not-italic tracking-wide">— Shivsarvam Enterprises</footer>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-5"
            >
              {/* Stats strip */}
              <div className="grid grid-cols-4 gap-3">
                {STATS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="bg-card border border-border rounded-2xl px-3 py-4 text-center"
                  >
                    <p className="text-xl font-bold text-primary">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Core segments card */}
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="h-[3px] bg-gradient-to-r from-primary to-accent" />
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-5">
                    <span className="text-primary font-semibold text-xs tracking-widest uppercase">Core Business Segments</span>
                  </div>
                  <ul className="space-y-3">
                    {CORE_SEGMENTS.map((seg, i) => {
                      const Icon = seg.icon
                      return (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.09 }}
                          className="group flex items-center gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                            <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-[14px] font-medium text-foreground">{seg.label}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-accent ml-auto shrink-0" />
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose <span className="text-gradient">Us?</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
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
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-[15px] font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
