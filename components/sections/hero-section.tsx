import Image from 'next/image'

type HeroSectionProps = {
  title: string
  description: string
  backgroundImage?: string
}

export function HeroSection({ title, description, backgroundImage }: HeroSectionProps) {
  const hasImage = Boolean(backgroundImage)

  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex flex-col pt-28 overflow-hidden">
      {hasImage && (
        <>
          <Image
            src={backgroundImage as string}
            alt={title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        </>
      )}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-4 shrink-0">
        <div className="max-w-6xl mx-auto">
          {/* Space reserved for breadcrumb if needed */}
        </div>
      </div>
      <div className="flex-1" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 shrink-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

