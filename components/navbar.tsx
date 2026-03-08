'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-[350ms] ${isScrolled
        ? 'bg-white/80 backdrop-blur-[10px] border-b border-black/5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
        : 'bg-transparent py-6 shadow-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group transition-all duration-300">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Shivsarvam"
                width={360}
                height={96}
                className={`h-24 w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-90' : 'brightness-110'} group-hover:scale-105`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: 'About', href: '#about' },
              { label: 'Solutions', href: '#solutions' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-base font-bold transition-all duration-300 group py-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                <span className={`group-hover:text-[#2563EB] transition-colors duration-300`}>
                  {link.label}
                </span>
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-br from-[#2563EB] to-[#3B82F6] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,99,235,0.35)] transform text-white transition-all duration-300 border-none px-8 py-6 text-base font-bold rounded-xl"
            >
              <Link href="#contact">Get Quote</Link>
            </Button>

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
            <div className={`rounded-3xl p-4 shadow-2xl border ${isScrolled ? 'bg-white border-slate-100' : 'bg-[#0f172a]/95 border-white/10'}`}>
              {[
                { label: 'About', href: '#about' },
                { label: 'Solutions', href: '#solutions' },
                { label: 'Contact', href: '#contact' }
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
                <Button className="w-full py-7 rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/20" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
