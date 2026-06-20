import { gsap } from 'gsap'

function ensureScrollTrigger() {
  const { ScrollTrigger } =
    require('gsap/ScrollTrigger') as typeof import('gsap/ScrollTrigger')
  return ScrollTrigger
}

function prepareCards(container: HTMLElement, selector: string) {
  const cards = container.querySelectorAll(selector)
  cards.forEach((c) => {
    const el = c as HTMLElement
    el.style.willChange = 'transform, opacity'
  })
  return cards
}

export function animateCardGrid(container: HTMLElement) {
  const cards = prepareCards(container, '[data-card]')
  if (!cards.length) { return }

  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: '(min-width: 1024px)',
      isMobile: '(max-width: 1023px)',
    },
    (ctx) => {
      const { isDesktop, isMobile } = ctx.conditions!

      return gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isDesktop ? 0.8 : 0.5,
          stagger: isDesktop ? 0.1 : 0.05,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'top 40%',
            scrub: isDesktop ? 1 : 0.5,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        }
      )
    }
  )

  return mm
}

export function animateWhyCards(container: HTMLElement) {
  const cards = prepareCards(container, '[data-why-card]')
  if (!cards.length) { return }

  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: '(min-width: 768px)',
      isMobile: '(max-width: 767px)',
    },
    (ctx) => {
      const { isDesktop } = ctx.conditions!

      return gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: isDesktop ? 0.8 : 0.5,
          stagger: isDesktop ? 0.15 : 0.08,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'top 40%',
            scrub: isDesktop ? 1 : 0.5,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        }
      )
    }
  )

  return mm
}

export function animateBenefits(container: HTMLElement) {
  const cards = prepareCards(container, '[data-benefit]')
  if (!cards.length) { return }

  ensureScrollTrigger()

  return gsap.fromTo(
    cards,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      force3D: true,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    }
  )
}

export function animateCTA(content: HTMLElement) {
  content.style.willChange = 'transform, opacity'

  ensureScrollTrigger()

  return gsap.fromTo(
    content,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: content,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    }
  )
}
