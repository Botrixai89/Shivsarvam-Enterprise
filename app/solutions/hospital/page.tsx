import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, ChevronLeft, Download } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

const categories = [
  {
    title: "Air & Surface Disinfection",
    items: [
      { name: "Alstasan Silvox 150", desc: "Silver Hydrogen Peroxide based, FDA approved for critical areas like OT/ICU." },
      { name: "Alstasan LF 125", desc: "4th Gen QAC based high-efficacy disinfectant with refreshing scent." },
      { name: "Alstasan QC5 / QC7", desc: "Indoor use disinfectant and biocide for comprehensive protection." }
    ]
  },
  {
    title: "Hand Hygiene & Surgical Scrub",
    items: [
      { name: "Alstasan Handrub", desc: "Professional alcohol-based hand disinfectant for medical use." },
      { name: "Alstasan Mecerub", desc: "Ready-to-use skin antiseptic for pre-operative and general use." },
      { name: "Alstasan Handwash", desc: "Surgical scrub with superior antimicrobial protection." }
    ]
  }
]

export default function HospitalSolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section — flex column: breadcrumb top, title bottom */}
      <section className="relative min-h-[500px] h-[65vh] flex flex-col pt-28">
        <Image
          src="/images/hospital-hero.png"
          alt="Hospital Disinfection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

        {/* Breadcrumb — sits just below navbar */}
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

        {/* Spacer pushes hero text to the bottom */}
        <div className="flex-1" />

        {/* Hero Text — anchored at the bottom */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 shrink-0">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hospital Grade Disinfection
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Medical-grade solutions for the highest standards of safety and hygiene in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Segment overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">
            Hospital Segment
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Hospital‑grade disinfection systems for critical areas.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Cleaning and hygiene chemicals tailored for healthcare workflows.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Products in This Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 border-l-4 border-primary pl-4">Products in This Category</h2>
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                  >
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                    <OpenQuoteButton className="w-full rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white mt-auto">
                      Request Quote
                    </OpenQuoteButton>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Download Brochures — same UI as /solutions */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 border-l-4 border-primary pl-4">Download Brochures</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">Product catalogues and technical information for this segment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hospital Segment</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Hospital‑grade disinfectants and infection‑control chemicals.</p>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/pdfs/Hospital Disinfectants Brochure_modified.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Hospital Disinfectants Brochure
                    </a>
                  </li>
                  <li>
                    <a href="/pdfs/Hospital- Brochure 12.09.2024-2.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Hospital Solutions Portfolio
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
