'use client'

import { useEffect } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { initGsapPerformance } from '@/lib/gsap.config'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const CONTACT_INFO = [
  { label: 'Alamat', value: 'Jl. Sudirman No. 123, Jakarta Pusat 10220' },
  { label: 'Telepon', value: '(021) 1234-5678' },
  { label: 'WhatsApp', value: '0812-3456-7890' },
  { label: 'Email', value: 'hello@guficars.com' },
  { label: 'Jam Operasional', value: 'Senin - Sabtu, 08:00 - 20:00 WIB' },
]

export default function KontakPage() {
  useLenis()

  useEffect(() => {
    const cleanup = initGsapPerformance()
    return () => cleanup()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-24 pb-20 sm:pt-40 sm:pb-32">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                Hubungi Kami
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <span className="text-primary">Kontak</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
                Punya pertanyaan? Tim kami siap membantu Anda.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl bg-white border-gray-200 shadow-sm p-5 sm:p-6"
                    style={{ backdropFilter: 'blur(12px)' }}
                  >
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm text-gray-900 sm:text-lg">{info.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-white border-gray-200 shadow-sm p-6 sm:p-8"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                  Kirim Pesan
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full rounded-xl border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-primary/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full rounded-xl border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-primary/50"
                  />
                  <textarea
                    placeholder="Pesan Anda"
                    rows={4}
                    className="w-full resize-none rounded-xl border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-primary/50"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
