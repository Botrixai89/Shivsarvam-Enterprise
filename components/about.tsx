'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CheckCircle, Target, Eye } from 'lucide-react'

export function About() {
  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Authorized Distributor',
      description: 'Official distributor for Chemtex & Indochem in Chhattisgarh region'
    },
    {
      icon: Target,
      title: 'High Quality Products',
      description: 'Premium chemical solutions meeting international standards'
    },
    {
      icon: CheckCircle,
      title: 'Technical Support',
      description: 'Expert guidance and technical support for all applications'
    },
    {
      icon: CheckCircle,
      title: 'Bulk Supply',
      description: 'Reliable bulk supply capability for large-scale operations'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Shivsarvam Enterprises</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4 italic">“शिवसर्वम्-गुणवत्ता सर्वप्रथम “</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Shivsarvam Enterprises is a trusted supplier and distributor of high-quality industrial and specialty chemicals. With over 19 years of extensive experience in industrial chemical applications, we continuously work towards delivering reliable and effective chemical solutions across multiple sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are the authorized distributors of certified chemicals from <strong>Chemtex Specialty Private Limited</strong> and <strong>Indokem Limited</strong> in several regions of Chhattisgarh and Maharashtra. Our focus is not only on supplying premium products but also on ensuring their safe usage through training and technical support.
            </p>
          </motion.div>

          {/* Core Segments Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <Card className="p-6 border-l-4 border-l-primary bg-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-bold text-slate-900 mb-4">Core Business Segments</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                {[
                  'Industrial & Power Plants',
                  'Hospitality & Swimming Pools',
                  'Hospitals & Healthcare Sector',
                  'Commercial Laundry & Textile care'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" /> {item}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-12 text-center"
          >
            Why Choose Us
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:rotate-[360deg] transition-all duration-700">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-700" />
                    </div>
                    <h4 className="font-bold text-foreground text-xl mb-3">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
