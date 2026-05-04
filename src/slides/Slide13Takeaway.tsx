import { Slide, SlideItem } from '../Slide'

const steps = [
  'Ask: Is this clear?',
  'Ask: Is this easy to use?',
  'Ask: Is there an alternative if someone cannot see or hear this?',
  'Test with real users if possible',
  'Start small and keep improving',
]

export function Slide13Takeaway() {
  return (
    <Slide
      title="Small Steps Make a Big Difference"
      imageUrl="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Checklist showing practical accessibility steps"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {steps.map((step, index) => (
          <SlideItem key={step}>
            <div className="flex items-start gap-4 rounded-2xl border border-cyan-300/25 bg-slate-900/70 px-5 py-4 text-lg text-slate-100 shadow-card md:text-xl">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950/80 text-base font-bold text-cyan-200"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span>{step}</span>
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
