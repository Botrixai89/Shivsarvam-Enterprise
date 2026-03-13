'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

export function CtaSection() {
  return (
    <section className="py-20 bg-[#0F2A44]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-[15px] text-white/70 max-w-xl leading-relaxed">
              Contact us today for customized chemical solutions, bulk pricing, technical consultation, and fast delivery across Chhattisgarh.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <OpenQuoteButton
              className="bg-white hover:bg-slate-100 text-[#0F2A44] border-none font-bold text-[15px] rounded-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get a Quote
            </OpenQuoteButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold text-[15px] rounded-lg px-8 py-3 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
