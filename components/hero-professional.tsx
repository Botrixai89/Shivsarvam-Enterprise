'use client'

import { useState, useEffect } from 'react'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MolecularBackground } from './molecular-background'

export function HeroProfessional() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Authorized Distributor
            </div>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1]"
            >
              Precision Chemicals for
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-5xl md:text-7xl font-bold leading-[1.1]"
            >
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(30,64,175,0.3)]"
              >
                Every Industry
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
          >
            Your trusted regional partner for premium solutions from <span className="text-white font-bold">Chemtex Specialty</span> & <span className="text-white font-bold">Indokem Limited</span>. Delivering safety, hygiene, and efficiency for 19+ years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 0px 0px rgba(30, 64, 175, 0)", "0 0 20px 2px rgba(30, 64, 175, 0.4)", "0 0 0px 0px rgba(30, 64, 175, 0)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-full"
            >
              <Button size="lg" className="px-8 py-7 text-lg rounded-full h-auto" asChild>
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 0px 0px rgba(255, 255, 255, 0)", "0 0 20px 2px rgba(255, 255, 255, 0.1)", "0 0 0px 0px rgba(255, 255, 255, 0)"] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="rounded-full"
            >
              <Button size="lg" variant="outline" className="px-8 py-7 text-lg rounded-full h-auto bg-transparent border-white/40 text-white hover:bg-white hover:text-slate-950 transition-all duration-300" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-8 hidden lg:block z-20"
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            {[
              { label: 'Authorized Distribution', value: 100, suffix: '%' },
              { label: 'Industry Expertise', value: 19, suffix: '+ Yrs' },
              { label: 'Regional Hubs', value: 7, suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-4xl font-bold text-white flex items-baseline">
                  <Counter value={stat.value} />
                  <span>{stat.suffix}</span>
                </span>
                <span className="text-primary-foreground/60 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</span>
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
