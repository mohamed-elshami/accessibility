import { Slide, SlideItem } from '../Slide'

const reasons = [
  'Everyone should be able to work, learn, and get care like anyone else.',
  'Anyone can need help sometimes: noise, injury, tired eyes, or getting older.',
  'Simple, clear access means less stress for families and more independence.',
  'It is about respect and not leaving people out.',
]

export function Slide7Types() {
  return (
    <Slide
      title="Why Is Accessibility Important?"
      imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Illustration representing inclusion and equal access"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {reasons.map((line) => (
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
