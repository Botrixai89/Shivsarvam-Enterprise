'use client'

import React, { useEffect, useRef } from 'react'

export function MolecularBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let nodes: Node[] = []
    let width = 0
    let height = 0
    let mouseX = 0
    let mouseY = 0
    let zoom = 1
    let zoomDirection = 1

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.color = '#AEEBFF'
      }

      update() {
        this.x += this.speedX + (mouseX - width/2) * 0.0005
        this.y += this.speedY + (mouseY - height/2) * 0.0005

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width
        if (this.y > height) this.y = 0
        else if (this.y < 0) this.y = height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * zoom, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = 0.3
        ctx.fill()
      }
    }

    class Node {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = 5
        this.speedX = (Math.random() - 0.5) * 0.15
        this.speedY = (Math.random() - 0.5) * 0.15
        this.color = '#4FC3FF'
      }

      update() {
        this.x += this.speedX + (mouseX - width/2) * 0.001
        this.y += this.speedY + (mouseY - height/2) * 0.001

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width
        if (this.y > height) this.y = 0
        else if (this.y < 0) this.y = height
      }

      draw() {
        if (!ctx) return
        ctx.save()
        
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.globalAlpha = 0.9
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * zoom, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        
        ctx.restore()
      }
    }

    const drawConnections = () => {
      if (!ctx) return
      ctx.lineWidth = 1.2
      ctx.strokeStyle = '#2E6BFF'
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.globalAlpha = (1 - distance / 150) * 0.6
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      particles = Array.from({ length: 50 }, () => new Particle())
      nodes = Array.from({ length: 40 }, () => new Node())
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      zoom += 0.0001 * zoomDirection
      if (zoom > 1.05 || zoom < 0.95) zoomDirection *= -1

      particles.forEach(p => {
        p.update()
        p.draw()
      })

      drawConnections()

      nodes.forEach(n => {
        n.update()
        n.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('resize', init)
    window.addEventListener('mousemove', handleMouseMove)
    init()
    animate()

    return () => {
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
      style={{ background: 'transparent' }}
    />
  )
}
