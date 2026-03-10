import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Shivsarvam Enterprises',
  description: 'Get a quote or reach our team in Raipur, Chhattisgarh. Industrial chemicals, hospital care, laundry, water treatment & solar solutions.',
  openGraph: { title: 'Contact Us | Shivsarvam Enterprises', description: 'Get a quote or reach our team in Raipur, Chhattisgarh.' },
}

// TODO: Replace with real WhatsApp number (e.g. 917123456789)
const WHATSAPP_NUMBER = '91XXXXXXXXXX'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Shivsarvam%20Enterprises`

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — minimal white */}
      <section className="bg-[#f8fafc] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Request a quote or reach out for expert consultation on your chemical needs.
          </p>
        </div>
      </section>

      <Contact showHeading={false} variant="light" />

      {/* WhatsApp CTA — light green tint */}
      <section className="py-16 px-4 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#111827] mb-6">Prefer to chat? Reach us instantly on WhatsApp.</p>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg shadow-lg transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </Link>
        </div>
      </section>

      {/* Map — white / light gray */}
      <section className="bg-[#f9fafb] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm aspect-video max-h-[450px]">
            <iframe
              title="Raipur, Chhattisgarh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.750251963!2d81.6331!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23d383aad%3A0x779671eef04dcb2e!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
          </div>
          <p className="text-[#6b7280] text-center mt-4 text-sm">Raipur, Chhattisgarh, India</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
