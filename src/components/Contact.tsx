'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import { personalInfo } from '@/app/data'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: new FormData(e.currentTarget), headers: { Accept: 'application/json' } })
      if (res.ok) { setStatus('sent'); (e.target as HTMLFormElement).reset() } else setStatus('error')
    } catch { setStatus('error') }
  }
  const links = [
    { icon: '📧', label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: '💼', label: 'linkedin.com/in/shaikh-tohid', href: personalInfo.linkedin },
    { icon: '⚡', label: 'github.com/T786-eng', href: personalInfo.github },
    { icon: '📱', label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  ]
  return (
    <section id="contact" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#7c6cfc' }}>// get in touch</p>
            <h2 className="font-black text-3xl md:text-4xl tracking-tight text-white mb-4">Let&apos;s <span className="text-gradient">build</span><br/>something great.</h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">Open to full-time roles, internships, and interesting projects. Building at scale — let&apos;s talk.</p>
            <div className="space-y-3">
              {links.map(l => (
                <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.07] rounded-xl px-5 py-3.5 hover:border-white/15 transition-all group">
                  <span className="text-lg flex-shrink-0">{l.icon}</span>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{l.label}</span>
                  <svg className="ml-auto text-zinc-700 group-hover:text-zinc-400 transition-colors flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[{ label: 'Your Name', name: 'name', type: 'text', placeholder: 'Rahul Sharma' }, { label: 'Email', name: 'email', type: 'email', placeholder: 'rahul@company.com' }].map(f => (
                <div key={f.name} className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{f.label}</label>
                  <input type={f.type} name={f.name} required placeholder={f.placeholder} className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-purple-500/40 transition-colors"/>
                </div>
              ))}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea name="message" required rows={5} placeholder="I'd like to discuss an opportunity..." className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-purple-500/40 transition-colors resize-none"/>
              </div>
              <button type="submit" disabled={status==='sending'||status==='sent'} className="w-full text-white font-bold py-4 rounded-xl text-sm hover:opacity-90 transition-all disabled:opacity-60" style={{ background: 'linear-gradient(135deg, #7c6cfc, #06b6d4)' }}>
                {status==='idle'&&'Send Message →'}{status==='sending'&&'Sending...'}{status==='sent'&&'✓ Sent!'}{status==='error'&&'Error — email directly'}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
