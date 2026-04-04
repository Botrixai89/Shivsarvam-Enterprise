'use client'

import { forwardRef } from 'react'
import { useQuoteModal } from '@/components/quote-modal-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type OpenQuoteButtonProps = React.ComponentProps<typeof Button> & {
  children?: React.ReactNode
}

export const OpenQuoteButton = forwardRef<HTMLButtonElement, OpenQuoteButtonProps>(
  function OpenQuoteButton({ children = 'Get Quote', className, ...props }, ref) {
    const { openQuoteModal } = useQuoteModal()

    return (
      <Button
        ref={ref}
        type="button"
        onClick={openQuoteModal}
        className={cn(className)}
        {...props}
      >
        {children}
      </Button>
    )
  }
)
