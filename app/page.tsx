'use client'

import ProfileSection from '@/components/ProfileSection'
import SocialLinks from '@/components/SocialLinks'
import HeroHeadline from '@/components/HeroHeadline'
import CardStack from '@/components/CardStack'
import ScrollReveal from '@/components/ScrollReveal'
import SmoothCursor from '@/components/SmoothCursor'
import FloatingElements from '@/components/FloatingElements'
import GitHubProjects from '@/components/GitHubProjects'

// Portfolio data
const portfolioData = {
  profile: {
    name: 'Raghav Shah',
    image: '/images/IMG_4245.jpg',
    headline: 'I build intelligent AI products.',
  },
  socialLinks: {
    instagram: 'https://instagram.com/raghavshahhh',
    linkedin: 'https://www.linkedin.com/in/raghavshahhh/',
    youtube: 'https://youtube.com/@raghavshahh?si=iR2m5BLxuDW7MngK',
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Custom Cursor */}
      <SmoothCursor />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 md:py-24">
        <div className="w-full max-w-lg mx-auto">
          {/* Profile Section */}
          <ScrollReveal delay={0.1}>
            <div className="mb-8">
              <ProfileSection
                name={portfolioData.profile.name}
                profileImage={portfolioData.profile.image}
              />
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={0.2}>
            <div className="mb-12">
              <SocialLinks
                instagram={portfolioData.socialLinks.instagram}
                linkedin={portfolioData.socialLinks.linkedin}
                youtube={portfolioData.socialLinks.youtube}
              />
            </div>
          </ScrollReveal>

          {/* Hero Headline */}
          <ScrollReveal delay={0.3}>
            <div className="mb-12">
              <HeroHeadline text={portfolioData.profile.headline} />
            </div>
          </ScrollReveal>

          {/* Glass Card Stack */}
          <ScrollReveal delay={0.4}>
            <div className="mb-16">
              <CardStack />
            </div>
          </ScrollReveal>

          {/* GitHub Projects - Scrollable */}
          <ScrollReveal delay={0.5}>
            <div className="mb-16">
              <GitHubProjects />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
