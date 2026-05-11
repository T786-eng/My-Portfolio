import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { experience } from '@/app/data'

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn><SectionHeader eyebrow="// work history" title="Where I've Worked" /></FadeIn>
        <div className="space-y-4 max-w-3xl">
          {experience.map((e, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: i === 0 ? 'linear-gradient(90deg,rgba(124,108,252,0.5),transparent)' : 'linear-gradient(90deg,rgba(6,182,212,0.5),transparent)' }} />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-bold text-lg text-white">{e.role}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: i === 0 ? '#a78bfa' : '#22d3ee' }}>{e.company}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg whitespace-nowrap h-fit">{e.period}</span>
                </div>
                <ul className="space-y-2.5">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-1 shrink-0 text-xs" style={{ color: i === 0 ? '#a78bfa' : '#22d3ee' }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
