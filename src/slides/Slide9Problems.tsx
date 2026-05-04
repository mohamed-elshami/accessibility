import { Slide, SlideItem } from '../Slide'

const mistakes = [
  'Tiny text',
  'Low contrast colors',
  'Videos without subtitles',
  'Unclear buttons or labels',
  'Complicated forms and instructions',
]

export function Slide9Problems() {
  return (
    <Slide
      title="Common Mistakes to Avoid"
      imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Examples of common accessibility problems in design"
    >
      <ul className="mx-auto grid max-w-4xl list-none gap-3 p-0 sm:grid-cols-2">
        {mistakes.map((item) => (
          <li key={item}>
            <SlideItem>
              <div className="flex min-h-[4.5rem] items-center rounded-2xl border border-amber-400/30 bg-slate-900/70 px-5 py-4 text-lg text-white shadow-card md:text-xl">
                <span
                  className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-950/40 text-sm font-bold text-amber-200"
                  aria-hidden="true"
                >
                  !
                </span>
                {item}
              </div>
            </SlideItem>
          </li>
        ))}
      </ul>
    </Slide>
  )
}
