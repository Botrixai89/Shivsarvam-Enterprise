'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Factory, Heart, Hotel, Shirt, Droplets, Zap } from 'lucide-react'

export function Industries() {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Heart,
      name: 'Hospitals',
      color: 'from-red-600 to-pink-500'
    },
    {
      icon: Hotel,
      name: 'Hotels & Resorts',
      color: 'from-amber-600 to-orange-500'
    },
    {
      icon: Shirt,
      name: 'Commercial Laundry',
      color: 'from-emerald-600 to-teal-500'
    },
    {
      icon: Droplets,
      name: 'Oil & Gas',
      color: 'from-slate-600 to-gray-500'
    },
    {
      icon: Zap,
      name: 'Water Treatment Plants',
      color: 'from-green-600 to-emerald-500'
    }
  ]

  return (
    <section id="industries" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-display italic">Industries We Serve</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Delivering specialized chemical solutions across diverse sectors with precision and clinical safety.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 group border-white/5 bg-slate-50/50 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl shadow-slate-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2">{industry.name}</h3>
                  <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
