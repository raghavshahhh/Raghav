'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ProfileSectionProps {
  name: string
  profileImage: string
}

export default function ProfileSection({ name, profileImage }: ProfileSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Profile Image with Parallax */}
      <motion.div
        className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
        style={{ y, scale }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={profileImage}
            alt="Profile photo"
            fill
            priority
            className="rounded-full object-cover ring-2 ring-white/10"
            sizes="(max-width: 768px) 120px, 150px"
          />
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
