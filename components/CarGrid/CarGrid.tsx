'use client'

import { useEffect, useRef, useMemo, useState } from 'react'
import Link from 'next/link'
import { animateCardGrid } from '@/animations/cards.animation'
import { isReducedMotion } from '@/lib/gsap.config'
import type { CarFilters } from '@/lib/constants'
import CarCard from './CarCard'

export const CARS = [
  {
    id: '1',
    name: 'Toyota Fortuner 2022',
    meta: '22.000 km · Bensin',
    price: 'Rp 485 juta',
    location: 'Jakarta Selatan',
    image: '/cars/toyota fortuner.jpeg',
  },
  {
    id: '2',
    name: 'Honda CR-V 2023',
    meta: '15.000 km · Bensin',
    price: 'Rp 425 juta',
    location: 'Jakarta Pusat',
    image: '/cars/honda hr-v.jpeg',
  },
  {
    id: '3',
    name: 'Mitsubishi Pajero 2022',
    meta: '30.000 km · Diesel',
    price: 'Rp 380 juta',
    location: 'Bandung',
    image: '/cars/mistubitsu expander.jpeg',
  },
  {
    id: '4',
    name: 'Wuling Almaz 2023',
    meta: '10.000 km · Hybrid',
    price: 'Rp 295 juta',
    location: 'Tangerang',
    image: '/cars/daihatsu rocky.jpeg',
  },
  {
    id: '5',
    name: 'Toyota Camry 2024',
    meta: '8.000 km · Bensin',
    price: 'Rp 550 juta',
    location: 'Jakarta Selatan',
    image: '/cars/toyota avanza.jpeg',
  },
  {
    id: '6',
    name: 'Honda Civic 2024',
    meta: '5.000 km · Bensin',
    price: 'Rp 465 juta',
    location: 'Bandung',
    image: '/cars/hyundai.jpeg',
  },
  {
    id: '7',
    name: 'Mitsubishi Xpander 2023',
    meta: '18.000 km · Bensin',
    price: 'Rp 265 juta',
    location: 'Bekasi',
    image: '/cars/suzuki xl7.jpeg',
  },
  {
    id: '8',
    name: 'Wuling Confero 2022',
    meta: '25.000 km · Bensin',
    price: 'Rp 185 juta',
    location: 'Tangerang',
    image: '/cars/daihatsu cayla.jpeg',
  },
  {
    id: '9',
    name: 'Suzuki Swift 2023',
    meta: '20.000 km · Bensin',
    price: 'Rp 215 juta',
    location: 'Jakarta Timur',
    image: '/cars/suzuki swift.jpeg',
  },
  {
    id: '10',
    name: 'Nissan X-Trail 2022',
    meta: '28.000 km · Bensin',
    price: 'Rp 345 juta',
    location: 'Depok',
    image: '/cars/nisan x-trail.jpeg',
  },
]

function filterCars(cars: typeof CARS, filters: CarFilters) {
  return cars.filter((car) => {
    if (filters.merk) {
      const q = filters.merk.toLowerCase()
      if (!car.name.toLowerCase().includes(q)) return false
    }
    if (filters.tahun) {
      if (!car.name.includes(filters.tahun)) return false
    }
    if (filters.hargaMax) {
      const match = car.price.match(/([\d.]+)/)
      if (match) {
        const priceNum = parseFloat(match[0].replace(/\./g, ''))
        if (priceNum > parseFloat(filters.hargaMax)) return false
      }
    }
    if (filters.lokasi) {
      const q = filters.lokasi.toLowerCase()
      if (!car.location.toLowerCase().includes(q)) return false
    }
    return true
  })
}

export default function CarGrid({ filters, carousel }: { filters?: CarFilters; carousel?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const filtered = useMemo(
    () => (filters ? filterCars(CARS, filters) : CARS),
    [filters]
  )

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || isReducedMotion()) { return }

    const mm = animateCardGrid(grid)
    return () => { mm?.revert() }
  }, [])

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 16)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 16)
  }

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardW = (el.querySelector('[data-card]') as HTMLElement)?.offsetWidth ?? 300
    el.scrollBy({ left: dir === 'left' ? -(cardW + 24) : cardW + 24, behavior: 'smooth' })
    setTimeout(updateScrollState, 400)
  }

  return (
    <section id="mobil" className="relative py-40" style={{ contain: 'layout style paint' }}>
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mb-16 text-center" data-animate>
          <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Koleksi Terbaru
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pilihan Mobil{' '}
            <span className="text-primary">Terbaik</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Temukan mobil impian Anda dari koleksi terkurasi kami.
          </p>
        </div>

        <div className="relative">
          {(carousel && canScrollLeft) && (
            <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 backdrop-blur-md transition-all hover:bg-gray-200" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={carousel ? updateScrollState : undefined}
            className={carousel ? 'flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4' : ''}
            style={carousel ? { scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' } : undefined}
          >
            <div
              ref={gridRef}
              className={carousel ? 'flex gap-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}
              style={carousel ? undefined : { gap: '24px' }}
            >
              {filtered.map((car) => (
                <div key={car.id} className={carousel ? 'min-w-[calc(100vw-4rem)] sm:min-w-[calc(50vw-3rem)] lg:min-w-[calc(25vw-2.5rem)] max-w-[320px] snap-start' : ''}>
                  <CarCard {...car} />
                </div>
              ))}
            </div>
          </div>

          {(carousel && canScrollRight) && (
            <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700 backdrop-blur-md transition-all hover:bg-gray-200" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-gray-400">
            Tidak ada mobil yang cocok dengan filter Anda.
          </p>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/mobil"
            className="inline-block rounded-xl border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
          >
            Lihat Semua Mobil →
          </Link>
        </div>
      </div>
    </section>
  )
}
