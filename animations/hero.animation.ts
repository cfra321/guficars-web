import { gsap } from 'gsap'

const ANIMATED_SELECTORS = [
  '[data-hero-headline]',
  '[data-hero-subtitle]',
  '[data-hero-car]',
  '[data-hero-features]',
] as const

function setWillChange(container: HTMLElement) {
  ANIMATED_SELECTORS.forEach((sel) => {
    const el = container.querySelector(sel)
    if (el instanceof HTMLElement) {
      el.style.willChange = 'transform, opacity'
    }
  })
}

export function animateHeroIntro(container: HTMLElement) {
  setWillChange(container)

  const headline = container.querySelector('[data-hero-headline]')
  const subtitle = container.querySelector('[data-hero-subtitle]')
  const features = container.querySelector('[data-hero-features]')
  const car = container.querySelector('[data-hero-car]')

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', force3D: true },
  })

  if (headline) {
    tl.fromTo(
      headline,
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 },
      0
    )
  }

  if (subtitle) {
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      0.3
    )
  }

  if (features) {
    tl.fromTo(
      features,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.5
    )
  }

  if (car) {
    tl.fromTo(
      car,
      { opacity: 0, x: 80, scale: 1.1 },
      { opacity: 1, x: 0, scale: 1, duration: 1.4 },
      0.45
    )
  }

  return tl
}

export function animateHeroBackground(container: HTMLElement) {
  const bg = container.querySelector('[data-hero-bg]')
  if (!bg || !(bg instanceof HTMLElement)) { return }

  bg.style.willChange = 'transform'

  const { ScrollTrigger } =
    require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')

  return gsap.to(bg, {
    y: 60,
    scale: 1.15,
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
    },
  })
}
