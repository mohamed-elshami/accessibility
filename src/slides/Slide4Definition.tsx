import { Slide, SlideItem } from '../Slide'

const benefits = [
  'It supports people with disabilities.',
  'It also helps older adults.',
  'It helps people in temporary situations, like an injured arm.',
  'It helps people in challenging environments, like a noisy place or bright sunlight.',
]

export function Slide4Definition() {
  return (
    <Slide
      title="Accessibility Helps More People Than You Think"
      imageUrl="https://images.unsplash.com/photo-1573496359142-bdd38587631a?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Different people benefiting from accessible design"
    >
      <div className="mx-auto grid max-w-4xl gap-3 text-left">
        {benefits.map((line) => (
          <SlideItem key={line}>
            <div className="rounded-2xl border border-cyan-300/25 bg-slate-900/70 px-5 py-4 text-lg text-white shadow-card md:text-xl">
              {line}
            </div>
          </SlideItem>
        ))}
      </div>
    </Slide>
  )
}
