import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp, staggerContainer } from './slides/slideAnimations'

type SlideProps = {
  title: string
  subtitle?: string
  imageUrl?: string
  imageAlt?: string
  headerPosition?: 'top' | 'bottom'
  titleClassName?: string
  /** Wraps the title in a panel (e.g. gradient background behind the heading). */
  titlePanelClassName?: string
  subtitleClassName?: string
  children: ReactNode
}

export function SlideItem({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="w-full">
      {children}
    </motion.div>
  )
}

export function Slide({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  headerPosition = 'top',
  titleClassName,
  titlePanelClassName,
  subtitleClassName,
  children,
}: SlideProps) {
  const titleHeading = (
    <h1
      className={`text-balance text-4xl font-bold leading-tight text-white md:text-6xl ${titleClassName ?? ''}`.trim()}
    >
      {title}
    </h1>
  )

  const header = (
    <>
      <SlideItem>
        {titlePanelClassName ? (
          <div
            className={`mx-auto inline-block max-w-full px-6 py-5 md:px-10 md:py-8 ${titlePanelClassName}`.trim()}
          >
            {titleHeading}
          </div>
        ) : (
          titleHeading
        )}
      </SlideItem>

      {subtitle ? (
        <SlideItem>
          <p
            className={`mx-auto max-w-3xl text-balance text-lg text-slate-200 md:text-2xl ${subtitleClassName ?? ''}`.trim()}
          >
            {subtitle}
          </p>
        </SlideItem>
      ) : null}
    </>
  )

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 pb-8 pt-4 text-center md:gap-8 md:px-8"
      aria-label={title}
    >
      {headerPosition === 'top' ? header : null}

      {imageUrl ? (
        <SlideItem>
          <img
            src={imageUrl}
            alt={imageAlt ?? ''}
            className="mx-auto h-56 w-full max-w-2xl rounded-2xl border border-white/10 object-cover shadow-card md:h-72"
            loading="lazy"
          />
        </SlideItem>
      ) : null}

      <div className="w-full">{children}</div>
      {headerPosition === 'bottom' ? header : null}
    </motion.section>
  )
}
