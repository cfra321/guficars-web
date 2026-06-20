import { gsap } from 'gsap'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

let registered = false

function registerPlugins() {
  if (registered || typeof window === 'undefined') { return }
  registered = true

  const { ScrollTrigger } =
    require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  gsap.ticker.lagSmoothing(0)
  ScrollTrigger.normalizeScroll(true)
  ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true })
}

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') { return false }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export function initGsapPerformance() {
  if (typeof window === 'undefined') { return () => {} }

  registerPlugins()

  const { ScrollTrigger } =
    require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)

  function handleChange() {
    ScrollTrigger.refresh()
  }
  mediaQuery.addEventListener('change', handleChange)

  function debouncedResize() {
    let timer: ReturnType<typeof setTimeout>
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => ScrollTrigger.refresh(), 200)
    }
  }

  const handleResize = debouncedResize()
  window.addEventListener('resize', handleResize)

  return () => {
    mediaQuery.removeEventListener('change', handleChange)
    window.removeEventListener('resize', handleResize)
    ScrollTrigger.getAll().forEach((st: any) => st.kill())
  }
}
