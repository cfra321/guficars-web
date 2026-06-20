'use client'

import { useEffect, useRef } from 'react'
import { animateStoryTimeline } from '@/animations/story.animation'
import { isReducedMotion } from '@/lib/gsap.config'
import StoryContent from './StoryContent'
import CarDisassemble from './CarDisassemble'

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isReducedMotion()) { return }

    const ctx = animateStoryTimeline(section)

    return () => {
      const { ScrollTrigger } = require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')
      ctx.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section) st.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div data-story-image>
          <CarDisassemble />
        </div>

        <div className="space-y-12">
          <StoryContent />
        </div>
      </div>
    </section>
  )
}
