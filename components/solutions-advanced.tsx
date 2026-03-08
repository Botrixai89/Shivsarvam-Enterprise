'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: "Industrial Hygiene",
    href: "/solutions/hygiene",
    image: "/images/hygiene-hero.png",
    accent: "bg-blue-600"
  },
  {
    title: "Hospital Care",
    href: "/solutions/hospital",
    image: "/images/hospital-hero.png",
    accent: "bg-red-600"
  },
  {
    title: "Laundry Systems",
    href: "/solutions/laundry",
    image: "/images/laundry-hero.png",
    accent: "bg-emerald-600"
  },
  {
    title: "Water Treatment",
    href: "/solutions/water",
    image: "/images/water-hero.png",
    accent: "bg-cyan-600"
  },
    {
    title: "Solar Maintenance",
    href: "/solutions/solar",
    image: "/images/solar-hero.png",
    accent: "bg-yellow-600"
  }
]

export function SolutionsAdvanced() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">World-Class Chemical Systems</h2>
            <p className="text-lg text-slate-600">
              Leveraging 19 years of field expertise to deliver specialized chemical applications that optimize industrial performance and public safety.
            </p>
          </div>
          <Link href="/solutions" className="flex items-center gap-2 font-bold text-primary group">
            All Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={sol.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl"
              >
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-500 group-hover:-translate-y-4">
                  <motion.div 
                    initial={{ width: "32px" }}
                    whileHover={{ width: "64px" }}
                    className={`h-1 mb-6 rounded-full ${sol.accent} transition-all duration-500`} 
                  />
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors duration-300">{sol.title}</h3>
                  <div className="flex items-center gap-3 text-white/70 text-sm font-bold uppercase tracking-widest">
                    <span>View More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
