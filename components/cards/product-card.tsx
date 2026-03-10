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
    <div className="h-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <OpenQuoteButton className="w-full px-5 py-3 rounded-lg bg-[#1a2744] text-white text-sm font-semibold hover:bg-[#1a2744]/90">
          {buttonText}
        </OpenQuoteButton>
        {downloadLinks && downloadLinks.length > 0 && (
          <div className="mt-3 space-y-1.5 pt-3 border-t border-slate-100">
            {downloadLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Download className="w-3 h-3 shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
