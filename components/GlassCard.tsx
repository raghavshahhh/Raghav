'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface GlassCardProps {
  logo: string
  title: string
  subtitle: string
  href?: string
  delay?: number
}

export default function GlassCard({ logo, title, subtitle, href, delay = 0 }: GlassCardProps) {
  const cardContent = (
    <motion.div
      className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-zinc-900/50 backdrop-blur-md rounded-xl md:rounded-2xl ring-1 ring-white/5 shadow-glass cursor-pointer group"
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Logo - Responsive size */}
      <motion.div
        className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 relative bg-white/5 rounded-lg md:rounded-xl overflow-hidden"
        whileHover={{
          rotate: 360,
          transition: { duration: 0.6, ease: 'easeInOut' }
        }}
      >
        <Image
          src={logo}
          alt={`${title} logo`}
          fill
          className="object-contain p-1.5 md:p-2"
          sizes="(max-width: 768px) 48px, 64px"
        />
      </motion.div>

      {/* Content - Responsive text */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm md:text-base font-semibold text-white mb-0.5 md:mb-1 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 leading-snug md:leading-relaxed group-hover:text-gray-300 transition-colors">
          {subtitle}
        </p>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    )
  }

  return cardContent
}
