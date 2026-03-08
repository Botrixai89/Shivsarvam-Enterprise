import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Waves, Thermometer, CloudRain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const poolProducts = [
  { title: "Pool Disinfectants", desc: "Chlorine granules for ponds and swimming pools to eliminate microorganisms.", icon: Waves },
  { title: "Water Purification", desc: "Pool water clarifiers and algaestats for sparkling clean water.", icon: CloudRain },
  { title: "pH Regulation", desc: "pH builders and reducers for maintaining optimal water balance.", icon: Thermometer }
]

export default function WaterTreatment() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image
          src="/images/water-hero.png"
          alt="Water Treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Swimming Pool & Water Treatment</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            High-performance chemicals for sparkling clean and safe pool water maintenance.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {poolProducts.map((p, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-600 mb-6">{p.desc}</p>
                <Link href="/contact" className="text-primary font-bold hover:underline">Get Specs</Link>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center text-left">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Professional Solutions for Commercial Pools</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We distribute Chemtex's premium range of swimming pool chemicals designed for clubs, hotels, 
                fitness centers, and educational institutions. From algaestats to pH regulators, 
                our solutions ensure your water remains crystal clear and safe for all swimmers.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Inquire for Bulk Supply</Link>
              </Button>
            </div>
            <div className="md:w-1/2 relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/water-hero.png"
                alt="Clear Pool Water"
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
