'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export function Brands() {
  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 italic">Our Partner Brands</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Authorized distributor of premium, trusted global leaders in industrial and clinical chemical solutions.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Chemtex */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-t-8 border-t-primary bg-white/50 backdrop-blur-sm group hover:-translate-y-2 h-full">
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-48 h-20 relative mx-auto mb-6"
                >
                  <Image
                    src="/images/chemtex.png"
                    alt="Chemtex Specialty"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">Chemtex Specialty</h3>
              </div>
              <p className="text-slate-600 text-lg mb-6 italic font-medium leading-relaxed">
                "Your global partner for every industrial chemical need."
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Authorized distributor of Chemtex's massive portfolio covering Thermal Power, Water Treatment, Food & Pharma, Hospitality, and more.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['All Industry Solutions', 'ISO Certified', 'MSDS Compliance'].map((badge) => (
                  <Badge key={badge} variant="secondary" className="bg-primary/5 text-primary border-primary/10 px-4 py-1 font-bold uppercase tracking-wider text-[10px]">
                    {badge}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Indokem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-t-8 border-t-accent bg-white/50 backdrop-blur-sm group hover:-translate-y-2 h-full">
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-48 h-20 relative mx-auto mb-6"
                >
                  <Image
                    src="/images/indokem.png"
                    alt="Indokem Limited"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-accent transition-colors duration-300">Indokem Limited</h3>
              </div>
              <p className="text-slate-600 text-lg mb-6 italic font-medium leading-relaxed">
                "Specialized care for textiles and laundry."
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Exclusive range of high-performance chemicals dedicated solely to professional clothing washing, laundry machines, and textile care.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Laundry Specialist', 'Textile Care', 'Premium Washing'].map((badge) => (
                  <Badge key={badge} variant="secondary" className="bg-accent/5 text-accent border-accent/10 px-4 py-1 font-bold uppercase tracking-wider text-[10px]">
                    {badge}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Brand Commitment */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center shadow-xl shadow-primary/5"
        >
          <h3 className="text-3xl font-bold text-primary mb-4 tracking-tight">Official Regional Partnership</h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            As authorized distributor for Chhattisgarh region, we guarantee 100% authentic products, proper handling, technical support, and full warranty coverage on all items supplied through our company.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
