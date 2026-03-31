'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Award, ChevronRight, Zap, Droplets, Building2, Shirt } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'


const TRUST_BADGES = [
  { icon: ShieldCheck, text: 'Authorized Distributor' },
  { icon: Award,       text: 'ISO Certified Products' },
]

const SERVICES = [
  {
    id:       0,
    icon:     Zap,
    label:    'Industrial Chemicals',
    sub:      'Heavy-duty formulations for demanding environments',
    image:    '/images/industry segment.png',
    gradient: 'from-slate-950/85 via-slate-900/40 to-transparent',
    chip:     'Industrial Strength',
    chipColor:'bg-slate-400/20 text-slate-200 border-slate-400/30',
  },
  {
    id:       1,
    icon:     Droplets,
    label:    'Healthcare Hygiene',
    sub:      'Clinical-grade disinfectants & sterile solutions',
    image:    '/images/hospital-hero.png',
    gradient: 'from-blue-950/85 via-blue-900/40 to-transparent',
    chip:     'Medical Grade',
    chipColor:'bg-blue-500/20 text-blue-200 border-blue-400/30',
  },
  {
    id:       2,
    icon:     Building2,
    label:    'Hospitality Cleaning',
    sub:      'Premium care for hotels, resorts & dining',
    image:    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
    gradient: 'from-teal-950/85 via-teal-900/40 to-transparent',
    chip:     '5-Star Standard',
    chipColor:'bg-teal-500/20 text-teal-200 border-teal-400/30',
  },
  {
    id:       3,
    icon:     Shirt,
    label:    'Laundry Solutions',
    sub:      'Commercial-scale fabric care & hygiene systems',
    image:    '/images/Laundry Solutions.png',
    gradient: 'from-green-950/85 via-green-900/40 to-transparent',
    chip:     'Bulk Processing',
    chipColor:'bg-green-500/20 text-green-200 border-green-400/30',
  },
]

function ServiceCarousel() {
  const [active, setActive]   = useState(0)
  const timerRef              = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % SERVICES.length)
    }, 3800)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const jump = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setActive(i)
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % SERVICES.length)
    }, 3800)
  }

  return (
    <div className="relative w-full h-full flex flex-col gap-4">

      {/* Main image window */}
      <div className="relative flex-1 min-h-[340px] lg:min-h-0 rounded-2xl overflow-hidden shadow-2xl">

        {/* Decorative corner accent */}
        <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full z-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(11,94,215,0.35) 0%, transparent 70%)' }} />

        <AnimatePresence mode="sync">
          {SERVICES.map((svc, i) =>
            i === active ? (
              <motion.div
                key={svc.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
              >
                {/* Image */}
                <img
                  src={svc.image}
                  alt={svc.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${svc.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-sm mb-3 ${svc.chipColor}`}>
                      {svc.chip}
                    </span>
                    <h3 className="text-white text-xl font-bold leading-tight mb-1">{svc.label}</h3>
                    <p className="text-white/70 text-sm">{svc.sub}</p>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 z-10 bg-black/30 backdrop-blur-sm text-white/80 text-xs font-mono px-2.5 py-1 rounded-full border border-white/10">
          {String(active + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 gap-2">
        {SERVICES.map((svc, i) => {
          const Icon = svc.icon
          return (
            <button
              key={svc.id}
              onClick={() => jump(i)}
              className={`relative group rounded-xl overflow-hidden transition-all duration-300 ${
                i === active
                  ? 'ring-2 ring-primary shadow-lg shadow-primary/20 scale-105'
                  : 'opacity-60 hover:opacity-90 hover:scale-102'
              }`}
              style={{ aspectRatio: '1 / 1' }}
              aria-label={svc.label}
            >
              <img src={svc.image} alt={svc.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-1">
                <Icon className={`w-4 h-4 ${i === active ? 'text-white' : 'text-white/70'}`} />
                <span className="text-white/90 text-[9px] font-semibold text-center leading-tight line-clamp-2">
                  {svc.label}
                </span>
              </div>
              {/* Active progress bar */}
              {i === active && (
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-full">
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3.8, ease: 'linear' }}
                    key={active}
                  />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function HeroProfessional() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-background pt-20 pb-12">
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft mesh gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(11,94,215,0.08) 0%, transparent 60%), ' +
              'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(32,178,170,0.07) 0%, transparent 55%), ' +
              'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(34,197,94,0.04) 0%, transparent 50%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--foreground, #1E293B) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full blur-[80px]"
          style={{ background: 'rgba(11,94,215,0.09)' }}
          animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-[70px]"
          style={{ background: 'rgba(32,178,170,0.07)' }}
          animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: TEXT ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Authorized distributor pill with brand logos */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-7 px-4 py-2.5 rounded-full border backdrop-blur-sm shadow-sm"
              style={{
                background:   'rgba(11,94,215,0.06)',
                borderColor:  'rgba(11,94,215,0.18)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: 'var(--primary)' }}>
                  Authorized Distributor
                </span>
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              {/* Brand logos - using existing files */}
              <div className="flex items-center gap-3">
                <img 
                  src="/images/chemtex.png" 
                  alt="Chemtex" 
                  className="h-6 sm:h-7 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="text-border font-light">·</span>
                <img 
                  src="/images/indokem.png" 
                  alt="Indokem" 
                  className="h-6 sm:h-7 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
  initial={{ opacity: 0, y: 22 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
  className="font-extrabold leading-[1.15] tracking-tight mb-5
             text-3xl sm:text-5xl lg:text-[3rem] xl:text-[3.3rem]"
  style={{
    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Trusted source
  <br className="hidden lg:block" />
  <span className="sm:hidden md:block">  </span>for industrial utility chemicals, cleaning, hygiene & disinfection solutions
</motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
              className="text-sm sm:text-lg leading-relaxed max-w-lg mb-8"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Supplying high-performance chemicals and cleaning systems for{' '}
              <span className="font-semibold text-foreground">industrial, healthcare</span> and{' '}
              <span className="font-semibold text-foreground">hospitality sectors</span> across the region.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: 'easeOut' }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <Link href="/contact">
                <button
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5 transition-all duration-250"
                  style={{ background: 'var(--accent)' }}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              <Link href="/solutions">
                <button
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250"
                  style={{
                    color:            'var(--primary)',
                    borderColor:      'rgba(11,94,215,0.3)',
                    background:       'rgba(11,94,215,0.04)',
                  }}
                >
                  Explore Solutions
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </Link>
            </motion.div>

            {/* Trust badges only - NO STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <>
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  <Icon className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                  <span>{text}</span>
                  
                </div>


                

                </>
                
              ))} */}
              
              <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm">
                  
                  <span className="text-sm sm:text-lg font-medium text-muted-foreground">
                    Proud Member of 
                  </span>
                  <img
                    src="/images/auth.png"   
                    alt="BNI"
                    className="w-20 h-20 sm:w-28 sm:h-28 mr-2 object-contain"
                  />

                  {/* <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    BNI Member
                  </span> */}

                </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm">
                  
                  <img
                    src="/images/iso2.png"   
                    alt="BNI"
                    className="w-14 h-14 sm:w-20 sm:h-20 mr-2 object-contain"
                  />

                  {/* <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    BNI Member
                  </span> */}

                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm">
                  
                  <img
                    src="/images/bni.png"   
                    alt="BNI"
                    className="w-14 h-14 sm:w-20 sm:h-20 mr-2 object-contain"
                  />


                </div>
            </motion.div>
          </div>

          {/* ── RIGHT: CAROUSEL ── */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="w-full h-full min-h-[440px] lg:min-h-[520px]"
          >
            <ServiceCarousel />
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL CUE ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: 'var(--muted-foreground)' }}>Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'var(--border)' }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full"
            style={{ background: 'var(--primary)' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
