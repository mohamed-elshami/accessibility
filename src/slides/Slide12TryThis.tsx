import { Slide, SlideItem } from '../Slide'

const points = [
  'Clear buttons and labels',
  'Readable font sizes',
  'Strong color contrast',
  'Keyboard-friendly interaction',
  'Content that works with or without sound',
]

export function Slide12TryThis() {
  return (
    <Slide
      title="Accessibility in Apps, Websites, and Digital Tools"
      imageUrl="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Example of an accessible app or website interface"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {points.map((point) => (
          <SlideItem key={point}>
            <div className="rounded-2xl border border-white/15 bg-slate-900/70 px-5 py-4 text-lg text-white shadow-card md:text-xl">
              {point}
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
