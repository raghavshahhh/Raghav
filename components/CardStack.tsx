'use client'

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const cards = [
  {
    id: 'ragspro',
    logo: '/images/logos/ragspro.jpg',
    title: 'RAGSPRO AGENCY',
    subtitle: 'AI Software Agency building intelligent automation solutions for modern businesses.',
    href: 'https://ragspro.com',
  },
  {
    id: 'lawai',
    logo: '/images/logos/lawai.png',
    title: 'LawAI',
    subtitle: 'AI-powered legal automation platform with document processing and workflow management.',
    href: 'https://lawai.ragspro.com',
  },
  {
    id: 'glow',
    logo: '/images/logos/glow.png',
    title: 'Glow',
    subtitle: 'Modern web application with stunning UI/UX design and advanced animations.',
    href: 'https://glow.ragspro.com',
  },
  {
    id: 'ragsai',
    logo: '/images/logos/ragsai.png',
    title: 'RAGS AI',
    subtitle: 'Jarvis-style AI assistant with voice recognition and Mac integration.',
    href: '#ragsai',
  },
]

export default function CardStack() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <motion.div
      className="w-full space-y-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <motion.div key={card.id} variants={item}>
          <GlassCard
            logo={card.logo}
            title={card.title}
            subtitle={card.subtitle}
            href={card.href}
            delay={0}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
