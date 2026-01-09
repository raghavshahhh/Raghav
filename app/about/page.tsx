'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import SmoothCursor from '@/components/SmoothCursor'
import FloatingElements from '@/components/FloatingElements'
import MagneticButton from '@/components/MagneticButton'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      <FloatingElements />
      <SmoothCursor />
      <div className="fixed inset-0 bg-black z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/">
            <MagneticButton className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-800/50 rounded-full text-gray-400 hover:text-white transition-colors backdrop-blur-md ring-1 ring-white/5">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              BHUPENDER PRATAP
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI & Automation Builder | SaaS Developer | Full-Stack Developer
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap gap-3 text-sm text-gray-400"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.5 },
                },
              }}
            >
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full backdrop-blur-sm ring-1 ring-white/5"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <MapPin className="w-4 h-4" />
                New Delhi, India
              </motion.div>
              <motion.a
                href="mailto:bhupenderpratap6@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full hover:bg-zinc-800/50 hover:text-white transition-all backdrop-blur-sm ring-1 ring-white/5"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Mail className="w-4 h-4" />
                bhupenderpratap6@gmail.com
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/raghavshahhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full hover:bg-zinc-800/50 hover:text-white transition-all backdrop-blur-sm ring-1 ring-white/5"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/raghavshahhh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full hover:bg-zinc-800/50 hover:text-white transition-all backdrop-blur-sm ring-1 ring-white/5"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* About Me */}
        <ScrollReveal delay={0.2}>
          <section className="mb-12">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">About Me</motion.h2>
            <motion.div
              className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
              whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a tech-focused builder working at the intersection of AI, automation, SaaS, and full-stack development. Currently pursuing my BCA, I spend most of my time designing and building real-world systems — not just learning theory.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I've worked on projects ranging from AI assistants and SaaS platforms to lead generation and automation systems for agencies and businesses. My approach is simple: build practical solutions that reduce manual work, scale easily, and actually solve problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm especially interested in AI-driven workflows, backend automation, SaaS architecture, and system design, and I enjoy taking ideas from concept to working prototypes.
              </p>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* What I'm Working On */}
        <ScrollReveal delay={0.3}>
          <section className="mb-12">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What I'm Working On</motion.h2>
            <motion.div className="space-y-4">
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">RagsPro — AI & Automation Agency</h3>
                <p className="text-gray-300 text-sm">Building and experimenting with automation systems for lead generation, internal tools, dashboards, and AI-powered workflows aimed at agencies and service-based businesses.</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">LAW AI — Legal Automation SaaS</h3>
                <p className="text-gray-300 text-sm">A SaaS product focused on automating legal workflows, document handling, and structured dashboards using modern web and AI tools.</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">RAGS — AI Assistant (Jarvis-Style)</h3>
                <p className="text-gray-300 text-sm">An experimental voice-based AI assistant built to understand commands, respond via speech, and execute basic automation tasks. Currently in development with focus on stability, voice handling, and system-level integration.</p>
              </motion.div>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Skills & Technologies */}
        <ScrollReveal delay={0.4}>
          <section className="mb-12">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Skills & Technologies</motion.h2>
            <motion.div className="grid md:grid-cols-2 gap-4">
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">Programming & Full-Stack</h3>
                <p className="text-gray-300 text-sm">HTML, CSS, JavaScript, Python (automation, scripting, AI integration), React & Next.js (SaaS-focused)</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">AI & Automation</h3>
                <p className="text-gray-300 text-sm">AI workflows & prompt-based systems, Python automation & API integrations, Google Sheets automation, Voice AI (speech-to-text, text-to-speech)</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">SaaS & System Design</h3>
                <p className="text-gray-300 text-sm">Dashboard design & prototyping, Plan-based access & feature locking, Auth flows, role-based layouts, onboarding concepts</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">iOS App Development</h3>
                <p className="text-gray-300 text-sm">Building native iOS apps, Swift & SwiftUI development, App Store deployment, Mobile UI/UX design, Cross-platform solutions</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 md:col-span-2 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Tools & Platforms</h3>
                <p className="text-gray-300 text-sm">Supabase, Prisma, Git & GitHub, Google Sheets, Excel, macOS-based automation workflows</p>
              </motion.div>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Projects & Experience */}
        <ScrollReveal delay={0.5}>
          <section className="mb-12">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Projects & Experience</motion.h2>
            <motion.div className="space-y-4">
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">RAGS — AI Assistant (Prototype)</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Voice-controlled assistant with Hindi speech recognition</li>
                  <li>• Text-to-speech using Edge TTS</li>
                  <li>• Python-based logic converted into a standalone macOS app</li>
                  <li>• Ongoing work on GUI, wake-word activation, and stability</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">LAW AI — SaaS Legal Automation</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Designed SaaS architecture and dashboard concepts</li>
                  <li>• Planned modern tech stack (Next.js, Supabase, Prisma)</li>
                  <li>• Focused on legal workflow automation and scalability</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Web & Automation Projects</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Responsive websites using HTML & CSS</li>
                  <li>• Automation tools using Google Sheets and Python</li>
                  <li>• Data organization, analysis, and productivity workflows</li>
                </ul>
              </motion.div>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={0.6}>
          <section className="mb-12">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Education</motion.h2>
            <motion.div className="space-y-4">
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">BCA — Maharshi Dayanand University, Rohtak</h3>
                <p className="text-sm text-gray-400">2022–2025</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">ITI (COPA) — Govt. ITI Jaffarpur, Delhi</h3>
                <p className="text-sm text-gray-400">2022</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">BA Political Science — University of Delhi</h3>
                <p className="text-sm text-gray-400">2021–2024</p>
              </motion.div>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Current Focus */}
        <ScrollReveal delay={0.7}>
          <section className="mb-12">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Current Focus</motion.h2>
            <motion.div
              className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <ul className="space-y-2 text-gray-300">
                <li>• Building production-ready SaaS systems</li>
                <li>• Improving AI automation reliability</li>
                <li>• Learning scalable backend & system architecture</li>
                <li>• Turning experiments into real products</li>
              </ul>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Let's Build */}
        <ScrollReveal delay={0.8}>
          <section>
            <motion.h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Build</motion.h2>
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/10 group hover:ring-white/20 transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <p className="text-gray-300 leading-relaxed">
                I'm open to collaborations, internships, freelance work, and startup opportunities where I can build, experiment, and ship real systems.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:bhupenderpratap6@gmail.com"
                  className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="https://github.com/raghavshahhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  )
}
