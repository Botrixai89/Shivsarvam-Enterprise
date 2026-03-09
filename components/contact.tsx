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
}

export function Contact({ showHeading = true }: ContactProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-950/98 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Request a quote or contact us for more information about our solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 h-full bg-white/10 border-white/10 backdrop-blur-xl hover:shadow-[0_20px_45px_rgba(15,23,42,0.6)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-lg text-slate-200 font-medium mb-1">
                <a href="tel:+919XXX" className="hover:text-primary transition">
                  +91-9XXX-XXX-XXX
                </a>
              </p>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider">Available 24/7</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-white/10 border-white/10 backdrop-blur-xl hover:shadow-[0_20px_45px_rgba(15,23,42,0.6)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Mail className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-lg text-slate-200 font-medium mb-1">
                <a href="mailto:info@shivsarvam.com" className="hover:text-accent transition">
                  info@shivsarvam.com
                </a>
              </p>
              <p className="text-sm text-accent font-semibold uppercase tracking-wider">Response within 24 hours</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 h-full bg-white/10 border-white/10 backdrop-blur-xl hover:shadow-[0_20px_45px_rgba(15,23,42,0.6)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-emerald-500/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-500">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-8 h-8 text-emerald-500 group-hover:text-white transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Location</h3>
              <p className="text-lg text-slate-200 font-medium mb-1">Chhattisgarh, India</p>
              <p className="text-sm text-emerald-400 font-semibold uppercase tracking-wider">
                Serving Chhattisgarh region
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative p-10 max-w-3xl mx-auto shadow-[0_30px_80px_rgba(15,23,42,0.9)] border-white/10 bg-slate-950/70 backdrop-blur-2xl overflow-hidden">
            {/* Animated top border shimmer */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-bold text-slate-100">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="company" className="text-sm font-bold text-slate-100">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-bold text-slate-100">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+91-XXXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-bold text-slate-100">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-bold text-slate-100">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/80 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 rounded-2xl resize-none"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" disabled={loading} className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 rounded-xl transition-all duration-300">
                {loading ? (
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }} 
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="flex items-center"
                  >
                    Processing...
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Card>
      </motion.div>
      </div>
    </section>
  )
}
