import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image
          src="/images/hospital-hero.png"
          alt="Hospital Disinfection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hospital Grade Disinfection</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Medical-grade solutions for the highest standards of safety and hygiene in healthcare.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">{cat.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-primary transition-colors duration-300">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-20 bg-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Expert Distribution in Chhattisgarh</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We distribute FDA approved, hospital-grade chemicals to medical institutions across the region.
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
