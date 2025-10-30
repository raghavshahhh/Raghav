# Images Directory

## Required Images

### Profile Image
- **File**: `profile.webp`
- **Size**: 400x400px (will be displayed at 200x200px on desktop, 150x150px on mobile)
- **Format**: WebP (or PNG/JPG - Next.js will convert)
- **Description**: Your professional headshot with circular crop

### Logo Images (in `/logos` folder)
Each logo should be 48x48px:
- `studio.png` - Logo for "My Studio"
- `agency.png` - Logo for "My AI Agency"
- `community.png` - Logo for "Community"
- `newsletter.png` - Logo for "Newsletter"

### Gallery Images (in `/gallery` folder)
Each image should be square (1:1 aspect ratio) or will be cropped:
- `project-1.webp` - LawAI Dashboard screenshot
- `project-2.webp` - RAGS AI Interface screenshot
- `project-3.webp` - Glow Landing Page screenshot
- `project-4.webp` - AI Automation Tool screenshot
- `project-5.webp` - SaaS Dashboard screenshot
- `project-6.webp` - Mobile App Design screenshot

## Image Optimization Tips

1. Use WebP format for best performance
2. Compress images before uploading (use tools like TinyPNG or Squoosh)
3. For gallery images, aim for 800x800px resolution
4. For logos, use PNG with transparency if needed
5. Profile image should have good lighting and clear background

## Converting to WebP

You can convert images to WebP using:
- Online: https://squoosh.app
- CLI: `cwebp input.png -o output.webp`
- Next.js will auto-convert, but pre-converting saves build time
