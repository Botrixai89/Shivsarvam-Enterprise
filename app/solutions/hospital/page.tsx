import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-bold tracking-wider uppercase mb-4">
              FDA Approved
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hospital Grade Disinfection
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Medical-grade solutions for the highest standards of safety and hygiene in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Expert Distribution in Chhattisgarh</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We distribute FDA approved, hospital-grade chemicals to medical institutions across
              the region with full technical support.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Expert Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
