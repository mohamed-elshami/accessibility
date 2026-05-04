import { Slide, SlideItem } from '../Slide'

const reasons = [
  'It promotes fairness and inclusion.',
  'It improves the experience for everyone.',
  'It reduces frustration.',
  'It helps more people use products and services.',
  "It shows respect for users' different needs.",
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
