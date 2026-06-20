import Image from 'next/image'

const STEPS = [
  {
    num: '01',
    title: 'Inspeksi Detail',
    desc: 'Setiap mobil diperiksa menyeluruh oleh teknisi ahli kami.',
    image: '/story/inspection.webp',
  },
  {
    num: '02',
    title: 'Kualitas Terjamin',
    desc: 'Hanya mobil dengan kondisi terbaik yang lolos seleksi.',
    image: '/story/interior.webp',
  },
  {
    num: '03',
    title: 'Harga Transparan',
    desc: 'Nikmati harga tanpa biaya tersembunyi. Apa yang Anda lihat, itu yang Anda bayar.',
    image: '/story/detail-headlamp.webp',
  },
  {
    num: '04',
    title: 'Siap Dikirim',
    desc: 'Mobil sudah detail, disertifikasi, dan siap diantar ke rumah Anda.',
    image: '/story/quality-check.webp',
  },
]

export default function StoryContent() {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Perjalanan Anda,
        <br />
        <span className="text-primary">Kemudahan</span>
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            data-story-step
            className="group flex items-start gap-4 sm:gap-6"
          >
            <div className="flex-1 border-l-2 border-gray-200 pl-4 transition-colors hover:border-primary sm:pl-6">
              <span className="mb-2 block text-sm font-medium text-primary">
                {step.num}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {step.desc}
              </p>
            </div>
            <div className={`relative mt-2 hidden h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl shadow-md md:block ${i % 2 === 0 ? 'order-last' : ''}`}>
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="80px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
