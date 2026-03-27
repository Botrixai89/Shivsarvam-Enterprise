
'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuoteModal } from '@/components/quote-modal'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ChevronLeft, ShieldCheck, Sparkles, CheckCircle2, Leaf,
  Building2, FlaskConical, Stethoscope, HeartPulse,
  ArrowRight, Download, FileText, ExternalLink
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
    icon: ShieldCheck,
    title: 'Hospital-Grade Disinfection Chemicals',
    description: 'Hospital-grade disinfection chemicals for critical areas including OT, ICU and general ward environments.',
    features: ['Critical area disinfection', 'Surface & air disinfection', 'Broad-spectrum efficacy', 'Healthcare compliant'],
    downloadLinks: [
      { label: 'Hospital Disinfectants Brochure', href: '/pdfs/Hospital Disinfectants Brochure_modified.pdf', size: '2.4 MB' },
      { label: 'Hospital Solutions Portfolio', href: '/pdfs/Hospital- Brochure 12.09.2024-2.pdf', size: '3.1 MB' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Cleaning & Hygiene Solutions',
    description: 'Cleaning and hygiene chemicals tailored for healthcare workflows. Hard surface cleaners and hygiene solutions.',
    features: ['Hard surface cleaning', 'Glass & mirror care', 'Hygiene solutions', 'Clinical environment safe'],
    downloadLinks: [
      { label: 'Cleaning & Hygiene Catalogue', href: '/pdfs/CLEANING & HYGIENE CHEMICALS (Regular Products Catalogue).pdf', size: '1.8 MB' },
    ],
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Infection Control Assurance',
    description: 'Hospital-grade disinfectants destroy pathogens in OT, ICU and general wards.',
  },
  {
    icon: CheckCircle2,
    title: 'Regulatory Compliance',
    description: 'Products meet healthcare standards and infection control protocols.',
  },
  {
    icon: Leaf,
    title: 'Staff & Patient Safety',
    description: 'Formulations effective against pathogens while safe for regular staff use.',
  },
]

const applications = [
  { icon: Building2, label: 'Hospitals' },
  { icon: Stethoscope, label: 'Clinics & Nursing Homes' },
  { icon: FlaskConical, label: 'Diagnostic Labs' },
  { icon: HeartPulse, label: 'OT / ICU Areas' },
  { icon: ShieldCheck, label: 'Pharmaceutical Units' },
  { icon: Sparkles, label: 'Healthcare Facilities' },
]

export default function HospitalSolutions() {
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
        <Image 
          src="/images/Hostpital.png" 
          alt="Hospital Grade Disinfection" 
          fill 
          priority 
          className="object-cover"
        />
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
                <HeartPulse className="w-4 h-4" />
                Healthcare Excellence
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Hospital Segment</h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Medical-grade disinfection and cleaning &amp; hygiene chemicals for the highest standards of safety in healthcare environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Hospital Segment</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our hospital chemical solutions cover hospital-grade disinfection chemicals for critical areas alongside
              comprehensive cleaning and hygiene solutions tailored for healthcare workflows.
            </p>
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Products in This Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div key={product.title} variants={fadeInUp} className="group">
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/5 rounded-md text-xs text-primary">{feature}</span>
                      ))}
                    </div>
                    
                    {product.downloadLinks && product.downloadLinks.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          Resources
                        </p>
                        <div className="space-y-2">
                          {product.downloadLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.href}
                              download
                              className="flex items-center justify-between group/link p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all"
                            >
                              <div className="flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5 text-primary" />
                                <span className="text-xs text-foreground hover:text-primary transition-colors">
                                  {link.label}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-muted-foreground">{link.size}</span>
                                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/link:text-primary transition-colors" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <button
                        onClick={() => openQuoteModal(product.title)}
                        className="text-primary text-sm font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all group"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} variants={fadeInUp} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">Applications</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Trusted by healthcare facilities requiring hospital-grade hygiene and infection control.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {applications.map((app, idx) => (
              <div key={app.label} className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-md transition-all hover:-translate-y-1">
                <app.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">{app.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Hospital-Grade Disinfection Solutions?</h2>
          <p className="text-muted-foreground mb-8">Talk to our experts to select the right infection-control and hygiene chemicals for your healthcare facility.</p>
          <button
            onClick={() => openQuoteModal('Hospital Segment Solutions')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25"
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