import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Waves, Thermometer, CloudRain, ChevronLeft, Download } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Swimming Pool & Water Treatment
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              High-performance chemicals for sparkling clean and safe pool water maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Hotels & Resorts Segment overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">
            Hotels &amp; Resorts Segment
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-700">
            <li className="flex items-start gap-3">
              <Waves className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Cleaning and hygiene chemicals for guest areas and back‑of‑house.</span>
            </li>
            <li className="flex items-start gap-3">
              <Waves className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Kitchen care and food‑area compatible chemicals.</span>
            </li>
            <li className="flex items-start gap-3">
              <Waves className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Water park &amp; swimming pool cleaning and treatment programs.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 border-l-4 border-primary pl-4">Products in This Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {poolProducts.map((p, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-xl border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{p.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{p.desc}</p>
                <OpenQuoteButton className="w-full rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white mt-auto">
                  Request Quote
                </OpenQuoteButton>
              </div>
            ))}
          </div>

          {/* Download Brochures */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 border-l-4 border-primary pl-4">Download Brochures</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">Product catalogues and technical information for this segment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Swimming Pools &amp; Water</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Swimming pool care and water treatment programs.</p>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/pdfs/Swiming pool brochure_compressed.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Swimming Pool Chemicals Brochure
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Section — text only to avoid repeating hero image */}
          <div className="bg-white rounded-xl p-10 md:p-12 shadow-sm border border-slate-200 max-w-3xl">
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
            <OpenQuoteButton size="lg" className="rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white">
              Request Quote for This Solution
            </OpenQuoteButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
