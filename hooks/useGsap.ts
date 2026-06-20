'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { isReducedMotion } from '@/lib/gsap.config'

export function useGsapAnimation(
  callback: (scope: HTMLElement | null) => (() => void) | void,
  deps: React.DependencyList = []
) {
  const scopeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isReducedMotion()) { return }

    const cleanup = callback(scopeRef.current)
    return () => {
      cleanup?.()
      if (typeof window !== 'undefined') {
        const { ScrollTrigger } = require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')
        ScrollTrigger.getAll().forEach((st: any) => {
          if (st.vars.trigger === scopeRef.current) {
            st.kill()
          }
        })
      }
    }
  }, deps)

  return scopeRef
}
