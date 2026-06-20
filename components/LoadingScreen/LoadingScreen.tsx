'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="flex items-center gap-2.5">
        <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="6" fill="#0EA5E9"/>
          <path d="M7 18C7 16.5 8.5 14 11 14c2.5 0 4 2.5 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="9.5" cy="19" r="1" fill="white"/>
          <circle cx="13.5" cy="19" r="1" fill="white"/>
          <rect x="18" y="10" width="4" height="8" rx="1" fill="white" opacity="0.6"/>
          <rect x="20" y="8" width="2" height="4" rx="0.5" fill="white" opacity="0.4"/>
        </svg>
        <span className="text-2xl font-bold tracking-tight text-text">
          Gufi<span className="text-primary">Cars</span>
        </span>
      </div>
      <div className="mt-6 flex gap-1.5">
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0ms' }} />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '150ms' }} />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '300ms' }} />
      </div>
      <p className="mt-4 text-sm text-text-muted">Memuat...</p>
    </div>
  )
}
