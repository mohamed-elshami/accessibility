import { Slide, SlideItem } from '../Slide'

const points = [
  'Accessibility means making things usable for people with different needs and abilities.',
  'People do not all see, hear, move, or process information in the same way.',
  'Good design should include different users from the start.',
]

export function Slide3Insight() {
  return (
    <Slide
      title="What Does Accessibility Mean?"
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Infographic showing different types of user needs"
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
