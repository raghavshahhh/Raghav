'use client'

import ProfileSection from '@/components/ProfileSection'
import SocialLinks from '@/components/SocialLinks'
import HeroHeadline from '@/components/HeroHeadline'
import CardStack from '@/components/CardStack'
import PhotoGallery from '@/components/PhotoGallery'
import ScrollReveal from '@/components/ScrollReveal'
import SmoothCursor from '@/components/SmoothCursor'
import FloatingElements from '@/components/FloatingElements'

// Portfolio data
const portfolioData = {
  profile: {
    name: 'Raghav Shah',
    image: '/images/IMG_4245.jpg',
    headline: 'I build intelligent AI products.',
  },
  socialLinks: {
    instagram: 'https://instagram.com/raghavshahhh',
    linkedin: 'https://www.linkedin.com/in/bhupederpratap/',
    youtube: 'https://youtube.com/@ragspro',
  },
  gallery: [
    { id: '1', src: '/images/gallery/project-1.webp', alt: 'LawAI Dashboard' },
    { id: '2', src: '/images/gallery/project-2.webp', alt: 'RAGS AI Interface' },
    { id: '3', src: '/images/gallery/project-3.webp', alt: 'Glow Landing Page' },
    { id: '4', src: '/images/gallery/project-4.webp', alt: 'AI Automation Tool' },
    { id: '5', src: '/images/gallery/project-5.webp', alt: 'SaaS Dashboard' },
    { id: '6', src: '/images/gallery/project-6.webp', alt: 'Mobile App Design' },
  ],
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

          {/* Photo Gallery */}
          <ScrollReveal delay={0.5}>
            <PhotoGallery images={portfolioData.gallery} />
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
