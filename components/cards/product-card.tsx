import { CheckCircle2, Download } from 'lucide-react'
import { OpenQuoteButton } from '@/components/open-quote-button'

type DownloadLink = {
  label: string
  href: string
}

type ProductCardProps = {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  buttonText?: string
  downloadLinks?: DownloadLink[]
}

export function ProductCard({
  icon: Icon,
  title,
  description,
  features,
  buttonText = 'Request Quote',
  downloadLinks,
}: ProductCardProps) {
  return (
    <div className="h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">

      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5 shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Feature bullets */}
      {features.length > 0 && (
        <ul className="space-y-2 mt-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Spacer pushes button to bottom */}
      <div className="mt-auto pt-6">
        <OpenQuoteButton className="w-full px-5 py-3 rounded-lg bg-[#1a2744] text-white text-sm font-semibold hover:bg-[#1a2744]/90 transition-colors">
          {buttonText}
        </OpenQuoteButton>

        {/* Download links */}
        {downloadLinks && downloadLinks.length > 0 && (
          <div className="mt-2 space-y-1.5 pt-3 border-t border-slate-100">
            {downloadLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
