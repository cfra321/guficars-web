'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { animateHeroIntro, animateHeroBackground } from '@/animations/hero.animation'
import { isReducedMotion } from '@/lib/gsap.config'
import HeroCarousel from './HeroCarousel'
import FeatureRow from './FeatureRow'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isReducedMotion()) { return }

    const introTl = animateHeroIntro(section)
    const bgAnim = animateHeroBackground(section)

    return () => {
      introTl.kill()
      bgAnim?.kill()
      const { ScrollTrigger } = require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')
      ScrollTrigger.getAll().forEach((st: any) => {
        if (st.vars.trigger === section) st.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      style={{ height: '920px', contain: 'layout style paint' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          data-hero-bg
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'url(/hero/hero-bg-city.webp) center / cover no-repeat',
            filter: 'blur(8px) brightness(0.3)',
            transform: 'scale(1.1)',
            willChange: 'transform',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-full w-1/2 opacity-30">
          <Image src="/hero/hero-glow.webp" alt="" fill className="object-contain object-bottom" sizes="50vw" />
        </div>
      </div>

      <div className="relative z-10 mx-auto h-full max-w-[1280px] px-8">
        <div className="flex h-full flex-col pt-[180px]">
          <HeroCarousel />
          <FeatureRow />
        </div>


      </div>
    </section>
  )
}
