export default function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#7c6cfc' }}>{eyebrow}</p>
      <h2 className="font-black text-3xl md:text-4xl tracking-tight text-white mb-3">{title}</h2>
      {subtitle && <p className="text-zinc-400 text-base max-w-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}
