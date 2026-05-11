'use client'
import { useEffect, useRef } from 'react'

export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let id: number
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 900),
      r: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.18 + 0.03,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.012 + 0.003,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        d.phase += d.phaseSpeed
        const a = 0.1 + 0.2 * Math.sin(d.phase)
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill()
        d.y += d.speed
        if (d.y > canvas.height) { d.y = 0; d.x = Math.random() * canvas.width }
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />
}
