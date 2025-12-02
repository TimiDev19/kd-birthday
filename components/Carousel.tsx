"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel()

  const scrollPrev = () => embla && embla.scrollPrev()
  const scrollNext = () => embla && embla.scrollNext()

  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-full h-[80vh] flex-[0_0_100%] px-4 py-6">
            <div className="bg-blue-100 h-[60vh] rounded-xl p-6 text-center text-lg font-semibold">
              Happy birthday! 🎉
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  )
}
