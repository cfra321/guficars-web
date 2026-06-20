export const COLORS = {
  primary: '#0EA5E9',
  primaryHover: '#0284C7',
  background: '#FAFAFA',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  success: '#10B981',
  error: '#EF4444',
} as const

export const SPACING = {
  8: '8px',
  12: '12px',
  16: '16px',
  24: '24px',
  32: '32px',
  48: '48px',
  64: '64px',
  96: '96px',
  160: '160px',
} as const

export const TYPOGRAPHY = {
  hero: '72px',
  title: '48px',
  section: '36px',
  body: '18px',
  small: '14px',
} as const

export const SECTIONS = [
  'Hero',
  'Story',
  'Disassemble',
  'Reassemble',
  'Discover',
  'Trust',
  'CTA',
] as const

export interface CarFilters {
  merk: string
  tahun: string
  hargaMax: string
  lokasi: string
}

export const NAV_LINKS = [
  { label: 'Beranda', path: '/' },
  { label: 'Mobil', path: '/mobil' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Cara Beli', path: '/cara-beli' },
  { label: 'Kontak', path: '/kontak' },
] as const
