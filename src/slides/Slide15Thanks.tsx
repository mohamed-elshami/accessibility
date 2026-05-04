import logo from '../assets/logo_with_spacing.png'
import { Slide, SlideItem } from '../Slide'

export function Slide15Thanks() {
  return (
    <Slide
      title="Thank You"
      titleClassName="text-4xl md:text-7xl"
    >
      <SlideItem>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-6">
          <img
            src={logo}
            alt="Creiden company logo"
            className="w-full max-w-xl"
          />
          <p className="rounded-2xl border border-white/15 bg-slate-900/70 px-6 py-6 uppercase text-base text-slate-100 shadow-card md:text-4xl">
            Thank you for listening. <br /> <br /> <span>I am happy to answer your questions.</span></p>

        </div>
      </SlideItem>
    </Slide >
  )
}
