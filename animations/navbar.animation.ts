import { gsap } from 'gsap'

export function animateNavbar(header: HTMLElement) {
  header.style.willChange = 'transform, opacity'

  return gsap
    .timeline({ paused: true })
    .fromTo(
      header,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        force3D: true,
      }
    )
}

export function handleNavbarScroll(header: HTMLElement) {
  const y = window.scrollY
  const targetHeight = y <= 50 ? 80 : 72

  gsap.to(header, {
    height: targetHeight,
    duration: 0.3,
    ease: 'power2.out',
    force3D: true,
    overwrite: 'auto',
  })

  return y > 50
}

export function animateNavbarLinks(links: NodeListOf<Element>) {
  links.forEach((link) => {
    const el = link as HTMLElement
    el.style.willChange = 'transform'

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out',
        force3D: true,
        overwrite: 'auto',
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        force3D: true,
        overwrite: 'auto',
      })
    })
  })
}
