import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Dark Hero Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Request a quote or reach out for expert consultation on your chemical needs.
          </p>
        </div>
      </section>

      <Contact showHeading={false} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
