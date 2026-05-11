'use client'
import { useEffect, useState } from 'react'

const MESSAGES = [
  'Initializing distributed systems...',
  'Compiling ML pipelines...',
  'Loading vector databases...',
  'Deploying backend infrastructure...',
  'Establishing secure connections...',
  'Rendering neural pathways...',
  'Almost there...',
]

const MIN_DURATION = 2400 // minimum 2.4 seconds always

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = Date.now()
    let p = 0

    // Slow deliberate progress over at least 2 seconds
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const timeRatio = Math.min(elapsed / MIN_DURATION, 1)
      // Progress tracks time but with some randomness
      p = Math.min(timeRatio * 100 * (0.85 + Math.random() * 0.15), 99)
      setProgress(Math.floor(p))
      setMsgIdx(Math.min(Math.floor(p / 15), MESSAGES.length - 1))
    }, 80)

    // Always wait at least MIN_DURATION before finishing
    const finish = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setMsgIdx(MESSAGES.length - 1)
      setTimeout(() => setGone(true), 600)
    }, MIN_DURATION)

    return () => { clearInterval(interval); clearTimeout(finish) }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ background: '#0c0c0e' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Glow */}
      <div className="absolute w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(124,108,252,0.1) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
      }} />

      <div className="relative z-10 flex flex-col items-center gap-6 w-72">
        {/* Logo */}
        <div className="font-black text-4xl tracking-tight">
          Tohid<span className="text-gradient">.</span>
        </div>

        {/* Changing message */}
        <p className="text-xs font-mono text-zinc-500 tracking-wider text-center transition-all duration-500 min-h-[18px]">
          {MESSAGES[msgIdx]}
        </p>

        {/* Progress bar */}
        <div className="w-full mt-2">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-zinc-600 font-mono">Loading</span>
            <span className="text-xs font-mono" style={{ color: '#7c6cfc' }}>{progress}%</span>
          </div>
          <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              className="h-full rounded-full transition-all duration-150"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #7c6cfc, #06b6d4)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
