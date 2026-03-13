'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; r: number }
type Particle = { x: number; y: number; vy: number }
type Ripple = { x: number; y: number; r: number; born: number }

export default function FooterCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frameId: number
    let width = 0
    let height = 0
    let lastRipple = 0

    let nodes: Node[] = []
    let particles: Particle[] = []
    let ripples: Ripple[] = []

    const init = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = canvas.width = rect.width
      height = canvas.height = rect.height

      nodes = Array.from({ length: 14 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 2 + Math.random() * 3,
      }))

      particles = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: 0.15 + Math.random() * 0.35,
      }))

      ripples = []
    }

    const draw = (ts: number) => {
      ctx.clearRect(0, 0, width, height)

      if (ts - lastRipple > 4000) {
        ripples.push({ x: Math.random() * width, y: Math.random() * height, r: 0, born: ts })
        lastRipple = ts
      }

      // Bond network
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > width) a.vx *= -1
        if (a.y < 0 || a.y > height) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const d = Math.hypot(b.x - a.x, b.y - a.y)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(79,195,247,${(1 - d / 110) * 0.12})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(79,195,247,0.18)'
        ctx.fill()
      }

      // Ripples
      ripples = ripples.filter((rp) => {
        const age = (ts - rp.born) / 3000
        if (age > 1) return false
        rp.r = age * 70
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(79,195,247,${(1 - age) * 0.18})`
        ctx.lineWidth = 0.8
        ctx.stroke()
        return true
      })

      // Particles
      particles.forEach((p) => {
        p.y -= p.vy
        if (p.y < -4) p.y = height + 4
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(79,195,247,0.12)'
        ctx.fill()
      })

      frameId = requestAnimationFrame(draw)
    }

    init()
    frameId = requestAnimationFrame(draw)
    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

