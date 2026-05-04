import { Slide, SlideItem } from '../Slide'

const points = [
  'Step-free entrances',
  'Clear and visible signs',
  'Enough space to move around',
  'Good lighting',
  'Accessible facilities make environments more welcoming',
]

export function Slide11Impact() {
  return (
    <Slide
      title="Accessibility in Places and Environments"
      imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Accessible building entrance with ramp and signage"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {points.map((point) => (
          <SlideItem key={point}>
            <div className="rounded-2xl border border-cyan-300/25 bg-slate-900/70 px-5 py-4 text-lg text-slate-100 shadow-card md:text-xl">
              {point}
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
