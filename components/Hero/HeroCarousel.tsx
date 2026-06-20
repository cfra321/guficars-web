'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export interface HeroSlide {
  title: string
  accent: string
  subtitle: string
  image: string
}

const SLIDES: HeroSlide[] = [
  {
    title: 'Temukan Mobil Bekas',
    accent: 'Terbaik Untuk Anda',
    subtitle: 'Dapatkan mobil bekas berkualitas dengan harga terbaik. Setiap mobil telah melalui inspeksi ketat untuk memastikan kualitas dan kepercayaan.',
    image: '/hero/hero-car-main.webp',
  },
  {
    title: 'Toyota Fortuner 2022',
    accent: 'SUV Tangguh',
    subtitle: 'Mesin bertenaga, interior mewah, dan performa off-road yang handal. Cocok untuk keluarga dan petualangan Anda.',
    image: '/cars/toyota fortuner.jpeg',
  },
  {
    title: 'Honda CR-V 2023',
    accent: 'SUV Premium',
    subtitle: 'Kenyamanan kelas atas dengan teknologi terkini. Efisien, stylish, dan siap menemani perjalanan harian Anda.',
    image: '/cars/honda hr-v.jpeg',
  },
  {
    title: 'Mitsubishi Xpander',
    accent: 'Mobil Keluarga',
    subtitle: 'Desain modern, kabin lapang, dan irit bahan bakar. Pilihan tepat untuk mobilitas keluarga Indonesia.',
    image: '/cars/mistubitsu expander.jpeg',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStart = useRef(0)
  const dragEnd = useRef(0)
  const dragging = useRef(false)

  const goTo = useCallback((index: number) => {
    const next = (index + SLIDES.length) % SLIDES.length
    if (next === current) return
    setCurrent(next)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  useEffect(() => {
    const slide = SLIDES[current]

    if (textRef.current) {
      gsap.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', force3D: true })
    }
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { opacity: 0, x: 40, scale: 1.05 }, { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: 'power3.out', force3D: true })
    }
  }, [current])

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    dragStart.current = e.clientX
    if (e.currentTarget) e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    dragEnd.current = e.clientX
  }

  const handlePointerUp = () => {
    if (!dragging.current) return
    dragging.current = false
    const diff = dragStart.current - dragEnd.current
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev()
    }
  }

  return (
    <div
      className="relative col-span-12 grid lg:col-span-12 lg:grid-cols-12"
      style={{ touchAction: 'pan-y' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="col-span-12 lg:col-span-5">
        <div ref={textRef} data-hero-headline>
          <div className="sm:w-[520px] sm:max-w-[580px]">
            <h1
              className="font-extrabold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(32px, 6vw, 72px)', color: '#FFFFFF' }}
            >
              {SLIDES[current].title}{' '}
              <span style={{ color: '#0EA5E9' }}>{SLIDES[current].accent}</span>
            </h1>
            <p
              className="mt-4 text-sm sm:mt-6 sm:text-base"
              style={{
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '420px',
              }}
              data-hero-subtitle
            >
              {SLIDES[current].subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="relative col-span-12 mt-8 lg:col-span-7 lg:mt-0 lg:h-full">
        <div
          ref={imageRef}
          className="flex h-full w-full items-center justify-center"
          data-hero-car
        >
          <div className="relative w-full" style={{ maxWidth: '620px', aspectRatio: '4/3' }}>
            <Image
              src={SLIDES[current].image}
              alt={SLIDES[current].accent}
              fill
              priority={current === 0}
              className="object-contain drop-shadow-2xl"
              sizes="620px"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between lg:static lg:col-span-12 lg:mt-4">
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? '#0EA5E9' : 'rgba(255,255,255,0.35)',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
