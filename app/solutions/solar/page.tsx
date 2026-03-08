import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Sun, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  { title: "Increased Electrical Output", desc: "Cleaner panels can maintain or restore solar efficiency by up to 30%.", icon: Battery },
  { title: "Prevention of Mineral Build-up", desc: "Specialized chemicals prevent scale and deposits that block sunlight.", icon: Sun },
  { title: "Enhanced Performance", desc: "Regular use helps maintain optimal performance and longevity of panels.", icon: Gauge }
]

export default function SolarMaintenance() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image
          src="/images/solar-hero.png"
          alt="Solar Maintenance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Solar Panel Maintenance</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Maximize your energy efficiency with specialized neutral pH panel cleaning solutions.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Efficiency First</span>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Maximize ROI of Your Solar Installation</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Solar panels can lose 15% to 25% efficiency due to dirt, dust, and residues. 
                Traditional water-only cleaning often falls short, especially with mineral deposits 
                from hard water. Our Detpol SPC range provides neutral pH, non-corrosive cleaning 
                that ensures maximum power generation.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Detpol SPC</h4>
                    <p className="text-sm text-slate-500">Neutral pH solution for optimal cleaning of PV panels.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Battery className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Detpol SPC 2</h4>
                    <p className="text-sm text-slate-500">Heavy-duty liquid & gel for carbonaceous and cement deposits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/solar-hero.png"
                alt="Solar Panels"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
