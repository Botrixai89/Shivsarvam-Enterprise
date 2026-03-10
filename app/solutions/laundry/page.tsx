import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Settings, Droplets, Zap, ChevronLeft, Download } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

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
      <section className="relative min-h-[500px] h-[65vh] flex flex-col pt-28">
        <Image
          src="/images/laundry-hero.png"
          alt="Laundry Systems"
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
              Commercial Laundry Systems
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Professional chemicals and fabric care solutions for commercial and institutional
              laundries.
            </p>
          </div>
        </div>
      </section>

      {/* Laundry Solutions overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">
            Laundry Solutions
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <li className="flex items-start gap-3">
              <Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Laundry chemicals for commercial laundries and dry cleaners.</span>
            </li>
            <li className="flex items-start gap-3">
              <Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Support for laundry machines and dosing systems.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 border-l-4 border-primary pl-4">Products in This Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {systems.map((system, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <system.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{system.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{system.desc}</p>
                <OpenQuoteButton className="mt-auto w-full rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white">
                  Request Quote
                </OpenQuoteButton>
              </div>
            ))}
          </div>

          {/* Download Brochures — same UI as /solutions */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 border-l-4 border-primary pl-4">Download Brochures</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">Product catalogues and technical information for this segment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Laundry Solutions</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Indokem laundry chemicals for commercial laundries and dry cleaners.</p>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/pdfs/Indokem Limited Laundry Corporate Brochure.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Indokem Laundry Corporate Brochure
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Strip — text only to avoid repeating hero image */}
          <div className="bg-white rounded-xl p-10 md:p-12 shadow-sm border border-slate-200 max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Indokem Authorized
            </span>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 leading-tight">
              Expert Solutions for Textiles
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              As an authorized distributor for Indokem Limited, we provide a complete range of
              chemicals designed for hospitality, industrial, and healthcare laundry environments.
              Our products deliver superior wetting, detergency, and soil removal.
            </p>
            <ul className="space-y-4">
              {['Powder & Liquid Detergents', 'Liquid Range for Auto Dosing', 'Hospital Laundry Specialties'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <OpenQuoteButton className="mt-8 rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white">
              Request Quote for This Solution
            </OpenQuoteButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
