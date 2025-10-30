# Requirements Document

## Introduction

This document outlines the requirements for building a modern, cinematic portfolio website for Bhupender Pratap. The site will feature a dark, minimal design with an animated 3D starfield background, centered profile layout, glass-morphism cards, and smooth animations. The design is inspired by premium portfolio sites with a futuristic, space-themed aesthetic. All content will be unique and tailored to showcase Bhupender's work, skills, and social presence.

## Glossary

- **Portfolio_Site**: The Next.js web application that serves as Bhupender Pratap's personal portfolio
- **Visitor**: Any user accessing the Portfolio_Site through a web browser
- **Starfield_Background**: Animated 3D particle system creating moving stars effect using Canvas API
- **Profile_Section**: Centered section containing circular profile image, name, and social links
- **Glass_Card**: Semi-transparent card component with backdrop blur, rounded corners, and soft shadows
- **Social_Pill**: Rounded button linking to social media profiles (Instagram, LinkedIn, YouTube)
- **Photo_Gallery**: Grid layout displaying project screenshots or personal photos
- **Framer_Motion**: Animation library for React components providing fade-in and parallax effects
- **Playfair_Display**: Serif font used for italic headline text
- **Inter**: Sans-serif font used for body text and UI elements
- **Responsive_Breakpoint**: Screen width threshold where layout adapts (320px, 768px, 1024px, 1440px)

## Requirements

### Requirement 1: Animated Starfield Background

**User Story:** As a Visitor, I want to see a captivating animated background, so that the portfolio feels premium and futuristic.

#### Acceptance Criteria

1. WHEN the Portfolio_Site loads, THE Starfield_Background SHALL render 200 white particles on a black canvas
2. THE particles SHALL move continuously toward the viewer creating a 3D depth effect
3. WHEN a particle reaches the front (z-position <= 0), THE particle SHALL reset to the back of the scene
4. THE Starfield_Background SHALL be fixed position covering the entire viewport
5. THE animation SHALL run at 60 frames per second using requestAnimationFrame

### Requirement 2: Profile Section

**User Story:** As a Visitor, I want to see Bhupender's profile and social links immediately, so that I can connect with him on my preferred platform.

#### Acceptance Criteria

1. WHEN the Portfolio_Site loads, THE Profile_Section SHALL display a circular profile image (200px diameter) centered on the page
2. THE Profile_Section SHALL display "Bhupender Pratap" below the image in white text
3. THE Profile_Section SHALL display three Social_Pill buttons horizontally aligned (Instagram, LinkedIn, YouTube)
4. EACH Social_Pill SHALL have a rounded-full shape, icon on the left, and platform name on the right
5. WHEN a Visitor hovers over a Social_Pill, THE button SHALL scale to 105% and increase shadow over 0.2 seconds

### Requirement 3: Hero Headline

**User Story:** As a Visitor, I want to understand Bhupender's expertise immediately, so that I know what value he provides.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display a large italic headline below the Profile_Section reading "I build intelligent AI products."
2. THE headline SHALL use Playfair Display font in italic style with font-size 3rem (desktop) or 2rem (mobile)
3. THE headline SHALL be white text with subtle text-shadow for depth
4. WHEN the Portfolio_Site loads, THE headline SHALL fade in from opacity 0 to 1 with upward translation over 0.8 seconds
5. THE Portfolio_Site SHALL display a small "About Me" button below the headline with rounded-full styling

### Requirement 4: Glass-Morphism Cards

**User Story:** As a Visitor, I want to see Bhupender's projects and services in an organized way, so that I can explore what interests me.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display 4 Glass_Card components in a vertical stack below the headline
2. EACH Glass_Card SHALL have rounded-2xl corners, bg-zinc-900/50 background, backdrop-blur-md effect, and ring-1 ring-white/5 border
3. EACH Glass_Card SHALL display a small square logo (48px) on the left and text content on the right (title + subtitle)
4. WHEN a Visitor hovers over a Glass_Card, THE card SHALL translate upward by 4px with smooth transition
5. THE cards SHALL have soft shadow: shadow-[0_0_30px_rgba(255,255,255,0.03)]

### Requirement 5: Card Content

**User Story:** As a Visitor, I want to read about Bhupender's ventures and offerings, so that I can decide how to engage with him.

#### Acceptance Criteria

1. THE first Glass_Card SHALL display "My Studio" as title and "Building startups for clients using AI automation" as subtitle
2. THE second Glass_Card SHALL display "My AI Agency" as title and "Helping businesses integrate AI workflows" as subtitle
3. THE third Glass_Card SHALL display "Community" as title and "Learn with 100+ AI founders" as subtitle
4. THE fourth Glass_Card SHALL display "Newsletter" as title and "Weekly AI templates & insights" as subtitle
5. EACH card SHALL be clickable and navigate to the respective page or external link

### Requirement 6: Photo Gallery

**User Story:** As a Visitor, I want to see visual examples of Bhupender's work or personal brand, so that I can get a sense of his style and projects.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display a Photo_Gallery section below the Glass_Card stack
2. THE Photo_Gallery SHALL use a 2-column grid on mobile and 3-column grid on desktop
3. EACH photo SHALL have rounded-2xl corners and equal aspect ratio (square or 4:3)
4. THE photos SHALL have consistent spacing (gap-4 or gap-6) between items
5. WHEN a Visitor hovers over a photo, THE photo SHALL scale to 105% with smooth transition

### Requirement 7: Typography System

**User Story:** As a Visitor, I want the text to be readable and aesthetically pleasing, so that I enjoy browsing the portfolio.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use Playfair Display font (italic, 700 weight) for the main headline
2. THE Portfolio_Site SHALL use Inter font (400-600 weight) for all body text, buttons, and card content
3. THE headline SHALL have font-size 3rem (48px) on desktop and 2rem (32px) on mobile
4. THE card titles SHALL have font-size 1.125rem (18px) with font-weight 600
5. THE card subtitles SHALL have font-size 0.875rem (14px) with text-gray-400 color

### Requirement 8: Color Palette and Theme

**User Story:** As a Visitor, I want a visually cohesive dark theme, so that the portfolio feels premium and easy on the eyes.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use #0a0a0a as the base background color
2. THE Portfolio_Site SHALL use a radial gradient from #0a0a0a to #000 for subtle depth
3. THE Glass_Card components SHALL use bg-zinc-900/50 with 50% opacity
4. THE text SHALL be white (#ffffff) for headings and text-gray-300 for body text
5. THE Social_Pill buttons SHALL have bg-zinc-800 background with hover state bg-zinc-700

### Requirement 9: Entry Animations

**User Story:** As a Visitor, I want smooth entrance animations, so that the content feels polished and engaging.

#### Acceptance Criteria

1. WHEN the Portfolio_Site loads, THE Profile_Section SHALL fade in from opacity 0 to 1 over 0.6 seconds
2. THE headline SHALL fade in with upward translation (y: 20px to 0) over 0.8 seconds with 0.2 second delay
3. THE Glass_Card components SHALL fade in with staggered delays (0.1 second increment per card)
4. THE Photo_Gallery items SHALL fade in with staggered delays when entering viewport
5. ALL animations SHALL use ease-out timing function

### Requirement 10: Hover Interactions

**User Story:** As a Visitor, I want interactive feedback when hovering over elements, so that I know what is clickable.

#### Acceptance Criteria

1. WHEN a Visitor hovers over a Social_Pill, THE button SHALL scale to 105% and shadow SHALL increase
2. WHEN a Visitor hovers over a Glass_Card, THE card SHALL translate upward by 4px (hover:-translate-y-1)
3. WHEN a Visitor hovers over a Photo_Gallery item, THE photo SHALL scale to 105%
4. ALL hover transitions SHALL complete in 0.2 seconds with ease-in-out timing
5. THE cursor SHALL change to pointer when hovering over interactive elements

### Requirement 11: Social Media Links

**User Story:** As a Visitor, I want to connect with Bhupender on social platforms, so that I can follow his work and stay updated.

#### Acceptance Criteria

1. THE Instagram Social_Pill SHALL link to Bhupender's Instagram profile and open in a new tab
2. THE LinkedIn Social_Pill SHALL link to Bhupender's LinkedIn profile (https://linkedin.com/in/bhupender-pratap) and open in a new tab
3. THE YouTube Social_Pill SHALL link to Bhupender's YouTube channel and open in a new tab
4. EACH Social_Pill SHALL display the platform icon from Lucide React or Heroicons
5. WHEN a Visitor clicks a Social_Pill, THE link SHALL open in a new tab with rel="noopener noreferrer"

### Requirement 12: Responsive Design

**User Story:** As a Visitor, I want the site to work perfectly on any device, so that I can access it from mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL be fully responsive at breakpoints: 320px, 768px, 1024px, and 1440px
2. WHERE the viewport width is below 768px, THE Social_Pill buttons SHALL stack vertically
3. WHERE the viewport width is below 768px, THE Photo_Gallery SHALL display 2 columns
4. WHERE the viewport width is above 768px, THE Photo_Gallery SHALL display 3 columns
5. THE profile image SHALL be 150px diameter on mobile and 200px on desktop

### Requirement 13: Performance Optimization

**User Story:** As a Visitor, I want the site to load quickly and run smoothly, so that I have a seamless browsing experience.

#### Acceptance Criteria

1. THE Starfield_Background animation SHALL maintain 60 FPS on devices with 2x CPU throttling
2. THE Portfolio_Site SHALL use Next/Image for the profile photo and gallery images with WebP format
3. THE Portfolio_Site SHALL lazy-load gallery images below the fold
4. THE Portfolio_Site SHALL achieve a Lighthouse performance score of 90 or higher
5. THE Portfolio_Site SHALL preload Playfair Display and Inter fonts to prevent layout shift

### Requirement 14: SEO and Metadata

**User Story:** As a Visitor, I want to share the portfolio on social media with proper previews, so that others can discover Bhupender's work.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL include a title meta tag: "Bhupender Pratap - AI Product Builder & Full-Stack Developer"
2. THE Portfolio_Site SHALL include a description meta tag summarizing Bhupender's expertise
3. THE Portfolio_Site SHALL include Open Graph meta tags (og:title, og:description, og:image, og:url)
4. THE Portfolio_Site SHALL include Twitter Card meta tags for proper social sharing
5. THE Portfolio_Site SHALL include a favicon in multiple sizes (16x16, 32x32, 180x180)

### Requirement 15: Accessibility

**User Story:** As a Visitor with disabilities, I want to navigate and interact with the site using assistive technologies, so that I can access all content.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use semantic HTML elements (main, section, nav, article)
2. ALL interactive elements (Social_Pill, Glass_Card, photos) SHALL have visible focus states with ring-2 ring-white/50
3. THE profile image SHALL include alt text: "Bhupender Pratap profile photo"
4. ALL gallery images SHALL include descriptive alt text
5. THE Starfield_Background animation SHALL respect prefers-reduced-motion media query and pause if user prefers reduced motion
