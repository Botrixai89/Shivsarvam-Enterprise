import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Factory, Heart, Hotel, Shirt } from 'lucide-react'
import Link from 'next/link'

export function Solutions() {
  const solutions = [
    {
      id: 1,
      icon: Factory,
      title: 'Industrial Segment',
      color: 'from-primary to-blue-500',
      items: [
        'Utility Chemicals for Boilers, Cooling Towers, Chillers, RO Systems & Waste Water Management',
        'Oil & Gas Industry Chemicals',
        'Solar Panel Cleaning Chemicals'
      ]
    },
    {
      id: 2,
      icon: Heart,
      title: 'Hospital Segment',
      color: 'from-red-500 to-pink-500',
      items: [
        'Hospital-Grade Disinfection Chemicals',
        'Cleaning & Hygiene Solutions',
        'Infection Control Products'
      ]
    },
    {
      id: 3,
      icon: Hotel,
      title: 'Hotels & Resorts',
      color: 'from-amber-500 to-orange-500',
      items: [
        'Cleaning & Hygiene Chemicals',
        'Kitchen Care Chemical Solutions',
        'Water Park & Swimming Pool Cleaning Chemicals'
      ]
    },
    {
      id: 4,
      icon: Shirt,
      title: 'Laundry Solutions',
      color: 'from-emerald-500 to-teal-500',
      items: [
        'Laundry Chemicals for Commercial Laundries & Dry Cleaners',
        'Laundry Machines Supplier',
        'Stain Removal Solutions'
      ]
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" style={{ animation: 'fadeIn 0.8s ease-out' }}>Our Core Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ animation: 'fadeIn 0.8s ease-out 0.1s both' }}>
            Comprehensive chemical solutions across multiple industry segments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <Card
                key={solution.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-l-4 hover:-translate-y-2"
                style={{
                  borderLeftColor: solution.id === 1 ? '#1e40af' : solution.id === 2 ? '#ef4444' : solution.id === 3 ? '#f59e0b' : '#10b981',
                  animation: `slideUp 0.8s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Header with Icon */}
                <div className={`h-24 bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full group-hover:bg-primary/90" 
                    asChild
                  >
                    <Link href="#contact">Enquire Now</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
