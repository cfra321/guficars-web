const CONTACT_INFO = [
  { label: 'Alamat', value: 'Jl. Sudirman No. 123, Jakarta Pusat 10220' },
  { label: 'Telepon', value: '(021) 1234-5678' },
  { label: 'WhatsApp', value: '0812-3456-7890' },
  { label: 'Email', value: 'hello@guficars.com' },
  { label: 'Jam Operasional', value: 'Senin - Sabtu, 08:00 - 20.00 WIB' },
]

export default function KontakSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-40" style={{ contain: 'layout style paint' }}>
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/[0.02] blur-[80px]" />
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
            Hubungi Kami
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-primary">Kontak</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Punya pertanyaan? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {info.label}
                </p>
                <p className="mt-1 text-sm text-gray-900 sm:text-lg">{info.value}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-gray-900">Kirim Pesan</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-primary/50"
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-primary/50"
              />
              <textarea
                placeholder="Pesan Anda"
                rows={4}
                className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-primary/50"
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
  )
}
