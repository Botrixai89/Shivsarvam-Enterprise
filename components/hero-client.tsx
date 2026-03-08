'use client'

import dynamic from 'next/dynamic'

export const HeroClient = dynamic(
  () => import('./hero-professional').then((mod) => mod.HeroProfessional),
  { 
    ssr: false,
    loading: () => <div className="min-h-[90vh] bg-slate-950" />
  }
)
