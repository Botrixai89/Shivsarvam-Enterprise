import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const solutionCategories = [
  {
    title: "Industrial & Hygiene",
    href: "/solutions/hygiene",
    image: "/images/hygiene-hero.png",
    desc: "Professional cleaning & maintenance chemicals for every industrial and commercial sector."
  },
  {
    title: "Hospital Care",
    href: "/solutions/hospital",
    image: "/images/hospital-hero.png",
    desc: "FDA approved medical-grade disinfection solutions for healthcare institutions."
  },
  {
    title: "Laundry Systems",
    href: "/solutions/laundry",
    image: "/images/laundry-hero.png",
    desc: "Advanced fabric care and industrial washing chemicals for hospitality and hospitals."
  },
  {
    title: "Water Treatment",
    href: "/solutions/water",
    image: "/images/water-hero.png",
    desc: "Performance chemicals for swimming pool maintenance and water purification."
  },
  {
    title: "Solar Maintenance",
    href: "/solutions/solar",
    image: "/images/solar-hero.png",
    desc: "Maximizing energy efficiency with specialized panel cleaning solutions."
  }
]

export default function SolutionsLanding() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Solutions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive chemical and hygiene solutions tailored for industrial, healthcare, and commercial sectors across Chhattisgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((cat, idx) => (
              <Link 
                key={idx} 
                href={cat.href}
                className="group relative h-[450px] overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                  <p className="text-slate-200 text-sm mb-6 line-clamp-2">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    View Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
