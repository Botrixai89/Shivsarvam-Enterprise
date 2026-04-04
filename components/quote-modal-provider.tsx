'use client'

import React, { createContext, useCallback, useContext, useState } from 'react'
import { QuoteModal } from '@/components/quote-modal'

type QuoteModalContextValue = {
  openQuoteModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null)

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext)
  if (!ctx) {
    throw new Error('useQuoteModal must be used within QuoteModalProvider')
  }
  return ctx
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openQuoteModal = useCallback(() => setOpen(true), [])

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}
      <QuoteModal open={open} onOpenChange={setOpen} />
    </QuoteModalContext.Provider>
  )
}
