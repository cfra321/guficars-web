const FOOTER_LINKS = [
  { title: 'Perusahaan', links: ['Tentang Kami', 'Karir', 'Blog', 'Kebijakan Privasi'] },
  { title: 'Layanan', links: ['Beli Mobil', 'Jual Mobil', 'Pembiayaan', 'Asuransi'] },
  { title: 'Bantuan', links: ['FAQ', 'Hubungi Kami', 'Pusat Bantuan', 'Syarat & Ketentuan'] },
]

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-gray-200 bg-background py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Auto<span className="text-primary">Bekas</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Platform jual-beli mobil bekas terpercaya di Indonesia. Setiap
              mobil melalui inspeksi ketat untuk kualitas terbaik.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">
            © 2026 GufiCars. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-gray-400 transition-colors hover:text-primary"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
