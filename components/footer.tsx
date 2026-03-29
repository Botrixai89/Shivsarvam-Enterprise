'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight, Sparkles, Shield, Clock, Award, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const QUICK_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Brands', href: '/#brands' },
  { name: 'Contact', href: '/contact' },
]

const SERVICES = [
  { name: 'Industrial Segment', href: '/solutions/hygiene' },
  { name: 'Hospital Segment', href: '/solutions/hospital' },
  { name: 'Hotels & Resorts', href: '/solutions/water' },
  { name: 'Laundry Solutions', href: '/solutions/laundry' },
  { name: 'Solar Maintenance', href: '/solutions/solar' },
]

const brandLogos = [
  { name: 'Chemtex', logo: '/images/chemtex.png' },
  { name: 'Indokem Limited', logo: '/images/indokem.png' },
];

const CONTACT_INFO = [
  { Icon: Phone, label: '+91 84129 09297', href: 'tel:+918412909297' },
  { Icon: Mail, label: 'info@shivsarvam.in', href: 'mailto:info@shivsarvam.in' },
  { Icon: MapPin, label: 'Raipur, Chhattisgarh, India', href: null },
]

// const SOCIAL_LINKS = [
//   { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
//   { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
//   { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
//   { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
// ]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Logo & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-4"
          >
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Shivsarvam Enterprises"
                width={180}
                height={60}
                className="h-34 sm:h-42 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </Link>
            
            <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
              Trusted source for industrial utility chemicals, cleaning, hygiene & disinfection solutions. 
              Serving Chhattisgarh with excellence.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">ISO Certified</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Authorized Distributor</span>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-3 pt-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((item, idx) => (
                <motion.li key={item.name} variants={fadeInUp}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-200 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Our Solutions
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((item, idx) => (
                <motion.li key={item.name} variants={fadeInUp}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-200 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item, idx) => (
                <motion.li key={item.label} variants={fadeInUp}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm break-all">{item.label}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Business Hours */}
            <motion.div variants={fadeInUp} className="mt-6 pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Business Hours</p>
                  <p className="text-xs text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-xs text-muted-foreground">Sunday:9:00 AM - 4:00 PM </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-10"
        />
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shivsarvam Enterprises. All rights reserved.
          </p>
          
       

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Authorized Distributor for</span>

            <div className="flex items-center gap-6">
              {brandLogos.map((brand, idx) => (
                <Image
                  key={idx}
                  src={brand.logo}
                  alt={brand.name}
                  width={60}
                  height={24}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
          
          {/* <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  )
}