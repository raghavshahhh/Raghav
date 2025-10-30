'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Youtube } from 'lucide-react'

interface SocialPillProps {
  platform: 'instagram' | 'linkedin' | 'youtube'
  url: string
  delay?: number
}

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
}

const labelMap = {
  instagram: '@raghavshahhh',
  linkedin: 'Raghav Shah',
  youtube: 'RAGS Pro',
}

// Colorful icon styles
const iconStyles = {
  instagram: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
  linkedin: 'bg-[#0A66C2]',
  youtube: 'bg-[#FF0000]',
}

export default function SocialPill({ platform, url, delay = 0 }: SocialPillProps) {
  const Icon = iconMap[platform]
  const label = labelMap[platform]

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-800 rounded-full text-white text-[11px] font-medium shadow-pill cursor-pointer"
      aria-label={`Visit ${label} profile`}
      whileHover={{
        scale: 1.08,
        backgroundColor: 'rgb(63, 63, 70)',
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 20
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`${iconStyles[platform]} p-0.5 rounded`}
        whileHover={{
          rotate: 360,
          transition: { duration: 0.5 }
        }}
      >
        <Icon className="w-2.5 h-2.5 text-white" />
      </motion.div>
      <span>{label}</span>
    </motion.a>
  )
}
