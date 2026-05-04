import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useMemo, useState } from 'react'
import { useSlideNavigation } from './hooks/useSlideNavigation'
import { slides } from './slides'

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const totalSlides = slides.length

  const current = slides[activeSlide]
  const progress = useMemo(
    () => ((activeSlide + 1) / totalSlides) * 100,
    [activeSlide, totalSlides],
  )

  const goToSlide = useCallback(
    (nextIndex: number) => {
      setActiveSlide((currentIndex) => {
        if (nextIndex < 0 || nextIndex >= totalSlides) {
          return currentIndex
        }
        setDirection(nextIndex > currentIndex ? 1 : -1)
        return nextIndex
      })
    },
    [totalSlides],
  )

  const handleNext = useCallback(() => {
    goToSlide(activeSlide + 1)
  }, [activeSlide, goToSlide])

  const handlePrevious = useCallback(() => {
    goToSlide(activeSlide - 1)
  }, [activeSlide, goToSlide])

  useSlideNavigation({
    onPrevious: handlePrevious,
    onNext: handleNext,
  })

  const SlideComponent = current.Component

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute left-0 top-0 z-20 h-1.5 w-full bg-white/10">
        <motion.div
          className="h-full bg-cyan-300"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>

      <main
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-2 pb-6 pt-6 md:px-6 md:pb-8 md:pt-8"
        role="main"
        aria-roledescription="slide presentation"
      >
        <div className="sr-only" aria-live="polite">
          Slide {activeSlide + 1} of {totalSlides}: {current.title}
        </div>

        <div className="flex-1">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 56 : -56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -56 : 56 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="h-full"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        <nav
          className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 backdrop-blur md:px-6"
          aria-label="Slide controls"
        >
          <button
            type="button"
            onClick={handlePrevious}
            disabled={activeSlide === 0}
            className="rounded-xl border border-white/20 bg-slate-800 px-4 py-2 text-base font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40 md:text-lg"
            aria-label="Go to previous slide"
          >
            Previous
          </button>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-slate-100 md:text-base">
              {activeSlide + 1} / {totalSlides}
            </p>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeSlide
                      ? 'bg-cyan-300'
                      : 'bg-slate-400/40 hover:bg-slate-300/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeSlide === totalSlides - 1}
            className="rounded-xl border border-white/20 bg-cyan-500 px-4 py-2 text-base font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40 md:text-lg"
            aria-label="Go to next slide"
          >
            Next
          </button>
        </nav>
      </main>
    </div>
  )
}

export default App
