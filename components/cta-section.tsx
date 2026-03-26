'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

const trustItems = [
  '100% Authorized Distributor',
  'MSDS Compliant Products',
  '500+ Satisfied Clients',
]

export function CtaSection() {
  return (
    <section className="relative py-14 overflow-hidden bg-foreground">
      <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-primary absolute top-0 left-0 right-0" />

      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/8 rounded-full border border-white/12 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Certified · Trusted · Delivered</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Ready to Get <span className="text-accent">Started?</span>
          </h2>

          <p className="text-white/55 text-[14px] max-w-xl mx-auto leading-relaxed mb-7">
            Get customized chemical solutions, bulk pricing, and expert technical consultation — fast delivery across Chhattisgarh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <OpenQuoteButton className="inline-flex items-center justify-center gap-2 btn-primary w-44 py-2.5 rounded-xl text-[14px] font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </OpenQuoteButton>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-44 py-2.5 rounded-xl text-[14px] font-semibold text-white/85 bg-white/8 border border-white/15 hover:bg-white/14 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[11px] text-white/30 font-medium">
                <span className="w-1 h-1 rounded-full bg-accent/50" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
