'use client'
import { motion } from 'framer-motion'
import { personalInfo, stats } from '@/app/data'

const f = (d = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } })

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: 'rgba(124,108,252,0.06)' }} />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(6,182,212,0.05)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div {...f(0.05)} className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border" style={{ background: 'rgba(124,108,252,0.08)', borderColor: 'rgba(124,108,252,0.25)', color: '#a78bfa' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#7c6cfc' }} />
            Available for opportunities · Gujarat, India
          </span>
        </motion.div>

        {/* Clean big name — Inter not Syne */}
        <div className="mb-6">
          <motion.h1 {...f(0.1)} className="font-black leading-[0.88] tracking-[-0.04em] text-white" style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)' }}>
            Tohid
          </motion.h1>
          <motion.h1 {...f(0.17)} className="font-black leading-[0.88] tracking-[-0.04em] text-gradient" style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)' }}>
            Shaikh
          </motion.h1>
        </div>

        <motion.p {...f(0.24)} className="text-sm font-mono text-zinc-500 tracking-[0.18em] uppercase mb-8">
          Backend Engineer · ML Engineer · Distributed Systems
        </motion.p>

        <motion.p {...f(0.3)} className="text-zinc-400 text-base max-w-2xl mb-10 leading-relaxed font-normal">
          {personalInfo.description}
        </motion.p>

        <motion.div {...f(0.36)} className="flex flex-wrap gap-3 mb-14">
          <a href="#projects" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #7c6cfc, #06b6d4)' }}>
            View Projects →
          </a>
          <a href="/Shaikh_Tohid_Resume.pdf" download className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm border transition-all hover:-translate-y-0.5" style={{ borderColor: 'rgba(124,108,252,0.4)', color: '#a78bfa' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Resume
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-400 font-medium px-6 py-3 rounded-xl text-sm border border-white/10 hover:border-white/25 hover:text-white transition-all hover:-translate-y-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-400 font-medium px-6 py-3 rounded-xl text-sm border border-white/10 hover:border-white/25 hover:text-white transition-all hover:-translate-y-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </motion.div>

        {/* Stats row — always visible */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: i % 2 === 0 ? 'linear-gradient(90deg,rgba(124,108,252,0.4),transparent)' : 'linear-gradient(90deg,rgba(6,182,212,0.4),transparent)' }} />
              <div className="font-black text-2xl text-white mb-1">{s.value}</div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">Currently</div>
            <div className="font-semibold text-white text-xs">B.Tech · Electrical Eng.</div>
            <div className="font-mono text-[10px] text-zinc-600 mt-0.5">GEC Dahod · Jun 2026</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
