'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Pages where the hero directly underneath is light/white — navbar must be opaque from the start
const LIGHT_HERO_PATHS = ['/solutions', '/contact']

export function Navbar() {
  const pathname = usePathname()
  const forceOpaque = LIGHT_HERO_PATHS.includes(pathname ?? '')

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(forceOpaque)

  useEffect(() => {
    if (forceOpaque) {
      setIsScrolled(true)
      return
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceOpaque])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-[350ms] ${isScrolled
        ? 'bg-white/80 backdrop-blur-[10px] border-b border-black/5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
        : 'bg-transparent py-2 shadow-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-32 lg:h-36 xl:h-40">
          <Link href="/" className="flex items-center group transition-all duration-300 shrink-0">
            <div className="relative flex items-center">
              <Image
                src="/logo.png"
                alt="Shivsarvam"
                width={400}
                height={160}
                className={`h-20 md:h-28 lg:h-36 xl:h-40 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'brightness-90' : 'brightness-110'
                } group-hover:scale-105`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: 'About', href: '/about' },
              { label: 'Solutions', href: '/solutions' },
              { label: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-base font-bold transition-all duration-300 group py-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <OpenQuoteButton
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transform text-primary-foreground transition-all duration-300 border-none px-8 py-6 text-base font-bold rounded-xl"
            >
              Get Quote
            </OpenQuoteButton>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className={`rounded-xl p-4 shadow-2xl border ${isScrolled ? 'bg-white border-slate-100' : 'bg-slate-950/95 border-white/10'}`}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${isScrolled ? 'text-slate-900 hover:bg-slate-50' : 'text-white hover:bg-white/5'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <OpenQuoteButton className="w-full py-7 rounded-2xl text-lg font-bold bg-[#1a2744] hover:bg-[#1a2744]/90 text-white shadow-xl">
                  Get Quote
                </OpenQuoteButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
