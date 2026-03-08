import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image
          src="/images/hygiene-hero.png"
          alt="Hygiene Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cleaning & Hygiene Solutions</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Professional chemicals for maintenance, cleaning, and sanitization across all sectors.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-primary font-medium mb-4 italic">{product.tagline}</p>
                  <p className="text-slate-600 mb-6 flex-grow">{product.description}</p>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
