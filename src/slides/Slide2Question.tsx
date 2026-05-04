import { Slide, SlideItem } from '../Slide'

const barriers = [
  'A confusing app',
  'A video without subtitles',
  'A building with stairs only',
  'A form that is difficult to complete',
]

export function Slide2Question() {
  return (
    <Slide
      title="Have You Ever Felt Something Simple Was Hard to Use?"
      imageUrl="https://images.unsplash.com/photo-1758525747606-9e2676af8234?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Person on outdoor stairs using a phone and laptop, looking stressed—suggesting everyday tasks that feel harder than they should"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {barriers.map((item) => (
          <SlideItem key={item}>
            <div className="rounded-2xl border border-cyan-300/25 bg-slate-900/70 px-5 py-4 text-lg text-white shadow-card md:text-xl">
              {item}
            </div>
          </SlideItem>
        ))}
      </div>
      <SlideItem>
        <p className="mx-auto max-w-4xl text-balance text-lg font-semibold text-cyan-200 md:text-2xl">
          These are examples of accessibility barriers.
        </p>
      </SlideItem>
    </Slide>
  )
}
