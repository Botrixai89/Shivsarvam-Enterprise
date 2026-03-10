import { cn } from '@/lib/utils'

type SectionContainerProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn('mt-20 mb-20 px-4', className)}>
      <div className="max-w-6xl mx-auto sm:px-2 lg:px-0">{children}</div>
    </section>
  )
}

