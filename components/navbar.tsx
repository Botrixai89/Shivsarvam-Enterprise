'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-white border-b border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Shivsarvam Home">
          <Image
            src="/logo.png"
            alt="Shivsarvam Enterprises"
            width={260}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Center Nav */}
        <nav className="hidden md:flex items-center" style={{ gap: '28px' }} aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href !== '/' &&
              !link.href.includes('#') &&
              pathname?.startsWith(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[14px] font-medium transition-colors duration-200 group py-1 ${
                  isActive ? 'text-[#0F2A44]' : 'text-slate-600 hover:text-[#0F2A44]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#0F2A44] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <OpenQuoteButton
            className="hidden sm:inline-flex items-center justify-center bg-[#0F2A44] hover:bg-[#1a3d5c] text-white text-[14px] font-semibold transition-all duration-200 border-none"
            style={{ borderRadius: '8px', padding: '10px 22px' } as React.CSSProperties}
          >
            Get Quote
          </OpenQuoteButton>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white border-t border-slate-100 shadow-lg z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-[14px] font-medium text-slate-700 hover:text-[#0F2A44] hover:bg-slate-50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <OpenQuoteButton
                className="w-full justify-center bg-[#0F2A44] hover:bg-[#1a3d5c] text-white text-[14px] font-semibold transition-all duration-200 border-none"
                style={{ borderRadius: '8px', padding: '11px 22px' } as React.CSSProperties}
              >
                Get Quote
              </OpenQuoteButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
