# Bhupender Pratap - Portfolio Website

A modern, cinematic portfolio website featuring an animated 3D starfield background, glass-morphism UI components, and smooth animations. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌌 **Animated Starfield Background** - 3D particle system with moving stars
- 👤 **Centered Profile Layout** - Circular profile image with social links
- 🔗 **Social Media Integration** - Instagram, LinkedIn, YouTube pill buttons
- ✨ **Glass-Morphism Cards** - Semi-transparent cards with backdrop blur
- 🖼️ **Responsive Photo Gallery** - 2x3 grid showcasing projects
- 🎨 **Dark Cinematic Theme** - Premium futuristic aesthetic
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation
- ⚡ **Performance Optimized** - 90+ Lighthouse score, WebP images, lazy loading
- 🔍 **SEO Ready** - Meta tags, Open Graph, Twitter Cards

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ragspro-enterprise
```

2. Install dependencies:
```bash
npm install
```

3. Add your images:
   - Profile photo: `public/images/profile.webp` (400x400px)
   - Card logos: `public/images/logos/*.png` (48x48px each)
   - Gallery photos: `public/images/gallery/*.webp` (800x800px each)

4. Update content in `app/page.tsx`:
   - Change name, headline, and social links
   - Update card titles and descriptions
   - Modify gallery image paths and alt text

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── StarfieldBackground.tsx  # Animated 3D particle canvas
│   ├── ProfileSection.tsx       # Profile image and name
│   ├── SocialPill.tsx           # Social media button
│   ├── SocialLinks.tsx          # Social pills container
│   ├── HeroHeadline.tsx         # Main italic headline
│   ├── GlassCard.tsx            # Glass-morphism card
│   ├── CardStack.tsx            # Stack of glass cards
│   └── PhotoGallery.tsx         # Responsive image grid
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── images/
│       ├── profile.webp    # Profile photo
│       ├── logos/          # Card logos
│       └── gallery/        # Gallery photos
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `app/page.tsx`:

```typescript
const portfolioData = {
  profile: {
    name: 'Your Name',
    image: '/images/profile.webp',
    headline: 'Your headline here.',
  },
  socialLinks: {
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourprofile',
    youtube: 'https://youtube.com/@yourchannel',
  },
  // ... update gallery images
}
```

### Modify Card Content

Edit `components/CardStack.tsx`:

```typescript
const cards = [
  {
    id: 'your-card',
    logo: '/images/logos/your-logo.png',
    title: 'Your Title',
    subtitle: 'Your description here.',
    href: '#your-link',
  },
  // ... add more cards
]
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: {
    primary: '#0a0a0a',  // Change base color
  },
  // ... modify other colors
}
```

### Adjust Animations

Edit animation delays in components:
- `StarfieldBackground.tsx` - Particle speed (line 52: `star.z -= 2`)
- `ProfileSection.tsx` - Fade-in timing
- `GlassCard.tsx` - Hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Image Optimization**: Next/Image with WebP

## 📦 Dependencies

```json
{
  "next": "14.0.0",
  "react": "^18",
  "framer-motion": "^10.16.0",
  "lucide-react": "latest",
  "tailwindcss": "^3.3.0",
  "typescript": "^5"
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Your site will be live at `your-project.vercel.app`

### Environment Variables

No environment variables required for basic setup. Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## ⚡ Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Canvas Animation**: 60 FPS

## ♿ Accessibility

- Semantic HTML (main, section, nav)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators (ring-2 ring-white/50)
- Alt text on all images
- Color contrast: 21:1 (white on black)
- Respects prefers-reduced-motion

## 📱 Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: Last 2 versions
- Android Chrome: Last 2 versions

## 🐛 Troubleshooting

### Images not loading

- Ensure images are in `public/images/` directory
- Check file names match exactly (case-sensitive)
- Verify image formats (WebP, PNG, JPG supported)

### Starfield not animating

- Check browser console for Canvas errors
- Verify JavaScript is enabled
- Check if prefers-reduced-motion is enabled

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design inspiration: Modern portfolio websites
- Fonts: Google Fonts (Playfair Display, Inter)
- Icons: Lucide React
- Framework: Next.js by Vercel

## 📧 Contact

- **Email**: bhupenderpratap0@gmail.com
- **Phone**: +91-8700048490
- **Location**: New Delhi, India

---

Built with ❤️ by Bhupender Pratap
