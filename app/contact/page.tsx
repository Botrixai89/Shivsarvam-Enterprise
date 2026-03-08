import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
