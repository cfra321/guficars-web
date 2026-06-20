import Image from 'next/image'

interface CarPart {
  label: string
  x: number
  y: number
}

const PARTS: CarPart[] = [
  { label: 'Mesin', x: 10, y: 10 },
  { label: 'Transmisi', x: 40, y: 15 },
  { label: 'Suspensi', x: 60, y: 20 },
  { label: 'Rem', x: 80, y: 25 },
  { label: 'Elektronik', x: 50, y: 60 },
  { label: 'Interior', x: 30, y: 70 },
]

const IMG_SIZES = '(max-width: 1024px) 100vw, 50vw'
const WHEEL_SIZES = '(max-width: 1024px) 20vw, 10vw'

export default function CarDisassemble() {
  return (
    <div className="relative aspect-[4/3] w-full">
      <div data-car-shadow className="absolute inset-0 opacity-30 mix-blend-multiply">
        <Image src="/car-story/shadow.webp" alt="" fill className="object-contain" sizes={IMG_SIZES} />
      </div>

      <div data-car-body className="absolute inset-0 z-10">
        <Image src="/car-story/body.webp" alt="Car disassembly" fill className="rounded-xl object-cover" sizes={IMG_SIZES} />
      </div>

      <div data-car-light className="absolute inset-0 z-20 opacity-40 mix-blend-overlay">
        <Image src="/car-story/light.webp" alt="" fill className="object-contain" sizes={IMG_SIZES} />
      </div>

      <div data-car-wheel-left className="absolute z-20" style={{ left: '15%', top: '55%', width: '22%', height: '18%' }}>
        <Image src="/car-story/wheel-left.webp" alt="" fill className="object-contain" sizes={WHEEL_SIZES} />
      </div>

      <div data-car-wheel-right className="absolute z-20" style={{ left: '62%', top: '55%', width: '22%', height: '18%' }}>
        <Image src="/car-story/wheel-right.webp" alt="" fill className="object-contain" sizes={WHEEL_SIZES} />
      </div>

      {PARTS.map(({ label, x, y }) => (
        <div key={label} data-car-part className="absolute z-30 flex items-center gap-1.5" style={{ left: `${x}%`, top: `${y}%` }}>
          <span className="h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
          <span className="text-xs font-medium text-gray-900">{label}</span>
        </div>
      ))}
    </div>
  )
}
