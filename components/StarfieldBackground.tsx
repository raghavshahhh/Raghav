'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.warn('Canvas not supported, falling back to static background')
      return
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      console.log('Reduced motion preferred, skipping animation')
      return
    }

    // Determine particle count based on device
    const isMobile = window.innerWidth < 768
    const numStars = isMobile ? 100 : 200

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Initialize stars with random positions
      starsRef.current = Array.from({ length: numStars }, () => ({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * canvas.width,
      }))
    }

    const draw = () => {
      // Fill background with black
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      ctx.fillStyle = '#ffffff'
      
      for (const star of starsRef.current) {
        // Move star toward viewer
        star.z -= 2

        // Reset star if it passes the viewer
        if (star.z <= 0) {
          star.z = canvas.width
          star.x = (Math.random() - 0.5) * canvas.width
          star.y = (Math.random() - 0.5) * canvas.height
        }

        // Calculate 3D projection
        const k = 128.0 / star.z
        const px = star.x * k + canvas.width / 2
        const py = star.y * k + canvas.height / 2

        // Only draw if star is within viewport
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          // Calculate size based on depth (closer = bigger)
          const size = (1 - star.z / canvas.width) * 2
          const opacity = 1 - star.z / canvas.width

          ctx.globalAlpha = opacity
          ctx.beginPath()
          ctx.arc(px, py, size, 0, 2 * Math.PI)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    // Initialize
    resize()
    draw()

    // Handle window resize
    const handleResize = () => {
      resize()
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 bg-black opacity-60"
      aria-hidden="true"
    />
  )
}
