type ApplicationCardProps = {
  icon: React.ElementType
  label: string
}

export function ApplicationCard({ icon: Icon, label }: ApplicationCardProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <span className="text-sm font-medium text-slate-800">{label}</span>
    </div>
  )
}

