'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Shivsarvam has been our go-to partner for industrial cleaning chemicals. Reliable supply and expert technical support make them stand out.',
    name: 'Rajesh Kumar',
    company: 'Power Plant Operations, Chhattisgarh'
  },
  {
    quote: 'Hospital-grade disinfectants from Shivsarvam meet our infection control standards. Quality and delivery have been consistent for years.',
    name: 'Dr. Priya Sharma',
    company: 'Regional Healthcare Facility'
  },
  {
    quote: 'From laundry chemicals to pool treatment, their range and service have helped us maintain high standards across our resort chain.',
    name: 'Amit Patel',
    company: 'Hospitality Group'
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Trusted by industries and institutions across the region.</p>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
