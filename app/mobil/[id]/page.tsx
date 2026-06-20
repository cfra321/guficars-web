'use client'

import { useEffect, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLenis } from '@/hooks/useLenis'
import { initGsapPerformance } from '@/lib/gsap.config'
import Navbar from '@/components/Navbar/Navbar'
import { CARS } from '@/components/CarGrid/CarGrid'
import Footer from '@/components/Footer/Footer'

const DETAILS: Record<string, { year: string; fuel: string; transmission: string; mileage: string; color: string; desc: string }> = {
  '1': { year: '2022', fuel: 'Bensin', transmission: 'Automatic', mileage: '22.000 km', color: 'Putih', desc: 'Toyota Fortuner 2022 dalam kondisi prima. Performa mesin bertenaga dengan interior mewah. Dilengkapi fitur keselamatan terkini dan nyaman untuk perjalanan jauh.' },
  '2': { year: '2023', fuel: 'Bensin', transmission: 'CVT', mileage: '15.000 km', color: 'Hitam', desc: 'Honda CR-V 2023 dengan teknologi terbaru. Kabin luas dan nyaman, cocok untuk keluarga modern yang mengutamakan kenyamanan.' },
  '3': { year: '2022', fuel: 'Diesel', transmission: 'Automatic', mileage: '30.000 km', color: 'Silver', desc: 'Mitsubishi Pajero 2022 yang tangguh. Mesin diesel bertenaga dengan kemampuan off-road handal. Interior premium dengan fitur lengkap.' },
  '4': { year: '2023', fuel: 'Hybrid', transmission: 'Automatic', mileage: '10.000 km', color: 'Biru', desc: 'Wuling Almaz 2023 dengan teknologi hybrid. Irit bahan bakar dan ramah lingkungan. Dilengkapi fitur modern untuk kenyamanan berkendara.' },
  '5': { year: '2024', fuel: 'Bensin', transmission: 'Automatic', mileage: '8.000 km', color: 'Hitam', desc: 'Toyota Camry 2024 dengan desain elegan dan performa superior. Interior mewah dengan fitur keselamatan terkini.' },
  '6': { year: '2024', fuel: 'Bensin', transmission: 'CVT', mileage: '5.000 km', color: 'Merah', desc: 'Honda Civic 2024 dengan desain sporty dan performa responsif. Teknologi terbaru untuk pengalaman berkendara yang menyenangkan.' },
  '7': { year: '2023', fuel: 'Bensin', transmission: 'Automatic', mileage: '18.000 km', color: 'Putih', desc: 'Mitsubishi Xpander 2023 dengan kabin lapang dan fleksibel. Ideal untuk mobilitas keluarga dengan konsumsi BBM irit.' },
  '8': { year: '2022', fuel: 'Bensin', transmission: 'Manual', mileage: '25.000 km', color: 'Silver', desc: 'Wuling Confero 2022 yang lega dan nyaman. Pilihan tepat untuk keluarga besar dengan budget bersahabat.' },
  '9': { year: '2023', fuel: 'Bensin', transmission: 'CVT', mileage: '20.000 km', color: 'Putih', desc: 'Suzuki Swift 2023 dengan desain sporty dan lincah. Cocok untuk mobilitas perkotaan dengan konsumsi BBM yang irit.' },
  '10': { year: '2022', fuel: 'Bensin', transmission: 'CVT', mileage: '28.000 km', color: 'Abu-abu', desc: 'Nissan X-Trail 2022 dengan kabin luas dan nyaman. Performa tangguh untuk berbagai medan, cocok untuk petualangan keluarga.' },
}

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  useLenis()

  useEffect(() => {
    const cleanup = initGsapPerformance()
    return () => cleanup()
  }, [])

  const { id } = use(params)
  const car = CARS.find((c) => c.id === id)
  const detail = DETAILS[id]

  if (!car) {
    return <div className="flex min-h-screen items-center justify-center text-gray-900">Mobil tidak ditemukan</div>
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-32">
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-8">
            <Link href="/mobil" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Kembali ke Koleksi
            </Link>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image src={car.image} alt={car.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-5xl">{car.name}</h1>
                <p className="mt-2 text-sm text-gray-500 sm:text-lg">{car.location}</p>
                <p className="mt-4 text-3xl font-bold text-primary sm:mt-6 sm:text-5xl">{car.price}</p>

                {detail && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                    {[
                      { label: 'Tahun', value: detail.year },
                      { label: 'Bahan Bakar', value: detail.fuel },
                      { label: 'Transmisi', value: detail.transmission },
                      { label: 'Kilometer', value: detail.mileage },
                      { label: 'Warna', value: detail.color },
                      { label: 'Sertifikasi', value: 'Terinspeksi' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl bg-white border-gray-200 shadow-sm px-4 py-3 sm:px-5 sm:py-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                        <p className="mt-1 text-base font-medium text-gray-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {detail && (
                  <p className="mt-8 leading-relaxed text-gray-600">{detail.desc}</p>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                  <button className="rounded-xl bg-primary px-10 py-4 text-base font-semibold text-white transition-all hover:bg-primary-hover shadow-xl shadow-primary/25">
                    Ajukan Pembelian
                  </button>
                  <button className="rounded-xl border-gray-200 bg-white px-10 py-4 text-base font-semibold text-gray-700 transition-all hover:bg-gray-50">
                    Jadwalkan Test Drive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
