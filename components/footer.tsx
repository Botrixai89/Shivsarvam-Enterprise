'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import FooterCanvas from '@/components/FooterCanvas'

const QUICK_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Brands', href: '/#brands' },
  { name: 'Contact', href: '/contact' },
]

const INDUSTRIES = [
  'Industrial Chemicals',
  'Hospital Hygiene',
  'Hospitality Solutions',
  'Commercial Laundry',
]

const CONTACT_INFO = [
  { Icon: Phone, label: '+91-XXXXXXXXXX' },
  { Icon: Mail, label: 'info@shivsarvam.com' },
  { Icon: MapPin, label: 'Raipur, Chhattisgarh, India' },
]

export function Footer() {
  return (
    <footer
      className="relative bg-white border-t border-slate-200 overflow-hidden"
      style={{ fontSize: '14px' }}
    >
      <FooterCanvas />
      {/* Footer particle field */}
      <div className="footer-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 53) % 100}%`,
              animationDelay: `${index * 1.1}s`,
              animationDuration: `${20 + (index % 8)}s`,
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ padding: '48px 32px 0 32px' }}
      >
        {/* Row 1: Logo + Description + Brand Logos */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-6">
          <Link href="/" className="shrink-0" aria-label="Shivsarvam Home">
            <Image
              src="/logo.png"
              alt="Shivsarvam Enterprises"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-4 max-w-xs space-y-3">
            <p
              className="text-slate-500 leading-relaxed"
              style={{ fontSize: '13px' }}
            >
              One trusted source for utility chemicals, healthcare hygiene, hospitality and laundry solutions. Serving Chhattisgarh since 2005.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/chemtex.png"
                alt="Chemtex"
                width={80}
                height={20}
                className="h-5 w-auto object-contain brightness-0 invert opacity-60"
              />
              <Image
                src="/images/indokem.png"
                alt="Indokem Limited"
                width={80}
                height={20}
                className="h-5 w-auto object-contain brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-slate-100 mb-10" />

        {/* Row 2: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10">

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="font-semibold text-[#0F2A44] mb-4 uppercase tracking-wide" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-[#0F2A44] transition-colors duration-200 relative group"
                    style={{ fontSize: '14px' }}
                  >
                    <span className="border-b border-transparent group-hover:border-[#0F2A44] transition-all duration-200 pb-px">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="font-semibold text-[#0F2A44] mb-4 uppercase tracking-wide" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>
              Industries
            </h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((item) => (
                <li key={item} className="text-slate-500" style={{ fontSize: '14px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold text-[#0F2A44] mb-4 uppercase tracking-wide" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              {CONTACT_INFO.map(({ Icon, label }) => (
                <li key={label} className="flex items-start gap-2.5 text-slate-500" style={{ fontSize: '14px' }}>
                  <Icon className="w-4 h-4 mt-0.5 shrink-0 text-[#0F2A44]/60" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100">
        <div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ padding: '14px 32px', fontSize: '13px' }}
        >
          <p className="text-slate-400">
            © 2026 Shivsarvam Enterprises. All rights reserved.
          </p>
          <p className="text-slate-400">
            Authorized Distributor for{' '}
            <span className="text-slate-600 font-medium">Chemtex</span> &{' '}
            <span className="text-slate-600 font-medium">Indokem Limited</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
