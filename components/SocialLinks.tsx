'use client'

import { motion } from 'framer-motion'
import SocialPill from './SocialPill'

interface SocialLinksProps {
  instagram: string
  linkedin: string
  youtube: string
}

export default function SocialLinks({ instagram, linkedin, youtube }: SocialLinksProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <motion.div
      className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <SocialPill platform="instagram" url={instagram} delay={0} />
      </motion.div>
      <motion.div variants={item}>
        <SocialPill platform="linkedin" url={linkedin} delay={0} />
      </motion.div>
      <motion.div variants={item}>
        <SocialPill platform="youtube" url={youtube} delay={0} />
      </motion.div>
    </motion.div>
  )
}
