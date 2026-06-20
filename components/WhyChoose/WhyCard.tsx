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
      className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm md:h-[360px]"
      style={{ borderRadius: '24px' }}
    >
      <div className="relative h-48 w-full overflow-hidden md:h-1/2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-600 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-5 md:h-1/2">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
      </div>
    </div>
  )
}
