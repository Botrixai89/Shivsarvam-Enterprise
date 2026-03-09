import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Settings, Droplets, Zap, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-bold tracking-wider uppercase mb-4">
              Indokem Range
            </span>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* System Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {systems.map((system, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <system.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{system.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{system.desc}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-12 overflow-hidden shadow-sm border border-slate-100">
            <div>
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
              <Button asChild className="mt-8">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
