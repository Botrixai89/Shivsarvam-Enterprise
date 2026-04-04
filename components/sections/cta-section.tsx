import Link from 'next/link'
import { OpenQuoteButton } from '@/components/open-quote-button'
import { SectionContainer } from './section-container'

type CTASectionProps = {
  title: string
  description: string
  primaryText?: string
  secondaryText?: string
  secondaryHref?: string
}

export function CTASection({
  title,
  description,
  primaryText = 'Request a Quote',
  secondaryText = 'Contact Our Experts',
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <SectionContainer className="mt-20 mb-0">
      <div className="bg-primary/5 border border-primary/10 rounded-2xl px-6 py-12 sm:px-10 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <OpenQuoteButton className="px-5 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90">
            {primaryText}
          </OpenQuoteButton>
          <Link
            href={secondaryHref}
            className="px-5 py-3 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary/5"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </SectionContainer>
  )
}

