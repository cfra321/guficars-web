'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { animateBenefits } from '@/animations/cards.animation'
import { isReducedMotion } from '@/lib/gsap.config'
import BenefitCard from './BenefitCard'

const BENEFITS = [
  { icon: '🔒', title: 'Terpercaya', desc: 'Bisnis terverifikasi dengan ribuan pelanggan puas.' },
  { icon: '✓', title: 'Terinspeksi', desc: '120 titik inspeksi ketat sebelum mobil ditawarkan.' },
  { icon: '💰', title: 'Harga Terbaik', desc: 'Harga transparan tanpa biaya tersembunyi.' },
  { icon: '🚚', title: 'Gratis Antar', desc: 'Pengiriman gratis ke seluruh Indonesia.' },
]

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isReducedMotion()) { return }

    const anim = animateBenefits(section)
    return () => { anim?.kill() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '280px', contain: 'layout style paint' }}
    >
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <Image
          src="/bacground-web-guficars.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto flex h-full max-w-[1280px] items-center px-8">
        <div className="grid w-full grid-cols-2 md:grid-cols-4" style={{ gap: '32px' }}>
          {BENEFITS.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}
