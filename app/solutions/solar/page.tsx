import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Sun, Battery, Gauge, ChevronLeft, Download } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

const benefits = [
  {
    title: "Increased Electrical Output",
    desc: "Cleaner panels can maintain or restore solar efficiency by up to 30%.",
    icon: Battery
  },
  {
    title: "Prevention of Mineral Build-up",
    desc: "Specialized chemicals prevent scale and deposits that block sunlight.",
    icon: Sun
  },
  {
    title: "Enhanced Performance",
    desc: "Regular use helps maintain optimal performance and longevity of panels.",
    icon: Gauge
  }
]

export default function SolarMaintenance() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[65vh] flex flex-col pt-28">
        <Image
          src="/images/solar-hero.png"
          alt="Solar Maintenance"
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
              Solar Panel Maintenance
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Maximize your energy efficiency with specialized neutral pH panel cleaning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 border-l-4 border-primary pl-4">Products in This Category</h2>
          {/* Main Feature — text and product cards only to avoid repeating hero image */}
          <div className="mb-24 max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Detpol SPC Range
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Maximize ROI of Your Solar Installation
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Solar panels can lose 15–25% efficiency due to dirt, dust, and residues. Traditional
              water-only cleaning often falls short, especially with mineral deposits from hard
              water. Our Detpol SPC range provides neutral pH, non-corrosive cleaning that ensures
              maximum power generation.
            </p>
            <div className="space-y-4">
              {[
                { name: "Detpol SPC", desc: "Neutral pH solution for optimal cleaning of PV panels." },
                { name: "Detpol SPC 2", desc: "Heavy-duty liquid & gel for carbonaceous and cement deposits." }
              ].map((product) => (
                <div
                  key={product.name}
                  className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-primary/30 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{product.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <OpenQuoteButton className="mt-8 rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white">
              Get a Quote
            </OpenQuoteButton>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-xl border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Download Brochures — same UI as /solutions */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 border-l-4 border-primary pl-4">Download Brochures</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">Product catalogues and technical information for this segment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Solar Panel Cleaning</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Neutral pH solar panel cleaning solutions.</p>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/pdfs/Brochure - Solar Panel Cleaning Chemical.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Solar Panel Cleaning Chemical
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
