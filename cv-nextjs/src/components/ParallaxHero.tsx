'use client'

import { useEffect, useState } from 'react'

export default function ParallaxHero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Parallax background elements */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${offset * 0.4}px)` }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />

        {/* Particle effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 30}%`,
              opacity: 0.3,
              animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,0,0,.05) 25%, rgba(255,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.05) 75%, rgba(255,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,0,0,.05) 25%, rgba(255,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.05) 75%, rgba(255,0,0,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
            transform: `translateY(${offset * 0.1}px)`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text inline-block">Minato</span>
            <br />
            <span className="gradient-text inline-block">Baiyun</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Infrastructure • Backend • Game Dev
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-3xl mx-auto">
            一個對 DevOps、後端開發和安全充滿熱情的工程師
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center animate-bounce">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">向下滾動探索</p>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}
