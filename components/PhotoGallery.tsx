'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  alt: string
}

interface PhotoGalleryProps {
  images: GalleryImage[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <>
      {/* Gallery Container with Border */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-zinc-900/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 ring-1 ring-white/10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                layoutId={`image-${image.id}`}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900/50 cursor-pointer group"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-all duration-300 group-hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Modal Image */}
            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="relative w-full max-w-5xl aspect-square md:aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            </motion.div>

            {/* Image Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full"
            >
              <p className="text-white text-sm md:text-base font-medium">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
