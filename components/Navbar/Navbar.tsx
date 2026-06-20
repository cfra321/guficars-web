'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const activeIndex = NAV_LINKS.findIndex((l) => l.path === pathname)
  const isHomePage = pathname === '/'
  const needsLightText = isHomePage && !scrolled

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 120)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <style jsx>{`
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #0EA5E9 !important;
        }
        .nav-link.active {
          color: #0EA5E9 !important;
        }
        .nav-link-underline {
          width: 0;
          height: 2px;
          border-radius: 999px;
          background: #0EA5E9;
          margin-top: 12px;
          transition: width 0.3s ease;
        }
        .nav-link.active .nav-link-underline {
          width: 32px;
        }
        .navbar-scroll {
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease, height 0.3s ease;
        }
        .mobile-panel {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hamburger-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      `}</style>

      <header
        ref={headerRef}
        className="navbar-scroll fixed top-0 right-0 left-0 z-50 flex items-center"
        style={{
          height: scrolled ? '72px' : '80px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(4px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(4px)',
          borderBottom: needsLightText ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <nav className="mx-auto flex h-full w-full max-w-[1280px] items-center px-8">
          <div className="flex items-center" style={{ width: '140px' }}>
            <Link href="/" className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#0EA5E9"/>
                <path d="M7 18C7 16.5 8.5 14 11 14c2.5 0 4 2.5 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="9.5" cy="19" r="1" fill="white"/>
                <circle cx="13.5" cy="19" r="1" fill="white"/>
                <rect x="18" y="10" width="4" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="20" y="8" width="2" height="4" rx="0.5" fill="white" opacity="0.4"/>
              </svg>
              <span className={`text-xl font-bold tracking-tight ${needsLightText ? 'text-white' : 'text-gray-900'}`}>
                Gufi<span style={{ color: '#0EA5E9' }}>Cars</span>
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="hidden items-center lg:flex" style={{ gap: '48px' }}>
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nav-link text-sm font-medium ${i === activeIndex ? 'active' : ''}`}
                  style={{
                    color: i === activeIndex ? '#0EA5E9' : (needsLightText ? 'rgba(255,255,255,0.8)' : 'rgba(15,23,42,0.7)'),
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  <span className="flex flex-col items-center">
                    {link.label}
                    <span className="nav-link-underline" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end" style={{ width: '140px' }}>
            <Link
              href="/login"
              className="hidden items-center gap-2 text-sm font-medium transition-all duration-300 lg:flex"
              style={{
                background: needsLightText ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: needsLightText ? '#FFFFFF' : '#0F172A',
                border: needsLightText ? '1px solid rgba(255,255,255,0.35)' : '1px solid rgba(15,23,42,0.25)',
                borderRadius: '999px',
                height: '44px',
                padding: '0 24px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0EA5E9'
                e.currentTarget.style.borderColor = '#0EA5E9'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = needsLightText ? 'rgba(255,255,255,0.15)' : 'transparent'
                e.currentTarget.style.borderColor = needsLightText ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.25)'
                e.currentTarget.style.color = needsLightText ? '#FFFFFF' : '#0F172A'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              Login
            </Link>

            <button
              className={`hamburger flex flex-col items-center justify-center gap-1.5 lg:hidden ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ width: 32, height: 32 }}
            >
              <span className={`hamburger-line block h-0.5 w-5 rounded-full ${needsLightText ? 'bg-white' : 'bg-gray-800'}`} />
              <span className={`hamburger-line block h-0.5 w-5 rounded-full ${needsLightText ? 'bg-white' : 'bg-gray-800'}`} />
              <span className={`hamburger-line block h-0.5 w-5 rounded-full ${needsLightText ? 'bg-white' : 'bg-gray-800'}`} />
            </button>
          </div>
        </nav>
      </header>

      <div className="fixed inset-0 z-40 lg:hidden" style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}>
        <div
          className="absolute inset-0 bg-black/20"
          style={{ opacity: mobileOpen ? 1 : 0, transition: 'opacity 0.4s ease' }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="mobile-panel absolute top-0 right-0 flex h-full w-72 flex-col"
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-6" style={{ height: '80px' }}>
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
              Gufi<span style={{ color: '#0EA5E9' }}>Cars</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-gray-100"
                style={{
                  color: i === activeIndex ? '#0EA5E9' : 'rgba(15,23,42,0.7)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto border-t border-gray-200 px-6 py-6">
            <Link
              href="/login"
              className="flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300"
              style={{
                background: 'transparent',
                color: '#0F172A',
                borderColor: 'rgba(15,23,42,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0EA5E9'
                e.currentTarget.style.borderColor = '#0EA5E9'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(15,23,42,0.25)'
                e.currentTarget.style.color = '#0F172A'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
