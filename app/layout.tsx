import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RouteLoader from '@/components/LoadingScreen/RouteLoader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GufiCars — Jual Beli Mobil Bekas Berkualitas',
  description:
    'Platform jual-beli mobil bekas terpercaya di Indonesia. Setiap mobil melalui inspeksi 120 titik untuk kualitas terbaik.',
  openGraph: {
    title: 'GufiCars — Jual Beli Mobil Bekas Berkualitas',
    description:
      'Platform jual-beli mobil bekas terpercaya di Indonesia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        <RouteLoader />
        {children}
      </body>
    </html>
  )
}
