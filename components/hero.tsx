'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 animate-slideDown">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
            <p className="text-accent font-medium text-sm">Authorized Distributor for Chhattisgarh</p>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Complete Industrial & Hygiene
          <span className="text-primary block mt-2">Chemical Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Authorized distributor & supplier of <span className="font-semibold text-primary">Chemtex</span> & <span className="font-semibold text-primary">Indochem</span> premium chemical solutions for industrial, healthcare, hospitality, and commercial sectors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="w-full sm:w-auto hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1" asChild>
            <Link href="#contact">Request a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border/50">
          <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-muted-foreground">Authorized Distributor</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl font-bold text-primary">24/7</p>
            <p className="text-muted-foreground">Support Available</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <p className="text-2xl font-bold text-primary">Fast</p>
            <p className="text-muted-foreground">Bulk Supply Capable</p>
          </div>
        </div>
      </div>
    </section>
  )
}
