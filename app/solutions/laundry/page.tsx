import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Settings, Droplets, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const systems = [
  {
    title: "Laundrex Detergent Range",
    desc: "Premium detergent powders and liquids for all types of industrial loads.",
    icon: Droplets
  },
  {
    title: "Specialized Additives",
    desc: "Bleaches, Neutra series, and high-quality fabric softeners for perfect results.",
    icon: Zap
  },
  {
    title: "Advanced Stain Spotters",
    desc: "Specialized removals for Ink, Grease, Rust, and Medical stains.",
    icon: Settings
  }
]

export default function LaundrySolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image
          src="/images/laundry-hero.png"
          alt="Laundry Systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Commercial Laundry Systems</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Professional chemicals and fabric care solutions for commercial and institutional laundries.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {systems.map((system, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <system.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{system.title}</h3>
                <p className="text-slate-600 mb-6">{system.desc}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-12 overflow-hidden shadow-sm">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Expert Solutions for Textiles</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As an authorized distributor for Indokem Limited, we provide a complete range of chemicals 
                designed for hospitality, industrial, and healthcare laundry environments. 
                Our products are developed to provide superior wetting, detergency, and soil removal.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Powder & Liquid Detergents
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Liquid Range for Auto Dosing
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Hospital Laundry Specialties
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
               <Image
                src="/images/laundry-hero.png"
                alt="Laundry Care"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
