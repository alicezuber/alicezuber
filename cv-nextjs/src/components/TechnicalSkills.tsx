'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function TechnicalSkills() {
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

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const skills = [
    {
      title: 'Infrastructure & DevOps',
      icon: '☁️',
      items: [
        { label: 'Containerization', content: 'Docker, Docker Compose (Dockerfile & Multi-stage builds)' },
        { label: 'Orchestration', content: 'Kubernetes (K8s), Helm Charts (Homelab experience)' },
        { label: 'OS', content: 'Linux (Ubuntu/CentOS), WSL2, Shell Scripting' },
        { label: 'CI/CD', content: 'Git, GitHub Actions' },
      ]
    },
    {
      title: 'Backend & Security',
      icon: '🔒',
      items: [
        { label: 'Languages', content: 'Python, Node.js, PHP' },
        { label: 'Frameworks', content: 'FastAPI, Flask, Express.js' },
        { label: 'Database & ORM', content: 'MySQL, Redis, SQLite, Prisma ORM' },
        { label: 'Security Protocols', content: 'OIDC, OAuth 2.0, SSO implementation' },
      ]
    },
    {
      title: 'Client & Tools',
      icon: '🛠️',
      items: [
        { label: 'Desktop/Game', content: 'Electron, Tauri, Godot 4 (GDScript)' },
        { label: 'Tools', content: 'Postman, VS Code, Nginx (Reverse Proxy)' },
      ]
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text animate-bounce-in">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map((category, idx) => (
            <div 
              key={idx}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover-lift glow-on-hover border border-transparent hover:border-blue-300 dark:hover:border-blue-600 transition-all ${isVisible ? `animate-bounce-in delay-${idx * 2}00` : 'opacity-0'}`}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text1">{category.title}</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <strong>{item.label}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Tech Stack Snapshot</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="https://skillicons.dev/icons?i=python,fastapi,flask,redis,mysql,sqlite,postman&theme=light"
                alt="Backend Stack"
                width={500}
                height={50}
                className="dark:hidden"
              />
              <Image
                src="https://skillicons.dev/icons?i=python,fastapi,flask,redis,mysql,sqlite,postman&theme=dark"
                alt="Backend Stack"
                width={500}
                height={50}
                className="hidden dark:block"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://skillicons.dev/icons?i=vue,js,ts,nodejs,html,css,nginx&theme=light"
                alt="Frontend Stack"
                width={500}
                height={50}
                className="dark:hidden"
              />
              <Image
                src="https://skillicons.dev/icons?i=vue,js,ts,nodejs,html,css,nginx&theme=dark"
                alt="Frontend Stack"
                width={500}
                height={50}
                className="hidden dark:block"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Tools & Environment</h3>
            <div className="flex justify-center">
              <Image
                src="https://skillicons.dev/icons?i=windows,linux,docker,git,github,vscode,postman&theme=light"
                alt="Tools"
                width={500}
                height={50}
                className="dark:hidden"
              />
              <Image
                src="https://skillicons.dev/icons?i=windows,linux,docker,git,github,vscode,postman&theme=dark"
                alt="Tools"
                width={500}
                height={50}
                className="hidden dark:block"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Client & Game Development</h3>
            <div className="flex justify-center">
              <Image
                src="https://skillicons.dev/icons?i=godot,unity,tauri,electron,cs,cpp,js,ts&theme=light"
                alt="Game Dev Stack"
                width={500}
                height={50}
                className="dark:hidden"
              />
              <Image
                src="https://skillicons.dev/icons?i=godot,unity,tauri,electron,cs,cpp,js,ts&theme=dark"
                alt="Game Dev Stack"
                width={500}
                height={50}
                className="hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
