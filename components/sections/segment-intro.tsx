import { SectionContainer } from './section-container'

type SegmentIntroProps = {
  title: string
  description: string
}

export function SegmentIntro({ title, description }: SegmentIntroProps) {
  return (
    <SectionContainer>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </SectionContainer>
  )
}

