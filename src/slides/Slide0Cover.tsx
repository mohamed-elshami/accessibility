import logo from '../assets/logo_with_spacing.png'
import { Slide, SlideItem } from '../Slide'

export function Slide0Cover() {
  return (
    <Slide
      headerPosition="bottom"
      title="Accessibility"
      titleClassName="inline-block text-5xl md:text-9xl bg-gradient-to-r from-cyan-200 via-white to-indigo-300 bg-clip-text !text-transparent"
    >
      <SlideItem>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-4">
          <img
            src={logo}
            alt="Creiden company logo"
            className="w-full max-w-xl"
          />
          <p className="text-sm text-slate-300 md:text-lg">
            Presented by Mohamed Samir
          </p>
        </div>
      </SlideItem>
    </Slide>
  )
}
