// app/solutions/water/page.tsx
'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuoteModal } from '@/components/quote-modal'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ChevronLeft, Droplets, ShieldCheck, Leaf, Building2,
  Hotel, Waves, TrendingDown, CheckCircle2, Sparkles, ChefHat,
  ArrowRight, UtensilsCrossed, Download, FileText, ExternalLink
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const products = [
  {
    icon: Sparkles,
    title: 'Cleaning & Hygiene Chemicals',
    description: 'Professional cleaning and hygiene chemicals designed for hotels, resorts and hospitality facilities to maintain high standards of cleanliness and sanitation.',
    features: ['Surface cleaning solutions', 'Floor cleaning chemicals', 'Bathroom sanitation', 'General hygiene maintenance'],
    downloadLinks: [
      { label: 'Cleaning & Hygiene Brochure', href: '/pdfs/Chemtex Cleaning & Hygiene Chemicals_Brochure-1.pdf', size: '2.1 MB' },
    ],
  },
  {
    icon: ChefHat,
    title: 'Kitchen Care Chemical Solutions',
    description: 'Specialized kitchen care chemicals designed for hotel and resort kitchens to ensure food safety, grease removal and hygienic food preparation areas.',
    features: ['Kitchen degreasers', 'Dishwashing chemicals', 'Food-safe surface cleaners', 'Kitchen hygiene maintenance'],
    downloadLinks: [],
  },
  {
    icon: Droplets,
    title: 'Water Park & Swimming Pool Cleaning Chemicals',
    description: 'Chemicals for water parks, kitchens, and hospitality ensuring hygiene, safety, sanitation, grease removal, balance optimal.',
    features: ['Pool disinfection', 'pH & water balance', 'Algae control', 'Water park maintenance'],
    downloadLinks: [
      { label: 'Swimming Pool Brochure', href: '/pdfs/Swiming pool brochure_compressed.pdf', size: '1.7 MB' },
    ],
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Safe & Hygienic Water',
    description: 'Maintain safe disinfection levels that protect swimmers from pathogens and waterborne illness.',
  },
  {
    icon: TrendingDown,
    title: 'Cost-Efficient Dosing',
    description: 'Highly concentrated formulations reduce chemical consumption and operational costs per litre of pool water.',
  },
  {
    icon: CheckCircle2,
    title: 'Equipment Longevity',
    description: 'Balanced water chemistry prevents corrosion, scaling and staining that damage pool surfaces and equipment.',
  },
]

const applications = [
  { icon: Waves, label: 'Swimming Pools' },
  { icon: Hotel, label: 'Water Parks' },
  { icon: Building2, label: 'Hotels & Resorts' },
  { icon: ShieldCheck, label: 'Sports Facilities' },
  { icon: Droplets, label: 'Apartment Complexes' },
  { icon: Leaf, label: 'Residential Pools' },
]

export default function WaterTreatment() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const openQuoteModal = (productName: string) => {
    setSelectedProduct(productName)
    setQuoteModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[500px] flex flex-col pt-28 overflow-hidden">
        <Image src="/images/Hotel and resort.png" alt="Swimming Pool & Water Treatment" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-4">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-primary/50 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="flex-1" />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <UtensilsCrossed className="w-4 h-4" />
                Hospitality Excellence
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">Hotels &amp; Resorts Segment</h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Chemicals for water parks, kitchens, and hospitality ensuring hygiene, safety, sanitation, grease removal, balance optimal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Hospitality &amp; Water Treatment</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Our hospitality solutions cover professional cleaning and hygiene chemicals, kitchen care chemical solutions,
              and water park &amp; swimming pool cleaning chemicals. Designed for hotels, resorts, restaurants and recreational
              facilities to maintain the highest standards of cleanliness, safety and guest satisfaction.
            </p>
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Products in This Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, idx) => (
              <motion.div key={product.title} variants={fadeInUp} className="group">
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-5 sm:p-6 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{product.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 rounded-md text-[10px] sm:text-xs text-primary">{feature}</span>
                      ))}
                    </div>
                    
                    {product.downloadLinks && product.downloadLinks.length > 0 && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                        <p className="text-[10px] sm:text-xs font-semibold text-foreground mb-1.5 sm:mb-2 flex items-center gap-1">
                          <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          Resources
                        </p>
                        <div className="space-y-1.5 sm:space-y-2">
                          {product.downloadLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.href}
                              download
                              className="flex items-center justify-between group/link p-1.5 sm:p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all"
                            >
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                                <span className="text-[10px] sm:text-xs text-foreground hover:text-primary transition-colors truncate max-w-[120px] sm:max-w-[180px]">
                                  {link.label}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                                <span className="text-[8px] sm:text-[10px] text-muted-foreground">{link.size}</span>
                                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground group-hover/link:text-primary transition-colors" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 sm:p-6 pt-0 sm:pt-0">
                    <button
                      onClick={() => openQuoteModal(product.title)}
                      className="text-primary text-xs sm:text-sm font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all group"
                    >
                      Request Quote
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} variants={fadeInUp} className="bg-card rounded-2xl p-5 sm:p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Applications</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl">
            Serving pools and water facilities across the hospitality, sports and residential sectors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {applications.map((app, idx) => (
              <div key={app.label} className="bg-card border border-border rounded-xl p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-1">
                <app.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1.5 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-foreground">{app.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">Need a Complete Pool Chemical Management Program?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-4">Share your pool specifications and we will recommend the right chemicals, dosing schedule and maintenance plan to keep your water safe and clear.</p>
          <button
            onClick={() => openQuoteModal('Pool Chemical Management')}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25 text-sm sm:text-base"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <QuoteModal
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        productName={selectedProduct}
      />

      <Footer />
    </main>
  )
}