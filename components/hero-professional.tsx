'use client'

import { useState, useEffect } from 'react'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MolecularBackground } from './molecular-background'

export function HeroProfessional() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 md:pt-28">
      <MolecularBackground />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hygiene-hero.png"
          alt="Industrial Chemicals"
          fill
          className="object-cover opacity-20 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-20 relative z-10 w-full py-12 md:py-32">
        <div className="max-w-xl md:max-w-3xl mx-auto md:mx-0 text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Authorized Distributor badge with partner logos */}
            <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 py-2 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-md mb-2 max-w-full flex-wrap scale-90 md:scale-100 origin-left">
              <div className="flex items-center gap-2">
                {/* Pulsing dot */}
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-white/70 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                  Authorized Distributor
                </span>
              </div>

              {/* Divider (hidden on very small screens to avoid crowding) */}
              <span className="hidden sm:inline-block w-px h-4 bg-white/20 shrink-0" />

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Chemtex logo chip */}
                <div className="flex items-center justify-center px-3 sm:px-4 py-1.5 rounded-full bg-white/95 shadow-sm shrink-0">
                  <div className="relative h-7 w-24 sm:h-9 sm:w-28">
                    <Image
                      src="/images/chemtex.png"
                      alt="Chemtex Specialty"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Separator dot */}
                <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />

                {/* Indokem logo chip */}
                <div className="flex items-center justify-center px-3 sm:px-4 py-1.5 rounded-full bg-white/95 shadow-sm shrink-0">
                  <div className="relative h-7 w-26 sm:h-9 sm:w-32">
                    <Image
                      src="/images/indokem.png"
                      alt="Indokem Limited"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            19 Years of Trusted Chemical Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-md md:max-w-xl mx-auto md:mx-0"
          >
            Authorized Distributor of Chemtex &amp; Indokem — Serving Industrial, Healthcare &amp; Commercial sectors across Chhattisgarh
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-xl">
              <Button size="lg" className="px-6 py-3 text-base rounded-xl h-auto w-full sm:w-auto bg-[#1a2744] hover:bg-[#1a2744]/90 text-white border-0 shadow-lg" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-xl">
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 text-base rounded-xl h-auto bg-transparent border-white/40 text-white hover:bg-white hover:text-slate-950 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-950/90 backdrop-blur-xl py-6 md:py-8 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {[
            { label: 'Years Experience', value: 19, suffix: '+' },
            { label: 'Clients Served', value: 500, suffix: '+' },
            { label: 'Industry Sectors', value: 6, suffix: '' },
            { label: 'Authorized Brands', value: 2, suffix: '' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-center md:text-left">
              <span className="text-2xl md:text-4xl font-bold text-white flex items-baseline justify-center md:justify-start">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </span>
              <span className="text-white/70 text-xs md:text-[10px] uppercase tracking-[0.15em] font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { 
      duration: 2.5, 
      ease: "easeOut"
    })
    
    // Subscribe to changes in the rounded MotionValue
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [count, value, rounded])

  return <span>{displayValue}</span>
}
