'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, BadgeCheck, Headphones, PackageCheck, Award, ArrowRight } from 'lucide-react'

const brands = [
  {
    number: '01',
    logo: '/images/chemtex.png',
    name: 'Chemtex Specialty Pvt. Ltd.',
    tagline: 'Your global partner for every industrial chemical need.',
    description: 'Authorized distributor covering Thermal Power, Water Treatment, Food & Pharma, Hospitality, Oil & Gas, and more — every product certified and compliant.',
    badges: ['All Industry Solutions', 'ISO Certified', 'MSDS Compliance'],
    gradientFrom: 'from-primary/12',
    gradientTo: 'to-primary/3',
    badgeBg: 'bg-primary/10 border-primary/20 text-primary',
    glowColor: 'group-hover:shadow-primary/15',
    numberColor: 'text-primary/8',
    flip: false,
  },
  {
    number: '02',
    logo: '/images/indokem.png',
    name: 'Indokem Limited',
    tagline: 'Specialized care for textiles, laundry & commercial operations.',
    description: 'Precision laundry and textile care formulations for commercial machines and professional operations — maximum efficiency, fabric-safe chemistry.',
    badges: ['Laundry Specialist', 'Textile Care', 'Premium Washing'],
    gradientFrom: 'from-accent/12',
    gradientTo: 'to-accent/3',
    badgeBg: 'bg-accent/10 border-accent/20 text-accent',
    glowColor: 'group-hover:shadow-accent/15',
    numberColor: 'text-accent/8',
    flip: true,
  },
]

const trustPillars = [
  { icon: BadgeCheck,   label: '100% Authentic',   sub: 'Genuine certified products' },
  { icon: ShieldCheck,  label: 'MSDS Compliant',    sub: 'Full safety documentation' },
  { icon: Headphones,   label: 'Technical Support', sub: 'Expert on-site assistance' },
  { icon: PackageCheck, label: 'Warranty Covered',  sub: 'Complete product guarantee' },
]

const floatAnim = {
  animate: { y: [0, -7, 0] },
  transition: { duration: 3.5, repeat: Infinity, repeatType: 'mirror' as const },
}

export function Brands() {
  return (
    <section id="brands" className="relative py-16 bg-background scroll-mt-[70px] overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[420px] h-[420px] bg-primary/4 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-accent/4 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"
        >
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-3">
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Authorized <span className="text-gradient">Brand Partners</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md text-[14px]">
              Globally trusted chemical leaders — exclusively distributed across Chhattisgarh.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-xl border border-accent/20 shrink-0 self-start md:self-auto cursor-pointer"
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">Official Regional Distributor</span>
          </motion.div>
        </motion.div>

        {/* Brand Rows */}
        <div className="space-y-3">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className={`group relative rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl ${brand.glowColor} transition-shadow duration-400 cursor-pointer`}
            >
              {/* Sweep accent bar */}
              <motion.span
                className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary to-accent origin-left z-10"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
              />

              <div className={`grid grid-cols-1 md:grid-cols-5 ${brand.flip ? 'md:[direction:rtl]' : ''}`}>

                {/* Visual Stage */}
                <div className={`md:col-span-2 relative flex items-center justify-center py-8 px-8 overflow-hidden ${brand.flip ? 'md:[direction:ltr]' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradientFrom} ${brand.gradientTo}`} />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,transparent_70%)]" />

                  <motion.span
                    className={`pointer-events-none absolute -bottom-2 -right-2 text-[90px] font-black leading-none select-none ${brand.numberColor}`}
                    whileHover={{ scale: 1.15, opacity: 0.6 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {brand.number}
                  </motion.span>

                  <div className="relative flex flex-col items-center gap-3">
                    <motion.div
                      className="relative w-40 h-14"
                      animate={floatAnim.animate}
                      transition={floatAnim.transition}
                      whileHover={{ scale: 1.08 }}
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain drop-shadow-sm"
                      />
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-1.5 px-3 py-1 bg-background/75 backdrop-blur-sm rounded-full border border-border/50"
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Authorized Partner</span>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:col-span-3 flex flex-col justify-center py-7 px-7 ${brand.flip ? 'md:[direction:ltr] md:pr-8' : 'md:pl-8'}`}>
                  <h3 className="text-lg font-bold text-foreground mb-1">{brand.name}</h3>
                  <p className="text-primary font-semibold italic text-[13px] mb-3">{brand.tagline}</p>
                  <p className="text-muted-foreground text-[13px] leading-relaxed mb-4">{brand.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {brand.badges.map((badge, bi) => (
                      <motion.span
                        key={badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + bi * 0.06 }}
                        whileHover={{ scale: 1.06 }}
                        className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider cursor-default ${brand.badgeBg}`}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="flex items-center gap-1.5 text-[12px] font-bold text-primary w-fit cursor-pointer"
                    whileHover={{ gap: '10px', x: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {trustPillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                whileHover={{ y: -3 }}
                className="group flex items-center gap-3 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-4.5 h-4.5 text-primary group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <div>
                  <p className="text-[12px] font-bold text-foreground">{pillar.label}</p>
                  <p className="text-[11px] text-muted-foreground">{pillar.sub}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
