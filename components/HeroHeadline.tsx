'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

interface HeroHeadlineProps {
  text: string
  showAboutButton?: boolean
}

export default function HeroHeadline({ text, showAboutButton = true }: HeroHeadlineProps) {
  // Split text into words for stagger animation
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Headline with Stagger Animation */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontStyle: 'italic',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* About Me Button with Magnetic Effect */}
      {showAboutButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="/about">
            <MagneticButton className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white text-sm font-medium transition-all duration-200 shadow-pill hover:shadow-pill-hover">
              about me
            </MagneticButton>
          </Link>
        </motion.div>
      )}
    </div>
  )
}
