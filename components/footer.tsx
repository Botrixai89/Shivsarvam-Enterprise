'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)
  const [particlePositions, setParticlePositions] = useState<{x: number, top: number}[]>([])

  useEffect(() => {
    setMounted(true)
    const positions = [...Array(6)].map(() => ({
      x: Math.random() * 50 - 25,
      top: 60 + Math.random() * 30
    }))
    setParticlePositions(positions)
  }, [])

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-white/5">
      {/* Chemical Wave Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-[200%] h-64 bg-[url('/wave.svg')] bg-repeat-x opacity-30"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%232563EB\' fill-opacity=\'1\' d=\'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")' }}
        />
      </div>

      {/* Floating Particles */}
      {mounted && particlePositions.length > 0 && particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1, scale: 0.5 }}
          animate={{
            y: [0, -100, 0],
            x: [0, pos.x, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-primary rounded-full z-0"
          style={{
            left: `${i * 20}%`,
            top: `${pos.top}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 group transition-transform duration-500 hover:scale-105 inline-block">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Shivsarvam"
                  width={360}
                  height={96}
                  className="h-24 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Pioneering chemical excellence with industrial utility, clinical grade hygiene, and advanced disinfection solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Solutions', href: '/solutions' },
                { name: 'Our Brands', href: '/#brands' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-8 text-white">Our Expertise</h4>
            <ul className="space-y-4">
              {[
                'Industrial Chemicals',
                'Hospital Grade Hygiene',
                'Hospitality Solutions',
                'Commercial Laundry'
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                  <div className="w-1 h-3 bg-primary/40 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-8 text-white">Get In Touch</h4>
            <div className="space-y-6">
              {[
                { Icon: Phone, text: '+91-XXXXXXXXXX', sub: '24/7 Support' },
                { Icon: Mail, text: 'info@shivsarvam.com', sub: 'Online Inquiry' },
                { Icon: MapPin, text: 'Raipur, Chhattisgarh, India', sub: 'Regional Headquarters' }
              ].map(({ Icon, text, sub }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{text}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} Shivsarvam Enterprises. Specialized Excellence.
          </p>
          <p className="text-slate-400 text-xs font-medium tracking-wide">
            Authorized Distributor for <span className="text-white">Chemtex</span> & <span className="text-white">Indokem Limited</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
