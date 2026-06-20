export default function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
  return (
    <div
      data-benefit
      className="flex flex-col items-center text-center"
    >
      <span
        className="flex items-center justify-center rounded-full bg-gray-100 text-primary"
        style={{ width: '72px', height: '72px', fontSize: '28px' }}
      >
        {icon}
      </span>
      <h3
        className="mt-4 font-semibold text-gray-900"
        style={{ fontSize: '24px' }}
      >
        {title}
      </h3>
      <p
        className="mt-2 text-gray-500"
        style={{ fontSize: '16px' }}
      >
        {desc}
      </p>
    </div>
  )
}
