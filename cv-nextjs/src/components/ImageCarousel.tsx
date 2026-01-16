'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // 图片资源（可以替换为实际的图片URL）
  const slides = [
    {
      title: '基础设施架构',
      subtitle: 'Infrastructure & DevOps',
      image: 'https://skillicons.dev/icons?i=kubernetes,docker,linux,nginx,git&theme=light',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '后端与安全',
      subtitle: 'Backend & Security Focused',
      image: 'https://skillicons.dev/icons?i=python,fastapi,flask,mysql,redis&theme=light',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '游戏开发',
      subtitle: 'Game Development & Tools',
      image: 'https://skillicons.dev/icons?i=godot,unity,cpp,cs,tauri&theme=light',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: '全栈开发',
      subtitle: 'Full Stack & Web Technologies',
      image: 'https://skillicons.dev/icons?i=nextjs,ts,nodejs,tailwindcss,vue&theme=light',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text animate-bounce-in text-white">
          技术生态系统
        </h2>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}
                />

                {/* Content */}
                <div className="relative h-full flex items-center justify-center p-8">
                  {/* Left side - Text content */}
                  <div className="flex-1 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in-left">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 mb-6 animate-slide-in-left delay-200">
                      {slide.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-slide-in-left delay-300"></div>
                  </div>

                  {/* Right side - Icon/Image placeholder */}
                  <div className="flex-1 hidden md:flex items-center justify-center">
                    <div className="text-6xl font-bold opacity-10 select-none animate-bounce" style={{ animationDelay: '0.5s' }}>
                      {index === 0 && '☁️'}
                      {index === 1 && '🔐'}
                      {index === 2 && '🎮'}
                      {index === 3 && '⚡'}
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer pointer-events-none"></div>
              </div>
            ))}

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Info */}
          <div className="text-center mt-6 text-gray-400">
            <p className="text-sm">
              {currentSlide + 1} / {slides.length}
            </p>
          </div>
        </div>

        {/* Features grid below carousel */}
        <div className="mt-16 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: '📊', title: 'Data Driven' },
            { icon: '⚙️', title: 'Optimized' },
            { icon: '🎯', title: 'Focused' },
            { icon: '🚀', title: 'Fast' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center text-white hover:bg-white/10 transition-all hover-lift"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <p className="text-sm font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
