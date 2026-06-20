'use client'

import { useEffect, useState } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { initGsapPerformance } from '@/lib/gsap.config'
import type { CarFilters } from '@/lib/constants'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection'
import SearchBar from '@/components/Hero/SearchBar'
import BenefitsSection from '@/components/Benefits/BenefitsSection'
import CarGrid from '@/components/CarGrid/CarGrid'
import StorySection from '@/components/Story/StorySection'
import WhyChooseSection from '@/components/WhyChoose/WhyChooseSection'
import CTASection from '@/components/CTA/CTASection'
import CaraBeliSection from '@/components/CaraBeliSection/CaraBeliSection'
import KontakSection from '@/components/KontakSection/KontakSection'
import Footer from '@/components/Footer/Footer'

const EMPTY_FILTERS: CarFilters = { merk: '', tahun: '', hargaMax: '', lokasi: '' }

export default function Home() {
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
        <HeroSection />
        <div className="relative z-20 -mt-24 grid justify-items-center">
          <SearchBar onSearch={setFilters} />
        </div>
        <BenefitsSection />
        <CarGrid filters={filters} carousel />
        <StorySection />
        <WhyChooseSection />
        <CTASection />
        <CaraBeliSection />
        <KontakSection />
      </main>
      <Footer />
    </>
  )
}
