import { useState } from 'react'
import type { CarFilters } from '@/lib/constants'

export default function SearchBar({ onSearch }: { onSearch?: (f: CarFilters) => void }) {
  const [merk, setMerk] = useState('')
  const [tahun, setTahun] = useState('')
  const [hargaMax, setHargaMax] = useState('')
  const [lokasi, setLokasi] = useState('')

  const handleSearch = () => {
    onSearch?.({ merk, tahun, hargaMax, lokasi })
  }

  return (
    <div
      className="w-full"
      style={{
        maxWidth: '1060px',
        borderRadius: '20px',
        background: 'white',
        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
        padding: '24px',
      }}
    >
      <div className="flex flex-col gap-3 sm:h-full sm:flex-row sm:items-center" style={{ gap: '16px' }}>
        <input
          type="text"
          placeholder="Cari merk, model, atau tipe mobil..."
          value={merk}
          onChange={(e) => setMerk(e.target.value)}
          className="w-full rounded-xl border px-4 text-sm outline-none transition-all focus:shadow-[0_0_0_3px_rgba(14,165,233,0.2)] focus:border-sky-500 sm:flex-1"
          style={{
            height: '56px',
            borderColor: '#E4E4E7',
            borderRadius: '12px',
            color: '#18181B',
          }}
        />

        <div className="flex gap-3 sm:hidden">
          <select
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            className="flex-1 rounded-xl border px-3 text-sm"
            style={{
              height: '48px',
              borderColor: '#E4E4E7',
              borderRadius: '12px',
              color: '#71717A',
              background: 'white',
            }}
          >
            <option value="">Tahun</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>

          <select
            value={hargaMax}
            onChange={(e) => setHargaMax(e.target.value)}
            className="flex-1 rounded-xl border px-3 text-sm"
            style={{
              height: '48px',
              borderColor: '#E4E4E7',
              borderRadius: '12px',
              color: '#71717A',
              background: 'white',
            }}
          >
            <option value="">Harga</option>
            <option value="200">Rp 200jt</option>
            <option value="300">Rp 300jt</option>
            <option value="400">Rp 400jt</option>
            <option value="500">Rp 500jt</option>
            <option value="600">Rp 600jt</option>
          </select>
        </div>

        <div className="flex gap-3 sm:hidden">
          <select
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            className="flex-1 rounded-xl border px-3 text-sm"
            style={{
              height: '48px',
              borderColor: '#E4E4E7',
              borderRadius: '12px',
              color: '#71717A',
              background: 'white',
            }}
          >
            <option value="">Lokasi</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Tangerang">Tangerang</option>
            <option value="Surabaya">Surabaya</option>
            <option value="Bekasi">Bekasi</option>
          </select>

          <button
            onClick={handleSearch}
            className="flex flex-1 items-center justify-center rounded-xl bg-[#0EA5E9] text-sm font-semibold text-white transition-all hover:bg-[#0284C7]"
            style={{
              height: '48px',
              borderRadius: '12px',
            }}
          >
            Cari
          </button>
        </div>

        <select
          value={tahun}
          onChange={(e) => setTahun(e.target.value)}
          className="hidden rounded-xl border px-4 text-sm sm:block"
          style={{
            height: '56px',
            borderColor: '#E4E4E7',
            borderRadius: '12px',
            color: '#71717A',
            minWidth: '120px',
            background: 'white',
          }}
        >
          <option value="">Tahun</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>

        <select
          value={hargaMax}
          onChange={(e) => setHargaMax(e.target.value)}
          className="hidden rounded-xl border px-4 text-sm sm:block"
          style={{
            height: '56px',
            borderColor: '#E4E4E7',
            borderRadius: '12px',
            color: '#71717A',
            minWidth: '120px',
            background: 'white',
          }}
        >
          <option value="">Harga Max</option>
          <option value="200">Rp 200 juta</option>
          <option value="300">Rp 300 juta</option>
          <option value="400">Rp 400 juta</option>
          <option value="500">Rp 500 juta</option>
          <option value="600">Rp 600 juta</option>
        </select>

        <select
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
          className="hidden rounded-xl border px-4 text-sm sm:block"
          style={{
            height: '56px',
            borderColor: '#E4E4E7',
            borderRadius: '12px',
            color: '#71717A',
            minWidth: '120px',
            background: 'white',
          }}
        >
          <option value="">Lokasi</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Tangerang">Tangerang</option>
          <option value="Surabaya">Surabaya</option>
          <option value="Bekasi">Bekasi</option>
        </select>

        <button
          onClick={handleSearch}
          className="hidden items-center justify-center rounded-xl bg-[#0EA5E9] text-sm font-semibold text-white transition-all hover:bg-[#0284C7] sm:flex"
          style={{
            height: '56px',
            width: '160px',
            borderRadius: '12px',
          }}
        >
          Cari Mobil
        </button>
      </div>
    </div>
  )
}
