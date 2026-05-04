import { Slide, SlideItem } from '../Slide'

const rules = [
  'Use simple language',
  'Organize information clearly',
  'Use clear headings',
  'Avoid overcrowded slides or pages',
  'Explain important visuals when needed',
]

export function Slide10Rules() {
  return (
    <Slide
      title="Make Content Easier to Understand"
      imageUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Clean content layout with readable text and clear headings"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {rules.map((rule) => (
          <SlideItem key={rule}>
            <div className="rounded-2xl border border-white/15 bg-slate-900/70 px-5 py-4 text-lg text-white shadow-card md:text-xl">
              {rule}
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
