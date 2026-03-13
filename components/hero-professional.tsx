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
            className="flex flex-col justify-center max-w-2xl relative z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Distributor Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 md:gap-4 mb-6 self-start border border-[#0F2A44]/20 rounded-full px-3 py-1.5 md:px-5 md:py-2 bg-white/80 backdrop-blur-sm shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#2F6BFF]" />
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#0F2A44]/60">
                AUTHORIZED DISTRIBUTOR
              </span>
              <span className="w-px h-5 bg-[#0F2A44]/15" />
              <span className="inline-flex items-center gap-3 md:gap-4">
                <Image
                  src="/images/chemtex.png"
                  alt="Chemtex"
                  width={160}
                  height={44}
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <span className="w-px h-5 bg-[#0F2A44]/15" />
                <Image
                  src="/images/indokem.png"
                  alt="Indokem"
                  width={160}
                  height={44}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-extrabold text-[#0F2A44] leading-tight mb-5 text-4xl md:text-5xl lg:text-[54px]"
            >
              One Trusted Source for Utility Chemicals, Healthcare Hygiene,{' '}
              <span className="text-[#2F6BFF]">Hospitality &amp; Laundry Solutions.</span>
            </motion.h1>

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


          </motion.div>



        </div>
      </div>
    </section>
  )
}
