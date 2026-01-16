'use client'

import { useEffect, useState } from 'react'

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const projects = [
    {
      title: 'Blockchain & LSTM Carbon Trading Platform',
      tech: 'Node.js (Express), Prisma ORM, MySQL, Blockchain (Ganache), LSTM Model',
      description: [
        '系統架構設計：設計分層架構（Service Layer Pattern），整合 API 層、資料庫（MySQL/Prisma）和區塊鏈合約（Ganache）',
        '後端核心開發：使用 Express.js 與 Prisma ORM 進行型別安全的資料庫操作，管理使用者、訂單和碳權存貨生命週期',
        '交易安全性：整合 LSTM 模型進行訂單異常檢測，在配對交易前自動觸發凍結機制',
      ]
    },
    {
      title: 'Custom SSO Identity Provider',
      tech: 'Python, OIDC, OAuth 2.0, Docker',
      description: [
        '從零開始建構符合 OpenID Connect 規範的認證系統，無需第三方服務（如 Auth0）',
        '實作完整的 OAuth2 授權碼流程，包含 Access Token 和 Refresh Token 的發行與驗證',
        '解決跨服務單一登入挑戰並實現容器化部署',
      ]
    },
    {
      title: 'Homelab Infrastructure',
      tech: 'Kubernetes (K8s), Linux, Docker Compose',
      description: [
        '建置並維護個人微服務實驗室，實踐基礎設施即程式碼（IaC）概念',
        '使用 K8s 管理多個服務節點，配置 Nginx Ingress 進行流量路由',
        '使用 Grafana/Prometheus（PoC 階段）監控系統資源，確保服務穩定性',
      ]
    },
    {
      title: 'Minato Shigure Discord Bot',
      tech: 'Python, Discord.py, LLM Integration',
      description: [
        '開發具備社群管理功能的 Discord 機器人',
        '目前正在整合生成式 AI（LLM）和 ComfyUI API，實現自動化內容生成以增強社群互動',
      ]
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden" id="projects">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text animate-bounce-in">
          Selected Projects
        </h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8 hover-lift glow-on-hover border-2 border-transparent hover:border-blue-400/50 dark:hover:border-purple-500/50 transition-all relative overflow-hidden ${isVisible ? `animate-slide-in-left delay-${idx}00` : 'opacity-0'}`}
            >
              {/* Shine effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 ${hoveredIndex === idx ? 'translate-x-full' : '-translate-x-full'} transition-transform duration-1000`}></div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {project.description.map((desc, descIdx) => (
                  <li key={descIdx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
