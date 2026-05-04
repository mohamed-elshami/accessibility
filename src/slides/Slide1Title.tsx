import { Slide, SlideItem } from '../Slide'

const points = [
  'Accessibility is about making things usable for as many people as possible.',
  'It applies to products, services, places, and digital experiences.',
  'It is not only a technical topic — it is a human topic.',
]

export function Slide1Title() {
  return (
    <Slide
      title="Accessibility: Making the World Easier for Everyone"
      subtitle="A simple introduction to accessible design in daily life, content, spaces, and technology"
      imageUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Diverse people using accessible spaces and tools"
      titleClassName="text-3xl md:text-5xl"
      subtitleClassName="text-base md:text-xl"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {points.map((point) => (
          <SlideItem key={point}>
            <div className="rounded-2xl border border-white/15 bg-slate-900/70 px-5 py-4 text-lg text-slate-100 shadow-card md:text-xl">
              {point}
            </div>
          </SlideItem>
        ))}
      </div>

    </Slide>
  )
}
