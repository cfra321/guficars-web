export default function CaraBeliSection() {
  return (
    <section className="relative overflow-hidden py-40" style={{ contain: 'layout style paint' }}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-primary/[0.02] blur-[80px]" />
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Panduan
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Cara <span className="text-primary">Membeli</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Ikuti langkah mudah berikut untuk mendapatkan mobil impian Anda.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <span className="text-5xl font-bold text-primary/30">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    number: '01',
    title: 'Cari Mobil Impian',
    desc: 'Gunakan fitur pencarian untuk menemukan mobil yang sesuai dengan kebutuhan dan budget Anda.',
  },
  {
    number: '02',
    title: 'Inspeksi Detail',
    desc: 'Setiap mobil melalui 120 titik inspeksi ketat oleh teknisi berpengalaman kami.',
  },
  {
    number: '03',
    title: 'Pengajuan Pembelian',
    desc: 'Ajukan pembelian secara online. Tim kami akan menghubungi Anda dalam 1x24 jam.',
  },
  {
    number: '04',
    title: 'Pembayaran & Pengiriman',
    desc: 'Lakukan pembayaran aman melalui rekening bersama. Mobil diantar gratis ke lokasi Anda.',
  },
]
