'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, ShieldCheck, Award } from 'lucide-react'
import { HeroCanvas } from './hero-canvas'

const TRUST_BADGES = [
  { icon: ShieldCheck, text: 'Authorized Distributor' },
  { icon: Award, text: 'ISO Certified Products' },
]

export function HeroProfessional() {
  return (
    <section
      className="relative flex items-center overflow-hidden md:min-h-[640px]"
      style={{
        paddingTop: '80px',
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0.25)), url('/images/new bacground image for header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex flex-col lg:flex-row items-center md:min-h-[540px] pt-10 pb-8 md:py-16">

          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center max-w-xl relative z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Distributor Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 md:gap-4 mb-6 self-start border border-[#0F2A44]/20 rounded-full px-3 py-1.5 md:px-5 md:py-2.5 bg-white/80 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#2F6BFF]" />
              <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.2em] text-[#0F2A44]/60">
                AUTHORIZED DISTRIBUTOR
              </span>
              <span className="w-px h-5 bg-[#0F2A44]/15" />
              <span className="inline-flex items-center gap-3 md:gap-4">
                <Image
                  src="/images/chemtex.png"
                  alt="Chemtex"
                  width={80}
                  height={20}
                  className="h-6 md:h-8 w-auto object-contain"
                />
                <span className="w-px h-5 bg-[#0F2A44]/15" />
                <Image
                  src="/images/indokem.png"
                  alt="Indokem"
                  width={80}
                  height={20}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-extrabold text-[#0F2A44] leading-tight mb-5 text-3xl md:text-5xl lg:text-6xl"
            >
              Industrial &amp; Hygiene Chemical
              <br />
              <span className="text-[#2F6BFF]">Solutions for Every Sector</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[16px] text-slate-600 leading-relaxed max-w-md mb-8 italic"
            >
              One Trusted Source for Utility Chemicals, Healthcare Hygiene, Hospitality &amp; Laundry Solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-row flex-wrap gap-3 mt-6"
            >
              <Button
                size="lg"
                className="bg-[#0F2A44] hover:bg-[#1a3d5c] text-white border-0 rounded-lg px-5 py-3 text-[14px] font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0F2A44] text-[#0F2A44] hover:border-[#0F2A44] hover:text-[#0F2A44] hover:bg-[#0F2A44]/5 rounded-lg px-5 py-3 text-[14px] font-semibold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 text-[13px] text-slate-600"
            >
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="inline-flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-[#2F6BFF]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats row (mobile) */}
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100 md:hidden">
              <div className="text-center px-2">
                <div className="text-xl font-bold text-[#0F2A44]">500+</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-400">Clients</div>
              </div>
              <div className="text-center px-2">
                <div className="text-xl font-bold text-[#0F2A44]">6</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-400">Sectors</div>
              </div>
              <div className="text-center px-2">
                <div className="text-xl font-bold text-[#0F2A44]">2</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-400">Brands</div>
              </div>
            </div>
          </motion.div>

          {/* Floating glass stat cards on right (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="hidden md:flex flex-col gap-4 absolute right-8 top-1/3 z-10"
          >
            <div className="glass rounded-xl shadow-lg px-5 py-4">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                Clients
              </div>
              <div className="text-3xl font-bold text-[#0F2A44]">500+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Clients Served</div>
            </div>
            <div className="glass rounded-xl shadow-lg px-5 py-4">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                Industry Sectors
              </div>
              <div className="text-3xl font-bold text-[#0F2A44]">6</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Industry Sectors</div>
            </div>
            <div className="glass rounded-xl shadow-lg px-5 py-4">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                Authorized Brands
              </div>
              <div className="text-3xl font-bold text-[#0F2A44]">2</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Chemtex &amp; Indokem</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Stats Bar (desktop) */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-0 divide-x divide-slate-200 py-5">
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '6', label: 'Industry Sectors' },
              { value: '2', label: 'Authorized Brands' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center px-3">
                <span className="text-xl md:text-2xl font-bold text-[#0F2A44]">{stat.value}</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-[0.18em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
