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
      imageUrl="https://aphsa.org/wp-content/uploads/2025/07/Why-Digital-Accessibility-Benefits-Everyone-Access-Beyond-Disabilities-771x257.png"
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
