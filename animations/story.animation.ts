import { gsap } from 'gsap'

const SELECTORS = [
  '[data-story-image]',
  '[data-story-step]',
  '[data-car-shadow]',
  '[data-car-body]',
  '[data-car-light]',
  '[data-car-wheel-left]',
  '[data-car-wheel-right]',
  '[data-car-part]',
] as const

const SCROLL_TRIGGER = {
  start: 'top top',
  end: '+=2000',
  scrub: 1.5,
  pin: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
  fastScrollEnd: true,
} as const

function prepareElements(container: HTMLElement) {
  SELECTORS.forEach((sel) => {
    container.querySelectorAll(sel).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.willChange = 'transform, opacity'
      }
    })
  })
}

function getWheelTween(side: 'left' | 'right') {
  const isLeft = side === 'left'
  return {
    from: { xPercent: isLeft ? -180 : 180, rotate: isLeft ? -40 : 40 },
    to: { xPercent: 0, rotate: 0, duration: 2.2 },
  }
}

export function animateStoryTimeline(section: HTMLElement) {
  const { ScrollTrigger } = require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')

  prepareElements(section)

  const steps = section.querySelectorAll('[data-story-step]')
  const imageWrapper = section.querySelector('[data-story-image]')
  const carShadow = section.querySelector('[data-car-shadow]')
  const carBody = section.querySelector('[data-car-body]')
  const carLight = section.querySelector('[data-car-light]')
  const carWheelLeft = section.querySelector('[data-car-wheel-left]')
  const carWheelRight = section.querySelector('[data-car-wheel-right]')
  const carParts = section.querySelectorAll('[data-car-part]')

  const tl = gsap.timeline({
    scrollTrigger: { trigger: section, ...SCROLL_TRIGGER },
    defaults: { ease: 'power4.out', force3D: true },
  })

  if (imageWrapper) {
    tl.fromTo(imageWrapper, { scale: 1.15, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 2.5 })
  }

  if (carShadow) {
    tl.fromTo(carShadow, { opacity: 0.5 }, { opacity: 0.3, duration: 1.5 }, 0)
  }

  if (carBody) {
    tl.fromTo(carBody, { y: 25, opacity: 0.7 }, { y: 0, opacity: 1, duration: 2.2 }, 0)
  }

  if (carLight) {
    tl.fromTo(carLight, { opacity: 0.1 }, { opacity: 0.4, duration: 1.8 }, 0.3)
  }

  if (carWheelLeft) {
    tl.fromTo(carWheelLeft, getWheelTween('left').from, getWheelTween('left').to, 0.4)
  }

  if (carWheelRight) {
    tl.fromTo(carWheelRight, getWheelTween('right').from, getWheelTween('right').to, 0.4)
  }

  if (carParts.length) {
    tl.fromTo(carParts, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.1 }, 1.2)
  }

  steps.forEach((step, i) => {
    tl.fromTo(step, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1.5 }, i === 0 ? 1.5 : '-=0.7')
  })

  return tl
}
