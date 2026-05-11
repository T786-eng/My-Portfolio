import FadeIn from './FadeIn'
import { projects } from '@/app/data'

const icons: Record<number, string> = { 1: '🔐', 2: '🧠', 3: '📊', 4: '⚡' }

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/[0.06] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#7c6cfc' }}>PROJECTS</p>
          <h2 className="font-black text-3xl md:text-4xl text-white mb-16">Things I&apos;ve <span className="text-gradient">built</span></h2>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={0.08 * i}>
              <div className="border border-white/[0.07] rounded-2xl p-7 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: i % 2 === 0 ? 'linear-gradient(90deg,rgba(124,108,252,0.4),transparent)' : 'linear-gradient(90deg,rgba(6,182,212,0.4),transparent)' }} />

                <div className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-white/[0.08]" style={{ background: 'rgba(124,108,252,0.08)' }}>
                    {icons[p.id]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <p className="font-mono text-xs text-zinc-600 mb-1">{p.number} · {p.category}</p>
                        <h3 className="font-bold text-lg text-white">{p.title}</h3>
                        {/* Stack inline like Mohit */}
                        <p className="text-xs text-zinc-600 mt-1">{p.stack.join(' · ')}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <a href={p.github} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium border border-white/10 text-zinc-400 px-3 py-1.5 rounded-lg hover:border-white/25 hover:text-white transition-all">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                          GitHub
                        </a>
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-3 py-1.5 rounded-lg transition-all"
                            style={{ background: 'linear-gradient(135deg,#7c6cfc,#06b6d4)' }}>
                            ⚡ Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.description}</p>

                    {/* Metrics as bullet points like Mohit */}
                    <div className="space-y-1.5">
                      {p.metrics.map(m => (
                        <div key={m.label} className="flex items-center gap-2 text-sm text-zinc-500">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7c6cfc' }} />
                          <span><strong className="text-zinc-300">{m.value}</strong> — {m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
