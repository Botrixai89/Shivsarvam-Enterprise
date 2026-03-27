'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Sparkles, Phone, Mail, Info, Package, Shield, MessageCircle, Home } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  {label: 'Home', href:'/',icon:Home},
  { label: 'About', href: '/about', icon: Info },
  { label: 'Solutions', href: '/solutions', icon: Package },
  { label: 'Brands', href: '/#brands', icon: Shield },
  { label: 'Contact', href: '/contact', icon: MessageCircle },
]

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
}

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mounted) {
      setIsOpen(false)
    }
  }, [pathname, mounted])

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    // Fix: Check for hash links without using window
    if (href.includes('#')) {
      // On server-side, just check if we're on the homepage
      if (!mounted) return pathname === '/'
      // On client-side, check the hash
      return pathname === '/' && window.location.hash === href.replace('/', '')
    }
    return pathname?.startsWith(href)
  }

  // Render a simplified version during SSR to avoid hydration issues
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Shivsarvam Enterprises"
              width={140}
              height={60}
              className="h-28 sm:h-32 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:inline-flex relative overflow-hidden group btn-primary shadow-lg hover-lift">
              <span className="relative z-10 flex items-center gap-2">
                Get Quote
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </div>
            <div className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <Menu size={20} className="text-primary" />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          
          {/* Logo with glow effect */}
          <Link href="/" className="group relative flex items-center gap-2 shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/logo.png"
              alt="Shivsarvam Enterprises"
              width={140}
              height={60}
              className="h-34 sm:h-42 w-auto object-contain relative z-10"
              priority
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block absolute -top-1 -right-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                <Sparkles className="w-3 h-3 text-primary relative" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              const Icon = link.icon
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={`w-4 h-4 transition-all duration-300 ${active ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                    {link.label}
                  </span>
                  
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-8 ${active ? 'w-8' : ''}`} />
                </Link>
              )
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Get Quote Button - Hidden on mobile, visible on tablet+ */}
            <OpenQuoteButton className="hidden sm:inline-flex relative overflow-hidden group btn-primary shadow-lg hover-lift">
              <span className="relative z-10 flex items-center gap-2">
                Get Quote
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </OpenQuoteButton>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 shrink-0"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Animated border bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-2"
                >
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href)
                    const Icon = link.icon
                    
                    return (
                      <motion.div key={link.label} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            active
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                          }`}
                        >
                          <Icon className={`w-5 h-5 transition-all duration-300 ${active ? 'text-primary' : 'text-muted-foreground'}`} />
                          {link.label}
                          {active && (
                            <motion.div
                              layoutId="mobileActive"
                              className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                  
                  <motion.div variants={itemVariants} className="pt-4 mt-2 border-t border-border/50">
                    <div className="space-y-3 px-4">
                      <a
                        href="tel:+918412909297"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">+91 84129 09297</span>
                      </a>
                      <a
                        href="mailto:info@shivsarvam.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">info@shivsarvam.com</span>
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="pt-4">
                    <OpenQuoteButton className="w-full btn-primary shadow-md">
                      Get Quote
                    </OpenQuoteButton>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop blur for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}