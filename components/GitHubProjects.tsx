'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// GitHub repos data - newest first (add new repos at the top)
const githubRepos = [
  {
    id: 'ragspro-agency',
    name: 'RAGSPRO AGENCY',
    description: 'AI Software Agency building intelligent automation solutions for modern businesses.',
    language: 'TypeScript',
    stars: 0,
    repoUrl: 'https://github.com/raghavshahhh/ragspro-agency',
    liveUrl: null,
    image: '/images/logos/ragspro.jpg',
  },
  {
    id: 'lawai',
    name: 'LawAI',
    description: 'AI-powered legal automation platform with document processing and workflow management.',
    language: 'TypeScript',
    stars: 0,
    repoUrl: 'https://github.com/raghavshahhh/lawai',
    liveUrl: null,
    image: '/images/logos/lawai.png',
  },
  {
    id: 'lead-genrater',
    name: 'lead-genrater',
    description: 'Premium Lead Generation Bot - Fully Automatic Lead Generation & Outreach System. Generate HIGH-PAYING international clients and automatically send personalized messages!',
    language: 'Python',
    stars: 1,
    repoUrl: 'https://github.com/raghavshahhh/lead-genrater',
    liveUrl: null,
    image: null,
  },
  {
    id: 'ragspro',
    name: 'RAGSPRO',
    description: 'RAGSPRO - Premium Portfolio & Agency Website with 3D Animations',
    language: 'JavaScript',
    stars: 2,
    repoUrl: 'https://github.com/raghavshahhh/RAGSPRO',
    liveUrl: 'https://ragspro.com',
    image: null,
  },
  {
    id: 'rags-ai',
    name: 'RAGS-AI',
    description: 'Jarvis-style AI Assistant with voice recognition, Hindi support, and Mac integration',
    language: 'TypeScript',
    stars: 1,
    repoUrl: 'https://github.com/raghavshahhh/RAGS-AI',
    liveUrl: null,
    image: null,
  },
  {
    id: 'maid-agency',
    name: 'maid-agency',
    description: 'Maid Agency Management System - Modern web application for agency management',
    language: 'JavaScript',
    stars: 1,
    repoUrl: 'https://github.com/raghavshahhh/maid-agency',
    liveUrl: null,
    image: null,
  },
  {
    id: 'glow',
    name: 'glow',
    description: 'Modern web application with stunning UI/UX design and advanced animations',
    language: 'JavaScript',
    stars: 1,
    repoUrl: 'https://github.com/raghavshahhh/glow',
    liveUrl: 'https://glow.ragspro.com',
    image: null,
  },
]

const languageColors: Record<string, string> = {
  Python: 'bg-[#3572A5]',
  JavaScript: 'bg-[#f1e05a]',
  TypeScript: 'bg-[#3178c6]',
  HTML: 'bg-[#e34c26]',
  CSS: 'bg-[#563d7c]',
  default: 'bg-gray-400',
}

export default function GitHubProjects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <div className="w-full">
      {/* Section Header */}
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-white" />
          <h2 className="text-lg font-semibold text-white">GitHub Projects</h2>
        </div>
        <a
          href="https://github.com/raghavshahhh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          View all
          <ExternalLink className="w-3 h-3" />
        </a>
      </motion.div>

      {/* Scrollable Projects Container */}
      <div className="relative">
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {githubRepos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={item}
              className="flex-shrink-0 w-[280px] snap-start"
            >
              <motion.div
                className="h-full bg-zinc-900/50 backdrop-blur-md rounded-xl p-5 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                {/* Project Image */}
                {repo.image && (
                  <div className="relative w-full h-24 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={repo.image}
                      alt={repo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Repo Name */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors truncate pr-2">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Star className="w-3.5 h-3.5" />
                    <span className="text-xs">{repo.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                  {repo.description || 'No description available'}
                </p>

                {/* Language */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      languageColors[repo.language] || languageColors.default
                    }`}
                  />
                  <span className="text-xs text-gray-400">{repo.language}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator Gradient */}
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
