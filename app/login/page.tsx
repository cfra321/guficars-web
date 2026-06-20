'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLenis } from '@/hooks/useLenis'
import { initGsapPerformance } from '@/lib/gsap.config'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function LoginPage() {
  useLenis()

  useEffect(() => {
    const cleanup = initGsapPerformance()
    return () => cleanup()
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-screen items-center justify-center pt-32 pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />

          <div className="relative mx-auto w-full max-w-md px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="6" fill="white"/>
                  <path d="M7 18C7 16.5 8.5 14 11 14c2.5 0 4 2.5 4 4" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="9.5" cy="19" r="1" fill="#0EA5E9"/>
                  <circle cx="13.5" cy="19" r="1" fill="#0EA5E9"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Masuk ke akun Anda
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Belum punya akun?{' '}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Daftar
                </Link>
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary outline-none focus:ring-2 focus:ring-primary/10"
                    />
                    <span className="text-gray-600">Ingat saya</span>
                  </label>
                  <button
                    type="button"
                    className="font-medium text-primary hover:underline"
                  >
                    Lupa password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
                >
                  Masuk
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
