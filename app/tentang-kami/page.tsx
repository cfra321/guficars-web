'use client'

import { useEffect } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { initGsapPerformance } from '@/lib/gsap.config'
import Navbar from '@/components/Navbar/Navbar'
import StorySection from '@/components/Story/StorySection'
import WhyChooseSection from '@/components/WhyChoose/WhyChooseSection'
import Footer from '@/components/Footer/Footer'

export default function TentangKamiPage() {
  useLenis()

  useEffect(() => {
    const cleanup = initGsapPerformance()
    return () => cleanup()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <div className="pt-32" />
        <StorySection />
        <WhyChooseSection />
      </main>
      <Footer />
    </>
  )
}
