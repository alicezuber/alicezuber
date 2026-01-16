'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('gallery')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const gallery = [
    {
      title: 'Infrastructure & DevOps',
      description: '基於雲端的微服務架構',
      image: 'https://skillicons.dev/icons?i=kubernetes,docker,linux,nginx&theme=light',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      title: 'Backend & Security',
      description: 'Python FastAPI 與 OIDC 整合',
      image: 'https://skillicons.dev/icons?i=python,fastapi,mysql,redis&theme=light',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      title: 'Game Development',
      description: 'Godot 4 與 GDScript 開發',
      image: 'https://skillicons.dev/icons?i=godot,gdscript,unity,cpp&theme=light',
      gradient: 'from-orange-400 to-red-400',
    },
    {
      title: 'Full Stack',
      description: 'Next.js + TypeScript 完整技術棧',
      image: 'https://skillicons.dev/icons?i=nextjs,ts,nodejs,tailwindcss&theme=light',
      gradient: 'from-green-400 to-emerald-400',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" id="gallery">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text animate-bounce-in text-white">
          Visual Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden shadow-2xl hover-lift glow-on-hover border-2 border-transparent hover:border-white/30 transition-all ${isVisible ? `animate-bounce-in delay-${idx * 2}00` : 'opacity-0'}`}
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-all duration-300`}></div>
              
              {/* Glass effect container */}
              <div className="relative bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-6 h-full flex flex-col justify-between">
                {/* Icon/Image placeholder */}
                <div className="flex justify-center mb-4 bg-white/5 rounded-lg p-4 group-hover:bg-white/10 transition-colors">
                  <div className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform">
                    {idx === 0 && '☁️'}
                    {idx === 1 && '🔐'}
                    {idx === 2 && '🎮'}
                    {idx === 3 && '⚡'}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech icons */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
                    <div className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                      {idx === 0 && 'K8s • Docker • Linux • Nginx'}
                      {idx === 1 && 'Python • FastAPI • MySQL • Redis'}
                      {idx === 2 && 'Godot • GDScript • Unity • C++'}
                      {idx === 3 && 'Next.js • TypeScript • Node.js • Tailwind'}
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🚀', title: 'High Performance', desc: 'Optimized infrastructure' },
            { icon: '🔒', title: 'Secure & Reliable', desc: 'OAuth2 & OIDC compliant' },
            { icon: '🎨', title: 'Beautiful Design', desc: 'Modern & responsive UI' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all ${isVisible ? `animate-slide-in-up delay-${idx + 3}00` : 'opacity-0'}`}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
