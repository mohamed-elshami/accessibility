import { Slide, SlideItem } from '../Slide'

const points = [
  'Clear design reduces confusion.',
  'Simple steps save time.',
  'Readable content improves understanding.',
  'Better usability means less stress for users.',
]

export function Slide8BadVsGood() {
  return (
    <Slide
      title="Good Accessibility Creates Better Experiences"
      imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Comparison between a frustrating and a simple user experience"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {points.map((line) => (
          <SlideItem key={line}>
            <div className="rounded-2xl border border-white/15 bg-slate-900/70 px-5 py-4 text-lg text-slate-100 shadow-card md:text-xl">
              {line}
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
