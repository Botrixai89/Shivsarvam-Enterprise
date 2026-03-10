type BenefitCardProps = {
  icon: React.ElementType
  title: string
  description: string
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  )
}

