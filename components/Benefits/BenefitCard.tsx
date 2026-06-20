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
        style={{ width: 'clamp(48px, 10vw, 72px)', height: 'clamp(48px, 10vw, 72px)', fontSize: 'clamp(18px, 4vw, 28px)' }}
      >
        {icon}
      </span>
      <h3
        className="mt-2 font-semibold text-gray-900 sm:mt-4"
        style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}
      >
        {title}
      </h3>
      <p
        className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-base"
      >
        {desc}
      </p>
    </div>
  )
}
