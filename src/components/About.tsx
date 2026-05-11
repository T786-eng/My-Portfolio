import FadeIn from './FadeIn'

export default function About() {
  const codeContent = [
    { type: 'brace', text: '{' },
    { type: 'key-str', key: '"role"', val: '"Backend & ML Engineer"' },
    { type: 'key-arr-open', key: '"expertise"', text: '[' },
    { type: 'str', text: '  "Distributed Systems",' },
    { type: 'str', text: '  "LLM-Integrated Pipelines",' },
    { type: 'str', text: '  "Cryptographic Networks"' },
    { type: 'arr-close', text: '],' },
    { type: 'key-arr-open', key: '"shipped"', text: '[' },
    { type: 'str', text: '  "UPI Offline Mesh — RSA+AES",' },
    { type: 'str', text: '  "Vector DB from scratch",' },
    { type: 'str', text: '  "5M+ record UIDAI pipeline"' },
    { type: 'arr-close', text: '],' },
    { type: 'key-str', key: '"status"', val: '"Actively interviewing"' },
    { type: 'key-str', key: '"open_to"', val: '"Full-time · Backend · ML"' },
    { type: 'brace', text: '}' },
  ]

  return (
    <section id="about" className="py-28 border-t border-white/[0.06] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#7c6cfc' }}>ABOUT</p>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <h2 className="font-black text-3xl md:text-4xl text-white mb-8 leading-tight">
              Building systems that <span className="text-gradient">actually work</span> at scale.
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>
                I <strong className="text-zinc-200 font-semibold">architect</strong> and <strong className="text-zinc-200 font-semibold">ship</strong> production-grade backend systems and ML pipelines — not toy demos. My work spans encrypted payment mesh networks, custom vector databases built from scratch, and large-scale data engines processing 5M+ records.
              </p>
              <p>
                I <strong className="text-zinc-200 font-semibold">don't just train models</strong> — I engineer the infrastructure that makes them production-ready. Gossip-protocol networks, multithreaded DPI engines, RAG pipelines with sub-200ms latency — I own the full stack from algorithm design to deployment.
              </p>
              <p>
                Delivered <strong className="text-zinc-200 font-semibold">measurable impact</strong> as an ML Engineer at <strong className="text-zinc-200 font-semibold">Edunet Foundation × IBM SkillsBuild</strong> and <strong className="text-zinc-200 font-semibold">3Skill</strong> — drove fraud recall from 61% to 84% on live financial data, reducing false negatives by 38%.
              </p>
              <p>
                Actively seeking <strong className="font-semibold" style={{ color: '#a78bfa' }}>backend engineering, ML infrastructure, or full-stack roles</strong> at companies building at scale — where I can own systems end-to-end and ship things that matter.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ background: '#0d0d10' }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#111115' }}>
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                <span className="ml-3 text-xs text-zinc-600 font-mono">tohid.config.json</span>
              </div>
              <div className="p-5 text-xs font-mono leading-7 overflow-x-auto">
                {codeContent.map((line, i) => (
                  <div key={i}>
                    {line.type === 'brace' && <span style={{ color: '#71717a' }}>{line.text}</span>}
                    {line.type === 'key-str' && (
                      <span>
                        {'  '}<span style={{ color: '#e879f9' }}>{line.key}</span>
                        <span style={{ color: '#71717a' }}>: </span>
                        <span style={{ color: '#4ade80' }}>{line.val}</span>
                        <span style={{ color: '#71717a' }}>,</span>
                      </span>
                    )}
                    {line.type === 'key-arr-open' && (
                      <span>
                        {'  '}<span style={{ color: '#e879f9' }}>{line.key}</span>
                        <span style={{ color: '#71717a' }}>: {line.text}</span>
                      </span>
                    )}
                    {line.type === 'str' && <span style={{ color: '#4ade80' }}>{'  '}{line.text}</span>}
                    {line.type === 'arr-close' && <span style={{ color: '#71717a' }}>{'  '}{line.text}</span>}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
