import { Slide, SlideItem } from '../Slide'

const examples = [
  'Ramps next to stairs',
  'Clear signs and directions',
  'Doors that are easy to open',
  'Good lighting and readable labels',
  'These details make life easier for many people',
]

export function Slide6WhyItMatters() {
  return (
    <Slide
      title="Accessibility Is All Around Us"
      imageUrl="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Accessible public space with ramp and clear signage"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {examples.map((line) => (
          <SlideItem key={line}>
            <div className="rounded-2xl border border-cyan-300/25 bg-slate-900/70 px-5 py-4 text-lg text-white shadow-card md:text-xl">
              {line}
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
