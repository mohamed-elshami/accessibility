 import { Slide, SlideItem } from '../Slide'

const closingPoints = [
  'Accessibility should not be added at the end.',
  'It should be considered from the beginning.',
 ]

export function Slide14Closing() {
  return (
    <Slide
      title="Accessibility Is Not a Luxury"
      subtitle="It is a mindset"
      imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Inclusive illustration representing accessibility for everyone"
      titleClassName="text-3xl md:text-5xl"
      subtitleClassName="text-lg md:text-2xl text-cyan-100"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {closingPoints.map((line) => (
          <SlideItem key={line}>
            <div className="rounded-2xl border border-white/15 bg-slate-900/70 px-5 py-4 text-lg text-slate-100 shadow-card md:text-xl">
              {line}
            </div>
          </SlideItem>
        ))}
      </div>
      <SlideItem>
        <blockquote className="mx-auto mt-10 max-w-4xl rounded-2xl border border-cyan-300/25 bg-slate-900/75 px-6 py-6 text-balance text-lg italic text-cyan-50 shadow-card md:text-2xl">
          <p>
            &ldquo;When we design for different people, we create something
            better for everyone.&rdquo;
          </p>
        </blockquote>
      </SlideItem>
    </Slide>
  )
}
