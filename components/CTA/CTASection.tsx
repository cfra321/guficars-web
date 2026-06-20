'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { animateCTA } from '@/animations/cards.animation'
import { isReducedMotion } from '@/lib/gsap.config'

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content || isReducedMotion()) { return }

    const anim = animateCTA(content)
    return () => { anim?.kill() }
  }, [])

  return (
    <section id="cta" className="relative py-20 sm:py-40" style={{ contain: 'layout style paint' }}>
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/cta/cta-bg.webp"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          sizes="100vw"
        />
        <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-3xl px-8 text-center"
      >
        {/* Decorative car image */}
        <div className="relative mx-auto mb-8 h-48 w-72">
          <Image
            src="/cta/cta-car.webp"
            alt=""
            fill
            className="object-contain drop-shadow-xl"
            sizes="288px"
          />
        </div>

        <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Siap Temukan Mobil{' '}
          <span className="text-primary">Impian Anda?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
          Jelajahi koleksi mobil bekas premium kami. Setiap mobil telah
          diinspeksi dan siap untuk Anda.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-primary px-10 py-4 text-base font-semibold text-white transition-all hover:bg-primary-hover shadow-xl shadow-primary/25">
            Lihat Koleksi
          </button>
          <button className="rounded-xl border border-gray-200 bg-white px-10 py-4 text-base font-semibold text-gray-700 transition-all hover:bg-gray-50">
            Jadwalkan Test Drive
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Tanpa biaya tersembunyi. Tanpa tekanan. Hanya mobil berkualitas.
        </p>
      </div>
    </section>
  )
}
