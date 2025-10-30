'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  const elements = [
    { size: 300, duration: 20, delay: 0, x: '10%', y: '20%' },
    { size: 200, duration: 25, delay: 2, x: '80%', y: '60%' },
    { size: 250, duration: 30, delay: 4, x: '60%', y: '80%' },
    { size: 180, duration: 22, delay: 1, x: '30%', y: '70%' },
    { size: 220, duration: 28, delay: 3, x: '90%', y: '30%' },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: `radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

