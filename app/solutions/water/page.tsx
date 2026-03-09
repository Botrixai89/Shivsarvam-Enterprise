import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Waves, Thermometer, CloudRain, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const poolProducts = [
  {
    title: "Pool Disinfectants",
    desc: "Chlorine granules for ponds and swimming pools to eliminate microorganisms.",
    icon: Waves
  },
  {
    title: "Water Purification",
    desc: "Pool water clarifiers and algaestats for sparkling clean water.",
    icon: CloudRain
  },
  {
    title: "pH Regulation",
    desc: "pH builders and reducers for maintaining optimal water balance.",
    icon: Thermometer
  }
]

export default function WaterTreatment() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[65vh] flex flex-col pt-28">
        <Image
          src="/images/water-hero.png"
          alt="Water Treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

        {/* Breadcrumb */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-4 shrink-0">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
          </div>
        </div>

        <div className="flex-1" />

        {/* Hero Text */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 shrink-0">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-bold tracking-wider uppercase mb-4">
              Pool & Industrial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Swimming Pool & Water Treatment
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              High-performance chemicals for sparkling clean and safe pool water maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {poolProducts.map((p, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{p.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{p.desc}</p>
                <Link href="/contact" className="text-primary font-bold hover:underline text-sm">
                  Get Specs →
                </Link>
              </div>
            ))}
          </div>

          {/* Feature Section */}
          <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-12 items-center text-left">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Chemtex Authorized
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                Professional Solutions for Commercial Pools
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We distribute Chemtex&apos;s premium range of swimming pool chemicals designed for
                clubs, hotels, fitness centers, and educational institutions. From algaestats to pH
                regulators, our solutions ensure crystal clear, safe water for all swimmers.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Inquire for Bulk Supply</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl">
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
