import Link from 'next/link'
import Image from 'next/image'
import FavoriteButton from './FavoriteButton'

export default function CarCard({
  id,
  name,
  meta,
  price,
  location,
  image,
}: {
  id: string
  name: string
  meta: string
  price: string
  location: string
  image: string
}) {
  return (
    <Link
      href={`/mobil/${id}`}
      data-card
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02]"
      style={{
        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        borderRadius: '20px',
      }}
    >
      <div className="relative overflow-hidden" style={{ height: '260px' }}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-600 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <FavoriteButton />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-semibold" style={{ fontSize: '20px', color: '#18181B' }}>
          {name}
        </h3>
        <p className="mt-1" style={{ fontSize: '14px', color: '#71717A' }}>
          {meta}
        </p>
        <p className="mt-2 font-bold" style={{ fontSize: '32px', color: '#0EA5E9' }}>
          {price}
        </p>
        <p className="mt-auto pt-2" style={{ fontSize: '14px', color: '#71717A' }}>
          📍 {location}
        </p>
      </div>
    </Link>
  )
}
