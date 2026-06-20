import Image from 'next/image'

export default function WhyCard({
  title,
  desc,
  image,
}: {
  title: string
  desc: string
  image: string
}) {
  return (
    <div
      data-why-card
      className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm"
      style={{
        height: '360px',
        borderRadius: '24px',
      }}
    >
      <div className="relative h-1/2 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-600 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex h-1/2 flex-col justify-center px-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
      </div>
    </div>
  )
}
