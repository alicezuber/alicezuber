'use client'

import { useEffect, useState } from 'react'

export default function AboutSection() {
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

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative" id="about">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text animate-bounce-in">
          What am I Doing Lately
        </h2>
        <div className={`max-w-4xl mx-auto space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md hover-lift animate-slide-in-left delay-100">
            我目前正在開發一個<strong className="text-blue-600 dark:text-blue-400">個人微服務平台</strong>，
            以<strong className="text-purple-600 dark:text-purple-400">基於 ZITADEL 的 SSO</strong>為核心，實現身份與存取管理。
          </p>
          <p className="leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-md hover-lift animate-slide-in-right delay-200">
            系統利用<strong className="text-purple-600 dark:text-purple-400">Web Push (PWA 風格通知)</strong>技術，
            將<strong className="text-pink-600 dark:text-pink-400">即時 VPS 狀態和系統事件</strong>直接推送到我的 iPhone，延遲極低。
          </p>
          <p className="leading-relaxed bg-gradient-to-r from-pink-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md hover-lift animate-slide-in-left delay-300">
            同時，我正在整合一個<strong className="text-pink-600 dark:text-pink-400">Discord 機器人與 Ollama 驅動的 LLM agent</strong>，
            讓我能夠<strong className="text-blue-600 dark:text-blue-400">透過自然語言對話查詢 VPS 狀態和基礎設施資訊</strong>。
          </p>
          <p className="leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-md hover-lift animate-slide-in-right delay-400">
            這個專案專注於<strong className="text-indigo-600 dark:text-indigo-400">基礎設施可觀測性、安全存取控制和 AI 輔助系統互動</strong>。
          </p>
        </div>
      </div>
    </section>
  )
}
