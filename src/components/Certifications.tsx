'use client'
import FadeIn from './FadeIn'
import { certifications } from '@/app/data'

// Real uploaded logos mapped to each issuer
const issuerConfig: Record<string, {
  logo: string
  logoBg: string
  logoStyle: React.CSSProperties
  certLogo: string
  certLogoStyle: React.CSSProperties
}> = {
  'Google Cloud': {
    logo: '/badges/logo-google-g.webp',     // G icon for small badge
    logoBg: '#fff',
    logoStyle: { height: '28px', width: '28px', objectFit: 'contain' },
    certLogo: '/badges/logo-google.webp',   // full Google wordmark inside cert
    certLogoStyle: { height: '20px', width: 'auto', objectFit: 'contain', maxWidth: '110px' },
  },
  'IBM SkillsBuild': {
    logo: '/badges/logo-ibm.webp',
    logoBg: '#fff',
    logoStyle: { height: '22px', width: 'auto', objectFit: 'contain', maxWidth: '60px' },
    certLogo: '/badges/logo-ibm.webp',
    certLogoStyle: { height: '18px', width: 'auto', objectFit: 'contain', maxWidth: '80px' },
  },
  'Cisco Networking Academy': {
    logo: '/badges/logo-cisco.webp',
    logoBg: '#fff',
    logoStyle: { height: '22px', width: 'auto', objectFit: 'contain', maxWidth: '80px' },
    certLogo: '/badges/logo-cisco.webp',
    certLogoStyle: { height: '18px', width: 'auto', objectFit: 'contain', maxWidth: '90px' },
  },
  'McKinsey.org': {
    logo: '/badges/logo-mckinsey.webp',
    logoBg: '#fff',
    logoStyle: { height: '26px', width: 'auto', objectFit: 'contain', maxWidth: '80px' },
    certLogo: '/badges/logo-mckinsey.webp',
    certLogoStyle: { height: '22px', width: 'auto', objectFit: 'contain', maxWidth: '90px' },
  },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-white/[0.06] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#7c6cfc' }}>CERTIFICATIONS</p>
          <h2 className="font-black text-3xl md:text-4xl text-white mb-3">
            Verified <span className="text-gradient">credentials</span>
          </h2>
          <p className="text-zinc-500 text-sm mb-14">Click any certificate to verify on the issuer&apos;s official website.</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const cfg = issuerConfig[cert.issuer]
            return (
              <FadeIn key={cert.name} delay={0.08 * i}>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-white/[0.07] rounded-2xl overflow-hidden group hover:border-white/25 transition-all hover:-translate-y-1.5"
                  style={{ background: 'rgba(255,255,255,0.015)' }}
                >
                  {/* Certificate mockup area */}
                  <div
                    className="relative flex items-center justify-center px-6 py-5"
                    style={{
                      background: `linear-gradient(160deg, ${cert.color}12 0%, rgba(10,10,14,0.97) 100%)`,
                      borderBottom: `1px solid rgba(255,255,255,0.06)`,
                    }}
                  >
                    {/* White certificate card */}
                    <div
                      className="w-full max-w-[215px] rounded-xl shadow-2xl overflow-hidden"
                      style={{ background: '#ffffff' }}
                    >
                      {/* Header band with issuer color */}
                      <div
                        className="flex items-center justify-center px-4 py-3"
                        style={{ borderBottom: `2px solid ${cert.color}30` }}
                      >
                        {/* Real logo image */}
                        {cfg && (
                          <img
                            src={cfg.certLogo}
                            alt={cert.issuer}
                            style={cfg.certLogoStyle}
                          />
                        )}
                      </div>

                      {/* Certificate body */}
                      <div className="flex flex-col items-center px-4 py-4 gap-1">
                        <p className="text-[7px] text-gray-400 tracking-widest uppercase">This certifies that</p>
                        <p className="text-[12px] font-bold text-gray-800 leading-tight">Tohid Shaikh</p>
                        <p className="text-[7px] text-gray-400 text-center">has successfully completed</p>
                        <p
                          className="text-[8px] font-semibold text-center leading-snug mt-1 px-2"
                          style={{ color: cert.color }}
                        >
                          {cert.name}
                        </p>
                        {/* Signature line + badge */}
                        <div className="flex items-center justify-between w-full mt-3 pt-2" style={{ borderTop: `1px solid ${cert.color}20` }}>
                          <div>
                            <div className="w-12 h-[1px]" style={{ background: '#d1d5db' }} />
                            <p className="text-[6px] text-gray-400 mt-0.5">Authorized by</p>
                          </div>
                          {/* Verified badge */}
                          <div
                            className="w-7 h-7 rounded-full border-2 flex items-center justify-center"
                            style={{ borderColor: cert.color }}
                          >
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card footer info */}
                  <div className="p-5 flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-white mb-0.5 leading-snug">{cert.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {/* Small real logo in footer */}
                        {cfg && (
                          <div className="flex-shrink-0 bg-white rounded px-1.5 py-0.5 flex items-center">
                            <img
                              src={cfg.logo}
                              alt={cert.issuer}
                              style={cfg.logoStyle}
                            />
                          </div>
                        )}
                        <p className="font-mono text-xs text-zinc-500">{cert.date}</p>
                      </div>
                    </div>
                    <div
                      className="flex-shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold mt-1"
                      style={{ color: cert.color }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verify ↗
                    </div>
                  </div>
                </a>
              </FadeIn>
            )
          })}
        </div>

        <p className="text-center font-mono text-xs text-zinc-700 mt-8">
          All credentials are publicly verifiable on issuer platforms
        </p>
      </div>
    </section>
  )
}
