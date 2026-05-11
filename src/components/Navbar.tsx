'use client'
import { useState, useEffect } from 'react'
import { personalInfo } from '@/app/data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0c0c0e]/90 backdrop-blur-xl border-b border-white/[0.06]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-black text-lg tracking-tight">Tohid<span className="text-gradient">.</span></a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => <li key={l.href}><a href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">{l.label}</a></li>)}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a href="/Shaikh_Tohid_Resume.pdf" download className="text-sm font-semibold border border-white/15 text-zinc-300 px-4 py-2 rounded-lg hover:border-white/30 hover:text-white transition-all">↓ Resume</a>
          <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all" style={{ background: 'linear-gradient(135deg, #7c6cfc, #06b6d4)' }}>Hire Me ↗</a>
        </div>
        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{open ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/> : <><line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>}</svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0c0c0e] border-t border-white/[0.06] px-6 py-4 flex flex-col gap-3">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-white py-1">{l.label}</a>)}
          <a href="/Shaikh_Tohid_Resume.pdf" download className="text-sm font-semibold text-white py-2 text-center rounded-lg mt-2" style={{ background: 'linear-gradient(135deg, #7c6cfc, #06b6d4)' }}>↓ Resume</a>
        </div>
      )}
    </nav>
  )
}
