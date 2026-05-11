import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'
import { skills } from '@/app/data'

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn><SectionHeader eyebrow="// tech stack" title="Technical Arsenal" /></FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((g, i) => (
            <FadeIn key={g.category} delay={0.06 * i}>
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-6 h-full">
                <p className="font-mono text-xs tracking-[0.12em] uppercase mb-4 font-medium" style={{ color: '#7c6cfc' }}>{g.category}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(item => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-300 font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
