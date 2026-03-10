'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

type ContactProps = {
  showHeading?: boolean
  /** When true, uses minimal white theme for contact page */
  variant?: 'default' | 'light'
}

export function Contact({ showHeading = true, variant = 'default' }: ContactProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const interestOptions = [
    'Industrial Chemicals',
    'Hospital Care',
    'Laundry Solutions',
    'Water Treatment',
    'Solar Maintenance',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 500))
      
      toast({
        title: 'Message Sent Successfully!',
        description: 'We will get back to you soon.',
      })
      
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        interest: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const isLight = variant === 'light'

  return (
    <section
      id="contact"
      className={`relative py-20 overflow-hidden ${isLight ? 'bg-white' : 'bg-gradient-to-b from-slate-950 via-slate-950/98 to-slate-900'}`}
    >
      {!isLight && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-52 -left-40 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
            animate={{ opacity: [0.25, 0.5, 0.25], y: [0, -25, 0] }}
            transition={{ duration: 16, repeat: Infinity }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isLight ? 'text-[#1a2744]' : 'text-white'}`}>Get in Touch</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isLight ? 'text-[#6b7280]' : 'text-slate-300'}`}>
              Request a quote or contact us for more information about our solutions
            </p>
            <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${isLight ? 'bg-[#1a2744]' : 'bg-gradient-to-r from-primary to-accent'}`} />
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className={`p-8 h-full rounded-xl transition-all duration-300 ${isLight ? 'bg-white border-[#e5e7eb] shadow-sm hover:shadow-md' : 'bg-white/10 border-white/10 backdrop-blur-xl hover:shadow-[0_20px_45px_rgba(15,23,42,0.6)] hover:-translate-y-2'}`}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${isLight ? 'bg-[#f0fdf4]' : 'bg-primary/15'} group-hover:opacity-90 transition-all`}>
                <Phone className={`w-8 h-8 ${isLight ? 'text-emerald-600' : 'text-primary'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isLight ? 'text-[#111827]' : 'text-white'}`}>Phone</h3>
              <p className={`text-lg font-medium mb-1 ${isLight ? 'text-[#111827]' : 'text-slate-200'}`}>
                <a href="tel:+91XXXXXXXXXX" className={isLight ? 'hover:text-[#1a2744] transition' : 'hover:text-primary transition'}>+91-XXXXXXXXXX</a>
              </p>
              <p className={`text-sm font-semibold uppercase tracking-wider ${isLight ? 'text-[#6b7280]' : 'text-primary'}`}>Available 24/7</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className={`p-8 h-full rounded-xl transition-all duration-300 ${isLight ? 'bg-white border-[#e5e7eb] shadow-sm hover:shadow-md' : 'bg-white/10 border-white/10 backdrop-blur-xl hover:shadow-[0_20px_45px_rgba(15,23,42,0.6)] hover:-translate-y-2'}`}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${isLight ? 'bg-[#fffbeb]' : 'bg-accent/15'} group-hover:opacity-90 transition-all`}>
                <Mail className={`w-8 h-8 ${isLight ? 'text-amber-600' : 'text-accent'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isLight ? 'text-[#111827]' : 'text-white'}`}>Email</h3>
              <p className={`text-lg font-medium mb-1 ${isLight ? 'text-[#111827]' : 'text-slate-200'}`}>
                <a href="mailto:info@shivsarvam.com" className={isLight ? 'hover:text-[#1a2744] transition' : 'hover:text-accent transition'}>info@shivsarvam.com</a>
              </p>
              <p className={`text-sm font-semibold uppercase tracking-wider ${isLight ? 'text-[#6b7280]' : 'text-accent'}`}>Response within 24 hours</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Card className={`p-8 h-full rounded-xl transition-all duration-300 ${isLight ? 'bg-white border-[#e5e7eb] shadow-sm hover:shadow-md' : 'bg-white/10 border-white/10 backdrop-blur-xl hover:shadow-[0_20px_45px_rgba(15,23,42,0.6)] hover:-translate-y-2'}`}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${isLight ? 'bg-[#f0fdf4]' : 'bg-emerald-500/15'} group-hover:opacity-90 transition-all`}>
                <MapPin className={`w-8 h-8 ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isLight ? 'text-[#111827]' : 'text-white'}`}>Location</h3>
              <p className={`text-lg font-medium mb-1 ${isLight ? 'text-[#111827]' : 'text-slate-200'}`}>Raipur, Chhattisgarh, India</p>
              <p className={`text-sm font-semibold uppercase tracking-wider ${isLight ? 'text-[#6b7280]' : 'text-emerald-400'}`}>Serving Chhattisgarh region</p>
            </Card>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Card className={`relative p-10 max-w-3xl mx-auto rounded-xl overflow-hidden ${isLight ? 'bg-white border-[#e5e7eb] shadow-sm' : 'shadow-[0_30px_80px_rgba(15,23,42,0.9)] border-white/10 bg-slate-950/70 backdrop-blur-2xl'}`}>
            {!isLight && (
              <motion.div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
            )}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className={`text-sm font-medium ${isLight ? 'text-[#374151]' : 'text-slate-100'}`}>Full Name *</Label>
                  <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className={isLight ? 'h-12 bg-white text-[#111827] placeholder:text-[#9ca3af] border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744]' : 'h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary rounded-xl'} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="company" className={`text-sm font-medium ${isLight ? 'text-[#374151]' : 'text-slate-100'}`}>Company Name *</Label>
                  <Input id="company" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} required className={isLight ? 'h-12 bg-white text-[#111827] placeholder:text-[#9ca3af] border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744]' : 'h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary rounded-xl'} />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="interest" className={`text-sm font-medium ${isLight ? 'text-[#374151]' : 'text-slate-100'}`}>I&apos;m interested in: *</Label>
                <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required className={isLight ? 'w-full h-12 px-4 rounded-lg bg-white text-[#111827] border border-[#d1d5db] focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744]' : 'w-full h-12 px-4 rounded-xl bg-white/80 text-slate-900 border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary'}>
                  <option value="">Select an option</option>
                  {interestOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className={`text-sm font-medium ${isLight ? 'text-[#374151]' : 'text-slate-100'}`}>Phone *</Label>
                  <Input id="phone" name="phone" placeholder="+91-XXXXXXXXXX" value={formData.phone} onChange={handleChange} required className={isLight ? 'h-12 bg-white text-[#111827] placeholder:text-[#9ca3af] border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744]' : 'h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary rounded-xl'} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className={`text-sm font-medium ${isLight ? 'text-[#374151]' : 'text-slate-100'}`}>Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className={isLight ? 'h-12 bg-white text-[#111827] placeholder:text-[#9ca3af] border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744]' : 'h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary rounded-xl'} />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className={`text-sm font-medium ${isLight ? 'text-[#374151]' : 'text-slate-100'}`}>Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your requirements..." rows={5} value={formData.message} onChange={handleChange} className={isLight ? 'bg-white text-[#111827] placeholder:text-[#9ca3af] border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744] resize-none' : 'bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary rounded-2xl resize-none'} />
              </div>
              <Button type="submit" disabled={loading} className={`w-full h-14 text-lg font-bold rounded-xl transition-all ${isLight ? 'bg-[#1a2744] hover:bg-[#1a2744]/90 text-white' : 'shadow-xl shadow-primary/20'}`}>
                {loading ? (
                  <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                    Processing...
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
