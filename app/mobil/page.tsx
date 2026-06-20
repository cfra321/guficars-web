'use client'

import { useEffect, useState } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { initGsapPerformance } from '@/lib/gsap.config'
import type { CarFilters } from '@/lib/constants'
import Navbar from '@/components/Navbar/Navbar'
import SearchBar from '@/components/Hero/SearchBar'
import CarGrid from '@/components/CarGrid/CarGrid'
import Footer from '@/components/Footer/Footer'

const EMPTY_FILTERS: CarFilters = { merk: '', tahun: '', hargaMax: '', lokasi: '' }

export default function MobilPage() {
  const [filters, setFilters] = useState<CarFilters>(EMPTY_FILTERS)

  useLenis()

  useEffect(() => {
    const cleanup = initGsapPerformance()
    return () => cleanup()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <div className="pt-40" />
        <div className="mx-auto max-w-[1060px] px-8 pb-12">
          <SearchBar onSearch={setFilters} />
        </div>
        <CarGrid filters={filters} />
      </main>
      <Footer />
    </>
  )
}
