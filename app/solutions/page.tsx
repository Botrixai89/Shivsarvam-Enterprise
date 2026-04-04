
'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight,
  MessageSquare,
  FlaskConical,
  HeartPulse,
  Hotel,
  WashingMachine,
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Headphones
} from 'lucide-react'

const solutions = [
  {
    number: '01',
    icon: FlaskConical,
    title: 'Industrial Segment',
    href: '/solutions/hygiene',
    image: '/images/industry segment.png',
    tag: 'Utilities & Process',
    gradient: 'from-orange-500/20 to-red-500/20',
    color: 'text-orange-500',
    items: [
      'Utility chemicals for boilers, cooling towers, chillers, RO systems & waste water management',
      'Oil & gas industry chemicals',
      'Solar panel cleaning chemicals',
    ],
  },
  {
    number: '02',
    title: 'Hospital Segment',
    icon: HeartPulse,
    href: '/solutions/hospital',
    image: '/images/Hostpital.png',
    tag: 'Healthcare & Hygiene',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    color: 'text-blue-500',
    items: [
      'Hospital-grade disinfection chemicals',
      'Cleaning & hygiene solutions',
    ],
  },
  {
    number: '03',
    icon: Hotel,
    title: 'Hotels & Resorts Segment',
    href: '/solutions/water',
    image: '/images/Hotel and resort.png',
    tag: 'Hospitality & Commercial',
    gradient: 'from-teal-500/20 to-emerald-500/20',
    color: 'text-teal-500',
    items: [
      'Cleaning & hygiene chemicals',
      'Kitchen care chemical solutions',
      'Water park & swimming pool cleaning chemicals',
    ],
  },
  {
    number: '04',
    icon: WashingMachine,
    title: 'Laundry Solutions',
    href: '/solutions/laundry',
    image: '/images/Laundry Solutions.png',
    tag: 'Textile & Laundry Care',
    gradient: 'from-purple-500/20 to-pink-500/20',
    color: 'text-purple-500',
    items: [
      'Laundry chemicals for commercial laundries & dry cleaners',
      'Laundry machines supplier / support for laundry machines and dosing systems',
    ],
  },
]

const stats = [
  { value: '500+', label: 'Clients Served', icon: ShieldCheck },
  // { value: '20+', label: 'Years Experience', icon: Award },
  {value:'24/7',label:'support Availability',icon:Headphones},
  { value: '100%', label: 'Quality Guaranteed', icon: CheckCircle2 },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function SolutionsLanding() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section ref={targetRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-background to-background" />
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary font-semibold text-sm tracking-wide">
              Authorized Distributor · Chhattisgarh
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 mt-18 leading-tight"
          >
            Chemical Solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Every Sector
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Comprehensive industrial, healthcare, and commercial chemical solutions tailored for Chhattisgarh
            backed by certified brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#solutions"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25"
            >
              Explore Solutions
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-primary/5 transition-all hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border/50"
          >
            {stats.map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <section id="solutions" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Chemical Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our specialized chemical programs designed for diverse industry needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon
              return (
                <motion.div
                  key={sol.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider text-white`}>
                        {sol.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className={`w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30`}>
                        <Icon className={`w-6 h-6 ${sol.color}`} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl font-black text-primary/30">{sol.number}</span>
                      <h3 className="text-xl font-bold text-foreground">{sol.title}</h3>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {sol.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" />
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Chemical Partner
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As authorized distributors of Chemtex and Indokem, we bring decades of industry expertise 
                and premium chemical solutions to businesses across Chhattisgarh and beyond.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Authorized distributor of certified chemical brands',
                  'Tailored solutions for specific industry requirements',
                  'Expert technical support and consultation',
                  'Timely delivery and reliable supply chain'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative bg-card rounded-2xl p-6 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-xs text-muted-foreground">Happy Clients</div>
                  </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-xs text-muted-foreground">Industrial Segments</div>
              </div>

              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-xs text-muted-foreground">Premium Brand Partnerships</div>
              </div>
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl"
          >
            <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center mb-6 mx-auto">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Need a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Custom Solution</span>?
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Can't find what you're looking for? Talk to our chemical experts for a tailored recommendation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}