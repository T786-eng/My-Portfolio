import { personalInfo } from '@/app/data'
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,108,252,0.05) 0%, transparent 70%)' }} />
        <p className="font-mono text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#7c6cfc' }}>// open to work</p>
        <h2 className="font-black text-white tracking-tight mb-8 leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>Let&apos;s Connect</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #7c6cfc, #06b6d4)' }}>📧 Email Me</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 font-medium px-8 py-4 rounded-xl text-sm border border-white/15 hover:border-white/30 hover:text-white transition-all hover:-translate-y-0.5">💼 LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 font-medium px-8 py-4 rounded-xl text-sm border border-white/15 hover:border-white/30 hover:text-white transition-all hover:-translate-y-0.5">⚡ GitHub</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
        <p className="font-mono text-xs text-zinc-700">Built by <span style={{ color: '#a78bfa' }}>Tohid Shaikh</span> · Next.js + Tailwind · 2026</p>
        <div className="flex gap-5">
          {[{ href: personalInfo.github, label: 'GitHub' }, { href: personalInfo.linkedin, label: 'LinkedIn' }, { href: `mailto:${personalInfo.email}`, label: 'Email' }].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="font-mono text-xs text-zinc-700 hover:text-zinc-400 transition-colors">{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
