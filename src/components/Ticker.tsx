import { tickerItems } from '@/app/data'

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className="relative z-10 py-6 overflow-hidden border-y border-white/[0.06]"
      style={{ background: 'rgba(124,108,252,0.02)', transform: 'skewY(-1.5deg)', margin: '0 -20px' }}>
      <div style={{ transform: 'skewY(1.5deg)' }}>
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6 whitespace-nowrap">
              <span className="font-mono text-xs text-zinc-500 tracking-[0.15em] uppercase">{item}</span>
              <span className="text-xs" style={{ color: '#7c6cfc' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
