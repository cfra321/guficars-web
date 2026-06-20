const FEATURES = [
  { icon: '🔒', label: 'Terpercaya' },
  { icon: '✓', label: 'Terinspeksi' },
  { icon: '💰', label: 'Harga Terbaik' },
  { icon: '🚚', label: 'Gratis Antar' },
]

export default function FeatureRow() {
  return (
    <div
      className="mt-16 flex flex-wrap"
      style={{ gap: '40px' }}
      data-hero-features
    >
      {FEATURES.map((f) => (
        <div key={f.label} className="flex items-center gap-3">
          <span
            className="flex items-center justify-center rounded-full bg-white/20 text-white"
            style={{ width: '40px', height: '40px', fontSize: '18px' }}
          >
            {f.icon}
          </span>
          <span className="text-sm font-medium text-white">{f.label}</span>
        </div>
      ))}
    </div>
  )
}
