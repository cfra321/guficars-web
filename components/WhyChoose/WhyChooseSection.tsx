'use client'

import { useEffect, useRef } from 'react'
import { animateWhyCards } from '@/animations/cards.animation'
import { isReducedMotion } from '@/lib/gsap.config'
import WhyCard from './WhyCard'

const REASONS = [
  {
    title: 'Inspeksi 120 Titik',
    desc: 'Setiap mobil diperiksa secara menyeluruh oleh tim teknisi ahli kami.',
    image: '/features/inspection-service.webp',
  },
  {
    title: 'Garansi 14 Hari',
    desc: 'Kepuasan Anda adalah prioritas. Dapatkan garansi uang kembali 14 hari.',
    image: '/features/customer-support.webp',
  },
  {
    title: 'Transparan & Aman',
    desc: 'Proses jual-beli yang transparan dengan dokumen lengkap dan terjamin.',
    image: '/features/car-delivery.webp',
  },
]

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isReducedMotion()) { return }

    const mm = animateWhyCards(section)
    return () => { mm?.revert() }
  }, [])

  return (
    <section id="mengapa-kami" className="relative overflow-hidden py-40" style={{ contain: 'layout style paint' }}>
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[80px]" />

      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mengapa Memilih{' '}
            <span className="text-primary">Kami?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Kami berkomitmen memberikan pengalaman terbaik dalam membeli mobil
            bekas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REASONS.map((r) => (
            <WhyCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
