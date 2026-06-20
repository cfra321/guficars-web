'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

export function useLenis() {
  useEffect(() => {
    let ScrollTrigger: any
    try {
      ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger
    } catch {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
      syncTouch: true,
    })

    ;(window as any).__lenis = lenis

    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
}
