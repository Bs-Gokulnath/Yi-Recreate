import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Carousel({ images = [], interval = 5000, height = "500px" }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
  const autoSlide = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, interval);
  return () => clearInterval(autoSlide);
}, [images.length, interval]);


  const nextSlide = () => setCurrent((current + 1) % images.length)
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length)

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl bg-white/30 backdrop-blur-md"
      style={{ height }}
  
    >
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 rounded-full ${
              current === idx ? "w-8 bg-gray-600" : "w-2 bg-gray-300"
            }`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </div>
  )
}
