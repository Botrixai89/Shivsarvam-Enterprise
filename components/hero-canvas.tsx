'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

type Ripple = {
  x: number
  y: number
  start: number
}

type MicroParticle = {
  x: number
  y: number
  speed: number
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = canvas.clientWidth
    let height = canvas.clientHeight

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    // Chemical bond network nodes
    const nodeCount = 20
    const nodes: Node[] = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }))

    // Liquid ripples
    const ripples: Ripple[] = []

    // Floating micro particles
    const microParticles: MicroParticle[] = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.4,
    }))

    let lastRippleTime = performance.now()

    const animate = () => {
      const now = performance.now()
      ctx.clearRect(0, 0, width, height)

      // Update and draw chemical bond network
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i]
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        ctx.beginPath()
        ctx.fillStyle = 'rgba(79,195,247,0.35)'
        ctx.arc(node.x, node.y, 4 + Math.random() * 3, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 120

          if (dist < maxDist) {
            const alpha = 0.18 * (1 - dist / maxDist)
            ctx.strokeStyle = `rgba(47,107,255,${alpha.toFixed(3)})`
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      }

      // Spawn liquid ripple every ~3–4 seconds
      if (now - lastRippleTime > 3000 + Math.random() * 1000) {
        ripples.push({
          x: Math.random() * width,
          y: Math.random() * height,
          start: now,
        })
        lastRippleTime = now
      }

      // Draw ripples
      const rippleDuration = 2500
      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        const ripple = ripples[i]
        const t = (now - ripple.start) / rippleDuration
        if (t > 1) {
          ripples.splice(i, 1)
          continue
        }
        const radius = 80 * t
        const alpha = 0.3 * (1 - t)
        ctx.beginPath()
        ctx.strokeStyle = `rgba(79,195,247,${alpha.toFixed(3)})`
        ctx.lineWidth = 1
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Floating micro particles
      ctx.fillStyle = 'rgba(47,107,255,0.15)'
      microParticles.forEach((p) => {
        p.y -= p.speed
        if (p.y < -5) {
          p.y = height + 5
          p.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}

