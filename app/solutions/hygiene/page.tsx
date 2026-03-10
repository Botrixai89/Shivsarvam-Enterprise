import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ChevronLeft, Download } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

const products = [
  {
    name: "HSC-C2 (Hard Surface Cleaner)",
    tagline: "Powerful grime and grease removal",
    description: "A meticulously formulated chemical for deep cleaning and sanitization of all hard surfaces.",
    features: ["Powerful formula", "Sparkling finish", "Lemon scented", "Professional grade"]
  },
  {
    name: "AF-C5 (Air Freshener)",
    tagline: "Welcoming Floral Ambiance",
    description: "Infuse your space with the refreshing scent of blooming flowers while eliminating odors.",
    features: ["Long-lasting fragrance", "Floral scent", "Non-staining", "Eco-friendly"]
  },
  {
    name: "GC-C3 (Glass Cleaner)",
    tagline: "Crystal Clear Surfaces",
    description: "Streak-free solution that effortlessly removes dirt, smudges, and fingerprints.",
    features: ["Ammonia-free", "Fast drying", "Streak-free", "Highly concentrated"]
  },
  {
    name: "Soft-Shield Personal Care",
    tagline: "Gentle and effective hand hygiene",
    description: "A series of high-quality gentle washes designed for different professional environments.",
    features: ["Rose & Lemon variants", "Food & Pharma safe", "pH balanced", "Moisturizing formula"]
  }
]

export default function HygieneSolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[65vh] flex flex-col pt-28">
        <Image
          src="/images/hygiene-hero.png"
          alt="Hygiene Solutions"
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
              Cleaning & Hygiene Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Professional chemicals for maintenance, cleaning, and sanitization across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Segment overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">
            Industrial Segment
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Utility chemicals for boilers, cooling towers, chillers and RO systems.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Oil &amp; gas industry process and protection chemicals.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Solar panel cleaning and maintenance chemicals for plants.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Products in This Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 border-l-4 border-primary pl-4">Products in This Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-primary font-semibold mb-4 italic">{product.tagline}</p>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <OpenQuoteButton className="w-full rounded-xl bg-[#1a2744] hover:bg-[#1a2744]/90 text-white">
                    Request Quote
                  </OpenQuoteButton>
                </div>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Cleaning &amp; Hygiene</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Regular and premium cleaning &amp; hygiene chemicals for all sectors.</p>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/pdfs/CLEANING & HYGIENE CHEMICALS (Regular Products Catalogue).pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Cleaning &amp; Hygiene Chemicals – Catalogue
                    </a>
                  </li>
                  <li>
                    <a href="/pdfs/Chemtex Cleaning & Hygiene Chemicals_Brochure-1.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      Chemtex Cleaning &amp; Hygiene Brochure
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
