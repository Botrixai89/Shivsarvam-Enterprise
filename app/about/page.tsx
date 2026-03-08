import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { About } from '@/components/about'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, ShieldCheck, History, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Authorized Distributor & Trusted Chemical Solutions Provider for over 19 Years.
          </p>
        </div>
      </section>

      {/* Detailed Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 border-l-4 border-primary pl-4">Company Overview</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Shivsarvam Enterprises is a trusted supplier and distributor of high-quality industrial and specialty chemicals. With over <strong>19 years of extensive experience</strong> in industrial chemical applications, we continuously work towards delivering reliable and effective chemical solutions across multiple sectors.
                </p>
                <p>
                  Our focus is not only on supplying premium products but also on ensuring their safe and efficient usage through proper guidance, demonstrations, and training.
                </p>
                <p>
                  We are the <strong>authorized distributors</strong> and suppliers of certified chemicals from <strong>Chemtex Specialty Private Limited</strong> and <strong>Indokem Limited</strong> in several regions of Chhattisgarh and Maharashtra.
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic">
                  “शिवसर्वम्-गुणवत्ता सर्वप्रथम “
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <Card className="p-8 flex flex-col items-center text-center">
                  <History className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-2xl">19+</h4>
                  <p className="text-sm text-slate-500">Years Excellence</p>
               </Card>
               <Card className="p-8 flex flex-col items-center text-center">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-2xl">Certified</h4>
                  <p className="text-sm text-slate-500">Solutions</p>
               </Card>
               <Card className="p-8 flex flex-col items-center text-center col-span-2">
                  <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold">Safety First</h4>
                  <p className="text-sm text-slate-500">Demo & Training Focused Supply</p>
               </Card>
            </div>
          </div>

          {/* Business segments */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Our Core Business Segments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "1. Industrial Segment",
                  items: ["Thermal Power Plants", "Cooling Tower & RO Plants", "DM/WTP/STP/ETP Systems", "Oil & Gas Process", "Solar Panel Maintenance"]
                },
                {
                  title: "2. Hospitality & Commercial",
                  items: ["Hotels & Resorts", "Commercial Complexes", "Kitchen Care", "Swimming Pools & Water Parks"]
                },
                {
                  title: "3. Hospitals & Healthcare",
                  items: ["Certified Disinfection Chemicals", "Infection Control Solutions", "MSDS Compliance", "Healthcare Hygiene"]
                },
                {
                  title: "4. Laundry Segment",
                  items: ["Large Commercial Laundries", "Local Dry Cleaners", "Laundry Machines", "Technical Training & Support"]
                }
              ].map((segment, sIdx) => (
                <Card key={sIdx} className="p-8 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-6 text-primary">{segment.title}</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {segment.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
