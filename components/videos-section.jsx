"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const videos = [
  {
    thumbnail: "/coffee-brewing-video-thumbnail-dark-aesthetic.jpg",
    title: "Magic Roast Coffee",
  },
  {
    thumbnail: "/coffee-brew-preparation-video-thumbnail.jpg",
    title: "Coffee Brew",
  },
  {
    thumbnail: "/placeholder.svg?height=400&width=250",
    title: "Bharat Araku Coffee",
  },
  {
    thumbnail: "/placeholder.svg?height=400&width=250",
    title: "Rich Flavor Roast",
  },
  {
    thumbnail: "/placeholder.svg?height=400&width=250",
    title: "Signature Blend",
  },
  {
    thumbnail: "/placeholder.svg?height=400&width=250",
    title: "Coffee Making",
  },
]

export function VideosSection() {
  const [currentIndex, setCurrentIndex] = useState(2)

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length)
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)

  const getVisibleVideos = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + videos.length) % videos.length
      visible.push({ ...videos[index], position: i, originalIndex: index })
    }
    return visible
  }

  return (
    <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">OUR VIDEOS</h2>

        <div className="relative flex items-center justify-center h-[400px] md:h-[450px]">
          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-4 md:left-8 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-4 md:right-8 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} className="text-[#1a1a1a]" />
          </button>

          {/* Videos Carousel */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {getVisibleVideos().map((video, index) => {
              const isCenter = video.position === 0
              const isAdjacent = Math.abs(video.position) === 1

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    isCenter
                      ? "w-48 md:w-56 h-80 md:h-96 z-10 shadow-2xl"
                      : isAdjacent
                        ? "w-36 md:w-44 h-64 md:h-80 opacity-80"
                        : "w-28 md:w-36 h-52 md:h-64 opacity-50 hidden sm:block"
                  }`}
                  onClick={() => setCurrentIndex(video.originalIndex)}
                >
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
