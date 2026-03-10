import { Download } from 'lucide-react'

type ResourceCardProps = {
  title: string
  description: string
  downloadLink: string
}

export function ResourceCard({ title, description, downloadLink }: ResourceCardProps) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
      </div>
      <a
        href={downloadLink}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
      >
        <Download className="w-4 h-4" />
        Download
      </a>
    </div>
  )
}

