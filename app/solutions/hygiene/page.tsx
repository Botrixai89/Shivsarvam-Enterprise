import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-bold tracking-wider uppercase mb-4">
              Most Popular
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cleaning & Hygiene Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Professional chemicals for maintenance, cleaning, and sanitization across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
                  <Button asChild className="w-full">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bulk Supply Available</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              All products are available for bulk procurement with technical support included.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
