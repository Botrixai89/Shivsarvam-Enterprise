// components/quote-modal.tsx
'use client'

import { useState, useEffect } from 'react'
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
import { Send, Sparkles, CheckCircle, X } from 'lucide-react'

type QuoteModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  productName?: string
}

export function QuoteModal({ open, onOpenChange, productName }: QuoteModalProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [thankYouOpen, setThankYouOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: productName || '',
    message: '',
  })

  useEffect(() => {
    if (productName) {
      setFormData(prev => ({ ...prev, product: productName }))
    }
  }, [productName])

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
        product: formData.product.trim(),
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

      setFormData({ name: '', company: '', phone: '', email: '', product: '', message: '' })
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
        <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[95vw] sm:max-w-lg md:max-w-2xl rounded-2xl border-border bg-background p-0 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          {/* Header with gradient - fixed */}
          <div className="sticky top-0 bg-gradient-to-r from-primary/5 to-secondary/5 px-4 sm:px-6 py-4 sm:py-5 border-b border-border z-10">
            <DialogHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <DialogTitle className="text-lg sm:text-2xl font-bold text-foreground">
                      Request a Quote
                    </DialogTitle>
                  </div>
                  {productName && (
                    <p className="text-xs sm:text-sm text-primary font-medium mt-1 break-words">
                      For: {productName}
                    </p>
                  )}
                  <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                    Fill in your details and our team will get back to you with a tailored quote.
                  </DialogDescription>
                </div>
                <button
                  onClick={() => handleQuoteOpenChange(false)}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                </button>
              </div>
            </DialogHeader>
          </div>

          {/* Scrollable Form Area */}
          <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4 sm:py-6">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="quote-name" className="text-xs sm:text-sm font-semibold text-foreground">
                    Full Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="quote-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-9 sm:h-11 text-sm rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="quote-company" className="text-xs sm:text-sm font-semibold text-foreground">
                    Company Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="quote-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    required
                    className="h-9 sm:h-11 text-sm rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="quote-phone" className="text-xs sm:text-sm font-semibold text-foreground">
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 84129 09297"
                    required
                    className="h-9 sm:h-11 text-sm rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="quote-email" className="text-xs sm:text-sm font-semibold text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="h-9 sm:h-11 text-sm rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="quote-product" className="text-xs sm:text-sm font-semibold text-foreground">
                  Product / Solution
                </Label>
                <Input
                  id="quote-product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Specific product or solution you're interested in"
                  className="h-9 sm:h-11 text-sm rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="quote-message" className="text-xs sm:text-sm font-semibold text-foreground">
                  Requirements / Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="quote-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your requirements, quantity, or any specific details..."
                  rows={3}
                  required
                  className="text-sm rounded-xl resize-none border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30 min-h-[80px] sm:min-h-[100px]"
                />
              </div>
            </form>
          </div>

          {/* Footer - fixed at bottom */}
          <div className="sticky bottom-0 bg-background border-t border-border px-4 sm:px-6 py-3 sm:py-4">
            <DialogFooter className="gap-2 sm:gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleQuoteOpenChange(false)}
                className="rounded-xl border-border bg-background text-foreground hover:bg-muted hover:text-foreground text-sm px-4 py-2 h-9 sm:h-10"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="rounded-xl bg-primary px-4 sm:px-6 text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm py-2 h-9 sm:h-10"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Request Quote
                  </>
                )}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {/* Thank You Modal - Mobile Responsive */}
      <Dialog open={thankYouOpen} onOpenChange={setThankYouOpen}>
        <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[90vw] sm:max-w-md rounded-2xl border-border bg-background p-0 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-4 sm:px-6 py-6 sm:py-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">Thank You!</DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-muted-foreground">
              Your request has been submitted successfully. Our team will contact you shortly.
            </DialogDescription>
          </div>
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
            <Button
              type="button"
              onClick={() => setThankYouOpen(false)}
              className="w-full rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 text-sm py-2 h-9 sm:h-10"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}