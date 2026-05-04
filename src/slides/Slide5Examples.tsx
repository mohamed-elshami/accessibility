import { Slide, SlideItem } from '../Slide'

const lines = [
  'Subtitles help people who are deaf or hard of hearing.',
  'They also help people in noisy environments.',
  'They help people watching without sound.',
  'One accessible feature can help many users.',
]

export function Slide5Examples() {
  return (
    <Slide
      title="A Small Feature, A Big Impact"
      imageUrl="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Video playing with subtitles on a mobile screen"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {lines.map((line) => (
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
