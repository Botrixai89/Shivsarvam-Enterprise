'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Send } from 'lucide-react'

type QuoteModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [thankYouOpen, setThankYouOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  })

  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || ''

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const normalizePhoneDigits = (value: string) => value.replace(/[^\d]/g, '')

  const handleQuoteOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen)
    if (!nextOpen) setThankYouOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      toast({ title: 'Name is required', description: 'Please enter your name.', variant: 'destructive' })
      return
    }
    if (!formData.company.trim()) {
      toast({ title: 'Company is required', description: 'Please enter your company name.', variant: 'destructive' })
      return
    }
    if (!formData.phone.trim() || normalizePhoneDigits(formData.phone).length < 10) {
      toast({ title: 'Phone is required', description: 'Please enter a valid phone number.', variant: 'destructive' })
      return
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      toast({ title: 'Email is required', description: 'Please enter a valid email address.', variant: 'destructive' })
      return
    }
    if (!formData.message.trim()) {
      toast({ title: 'Message is required', description: 'Please tell us about your requirements.', variant: 'destructive' })
      return
    }

    if (!APPS_SCRIPT_URL) {
      toast({
        title: 'Submission not configured',
        description: 'Google Apps Script endpoint is missing. Set NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL.',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    try {
      const payloadTimestamp = new Date().toISOString()
      const params = new URLSearchParams({
        name: formData.name.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: payloadTimestamp,
      })

      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: params.toString(),
      })

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`)

      // Close current form modal and show the thank you popup.
      setFormData({ name: '', company: '', phone: '', email: '', message: '' })
      onOpenChange(false)
      setThankYouOpen(true)
    } catch {
      toast({
        title: 'Error submitting request',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleQuoteOpenChange}>
      <DialogContent className="sm:max-w-2xl rounded-3xl gap-6 border border-slate-700/80 bg-slate-950/95 text-slate-100 p-8 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold tracking-tight text-slate-100">Get a Quote</DialogTitle>
          <DialogDescription className="text-lg text-slate-300">
            Share your details and we&apos;ll get back with a tailored quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-name" className="text-base text-slate-100">Name *</Label>
              <Input
                id="quote-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="h-12 rounded-2xl border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus-visible:border-sky-500 focus-visible:ring-sky-500/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-company" className="text-base text-slate-100">Company *</Label>
              <Input
                id="quote-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                required
                className="h-12 rounded-2xl border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus-visible:border-sky-500 focus-visible:ring-sky-500/30"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-phone" className="text-base text-slate-100">Phone *</Label>
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 84129 09297"
                required
                className="h-12 rounded-2xl border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus-visible:border-sky-500 focus-visible:ring-sky-500/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-email" className="text-base text-slate-100">Email *</Label>
              <Input
                id="quote-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="h-12 rounded-2xl border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus-visible:border-sky-500 focus-visible:ring-sky-500/30"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-message" className="text-base text-slate-100">Message *</Label>
            <Textarea
              id="quote-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={3}
              required
              className="rounded-2xl resize-none border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-400 focus-visible:border-sky-500 focus-visible:ring-sky-500/30"
            />
          </div>
          <DialogFooter className="gap-3 sm:gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleQuoteOpenChange(false)}
              className="rounded-2xl border-slate-600 bg-transparent text-slate-100 hover:bg-slate-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-sky-500 px-6 text-slate-950 font-semibold hover:bg-sky-400 disabled:bg-sky-500/60"
            >
              {loading ? 'Sending...' : (
                <>
                  <Send className="w-4 h-4 mr-2" />
              Request Quote
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      </Dialog>

      <Dialog open={thankYouOpen} onOpenChange={setThankYouOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl border border-slate-700/80 bg-slate-950/95 text-slate-100 shadow-xl animate-fadeIn">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-slate-100">Thank You!</DialogTitle>
          </DialogHeader>

          <div className="text-slate-300 text-base">
            Your request has been submitted successfully. Our team will contact you shortly.
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-2">
            <Button
              type="button"
              onClick={() => setThankYouOpen(false)}
              className="w-full rounded-xl bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
