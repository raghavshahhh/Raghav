'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import SmoothCursor from '@/components/SmoothCursor'
import FloatingElements from '@/components/FloatingElements'
import MagneticButton from '@/components/MagneticButton'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Custom Cursor */}
      <SmoothCursor />

      {/* Background */}
      <div className="fixed inset-0 bg-black z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Back Button with Magnetic Effect */}
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
              AI & Cyber Intelligence Enthusiast | SaaS Builder | Full-Stack Developer (In Progress)
            </motion.p>

            {/* Contact Info with Stagger Animation */}
            <motion.div
              className="flex flex-wrap gap-4 text-sm text-gray-400"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              <motion.a
                href="mailto:Bhupenderpratap6@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full hover:bg-zinc-800/50 hover:text-white transition-all backdrop-blur-sm ring-1 ring-white/5"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Bhupenderpratap6@gmail.com
              </motion.a>
              <motion.a
                href="tel:+918700048490"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full hover:bg-zinc-800/50 hover:text-white transition-all backdrop-blur-sm ring-1 ring-white/5"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                +91-8700048490
              </motion.a>
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full backdrop-blur-sm ring-1 ring-white/5"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <MapPin className="w-4 h-4" />
                New Delhi, India
              </motion.div>
              <motion.a
                href="https://linkedin.com/in/bhupnder-pratap-71a5291b2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/30 rounded-full hover:bg-zinc-800/50 hover:text-white transition-all backdrop-blur-sm ring-1 ring-white/5"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </motion.a>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Professional Summary */}
        <ScrollReveal delay={0.2}>
          <section className="mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Summary
            </motion.h2>
            <motion.div
              className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                Tech-savvy and self-driven BCA graduate with strong skills in AI, SaaS, web development, and
                cyber intelligence. Hands-on experience building a voice-controlled AI assistant (RAGS),
                developing SaaS dashboard concepts, and creating responsive web applications. Quick learner
                with problem-solving mindset and automation experience.
              </p>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Key Skills */}
        <ScrollReveal delay={0.3}>
          <section className="mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Skills
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">Programming & Web Dev</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">HTML, CSS, JavaScript (learning), Python (Automation & AI)</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">Cyber Intelligence</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">OSINT, Threat Modeling (Beginner)</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">SaaS & UI/UX</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">Dashboard Prototyping, Feature Locking System, Plan-Based Access</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">IT & Data</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">MS Excel, Google Sheets Automation, Troubleshooting</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 md:col-span-2 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Other</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">Typing 50+ WPM, Quick Learner, Adaptability</p>
              </motion.div>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Project Experience */}
        <ScrollReveal delay={0.4}>
          <section className="mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Project Experience
            </motion.h2>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {/* RAGS AI */}
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all overflow-hidden relative"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    RAGS – AI Assistant (Jarvis-Style)
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">Jan 2025 – Present</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-400">•</span>
                      <span>Built a voice-controlled AI assistant with Mac & iPhone integration.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-400">•</span>
                      <span>Implemented Hindi voice recognition, Edge TTS, and web search summarization.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-400">•</span>
                      <span>Converted Python code to standalone Mac `.app`.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-400">•</span>
                      <span>Developing GUI-based, always-on assistant with wake-word activation.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* LawAI */}
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all overflow-hidden relative"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    LawAI – SaaS Legal Automation Concept
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">2025</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-green-400">•</span>
                      <span>Designed SaaS platform concept for automating legal workflows.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-green-400">•</span>
                      <span>Planned stack: Next.js, Supabase, Prisma.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-green-400">•</span>
                      <span>Created dashboard prototypes with profile management, plan badges, and dynamic features.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Web & Productivity */}
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all overflow-hidden relative"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Web & Productivity Projects
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">2024 – Present</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-orange-400">•</span>
                      <span>Developed responsive web pages using HTML & CSS.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-orange-400">•</span>
                      <span>Built productivity tools using Google Sheets + automation.</span>
                    </li>
                    <li className="flex gap-2 group-hover:text-gray-200 transition-colors">
                      <span className="text-orange-400">•</span>
                      <span>Practiced data organization & analysis via Excel; explored OSINT & Cyber Intelligence basics.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
        </section>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={0.5}>
          <section className="mb-12">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  BCA – Maharshi Dayanand University, Rohtak
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">2022–2025</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">
                  ITI – COPA – Govt. ITI Jaffarpur, Delhi
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">2022</p>
              </motion.div>
              <motion.div
                className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  BA Political Science – University of Delhi
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">2021–2024</p>
              </motion.div>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* Links */}
        <ScrollReveal delay={0.6}>
          <section>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Links
            </motion.h2>
            <motion.div
              className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/5 group hover:ring-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              <div className="space-y-3 text-sm">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <span className="text-gray-400">LinkedIn: </span>
                  <a
                    href="https://linkedin.com/in/bhupnder-pratap-71a5291b2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300"
                  >
                    linkedin.com/in/bhupnder-pratap-71a5291b2
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <span className="text-gray-400">Portfolio: </span>
                  <span className="text-gray-300">GitHub / Project links available on request</span>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  )
}

