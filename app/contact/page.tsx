'use client'

import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Building2, ShieldCheck, Award, Headphones } from 'lucide-react'

const WHATSAPP_NUMBER = '918412909297'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Shivsarvam%20Enterprises`

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['C-6','Sector 3,','Jagriti Nagar, Devendra Nagar','Raipur, Chhattisgarh', 'India - 492009'],
    action: null
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 84129 09297'],
    action: 'tel:+918412909297'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@shivsarvam.com', 'sales@shivsarvam.com'],
    action: 'mailto:info@shivsarvam.com'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Sat: 11:00 AM - 6:00 PM', 'Sunday: Closed'],
    action: null
  }
]

const TRUST_FEATURES = [
  {
    icon: ShieldCheck,
    title: 'ISO Certified',
    description: 'Quality assured products'
  },
  // {
  //   icon: Award,
  //   title: '20+ Years',
  //   description: 'Industry experience'
  // },
  {
    icon: Headphones,
    title: '24/7',
    description:'Support Availibility'
  },
  {
    icon: Building2,
    title: '500+ Clients',
    description: 'Across India'
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-secondary/10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to elevate your operations with premium chemical solutions? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CONTACT_INFO.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                  {item.action && (
                    <Link
                      href={item.action}
                      className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all"
                    >
                      Get in touch
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* <Contact showHeading={false} variant="light" /> */}

      <section className="py-20 px-4 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <MessageCircle className="w-4 h-4" />
                Quick Response
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Instant Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get immediate assistance on WhatsApp. Our team typically responds within 30 minutes during business hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg transition-all hover:scale-105"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </Link>
                <Link
                  href="tel:+918412909297"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-card text-foreground font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Link>
              </div>
              <div className="flex gap-6 pt-6 border-t border-border">
                {TRUST_FEATURES.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{feature.title}</p>
                        <p className="text-muted-foreground text-xs">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-xl">
                <div className="bg-primary/5 px-6 py-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">Our Location</h3>
                  <p className="text-sm text-muted-foreground">Raipur, Chhattisgarh, India</p>
                </div>
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Shivsarvam Enterprises Location - Raipur, Chhattisgarh"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118987.14267799263!2d81.48779339726562!3d21.257679900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd345913f6ff%3A0x113121e85a4d92f9!2sShivsarvam%20Enterprises!5e0!3m2!1sen!2sin!4v1774940207266!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}