import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

/**
 * Ties a motion value to how far an element has transited through the
 * viewport (not just whether it's visible), producing a continuous
 * scroll-driven parallax instead of a one-off "on enter" animation.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(distance = 60) {
  const ref = useRef<T>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])

  return { ref, y, scrollYProgress }
}
