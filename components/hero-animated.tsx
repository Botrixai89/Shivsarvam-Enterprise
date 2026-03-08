'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function HeroAnimated() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float opacity-0" style={{ animation: isVisible ? 'float 6s ease-in-out infinite' : 'none' }}></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-0" style={{ animation: isVisible ? 'float 8s ease-in-out infinite 2s' : 'none' }}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-0" style={{ animation: isVisible ? 'float 7s ease-in-out infinite 1s' : 'none' }}></div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="mb-8" style={{ animation: isVisible ? 'slideDown 0.8s ease-out' : 'none' }}>
          <div className="inline-block px-4 py-2 bg-accent/15 rounded-full border border-accent/30 hover:bg-accent/20 transition-all duration-300 backdrop-blur-sm">
            <p className="text-accent font-semibold text-sm tracking-wide">✨ AUTHORIZED DISTRIBUTOR FOR CHHATTISGARH</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-foreground" style={{ animation: isVisible ? 'slideUp 0.8s ease-out 0.1s both' : 'none' }}>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Industrial & Hygiene
          </span>
          <span className="block mt-4 text-foreground">Chemical Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed" style={{ animation: isVisible ? 'slideUp 0.8s ease-out 0.2s both' : 'none' }}>
          Authorized distributor & supplier of <span className="font-bold text-primary">Chemtex</span> & <span className="font-bold text-primary">Indochem</span> premium chemical solutions. Serving <span className="font-semibold">industrial, healthcare, hospitality, and commercial sectors</span> across the region.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animation: isVisible ? 'slideUp 0.8s ease-out 0.3s both' : 'none' }}>
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            asChild
          >
            <Link href="#contact">Request a Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 py-6 text-base font-semibold hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300"
            asChild
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-border/30">
          {[
            { value: '100%', label: 'Authorized', delay: 0.4 },
            { value: '24/7', label: 'Support', delay: 0.5 },
            { value: '10+', label: 'Years Experience', delay: 0.6 },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="py-4"
              style={{ animation: isVisible ? `slideUp 0.8s ease-out ${stat.delay}s both` : 'none' }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
