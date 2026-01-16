'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState(2024)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    {
      name: 'Discord',
      url: 'https://discordapp.com/users/632835000617926657',
      icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z',
      color: 'hover:text-indigo-400',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Captain_Baiyun',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      color: 'hover:text-sky-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alicezuber',
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
      color: 'hover:text-gray-400',
    },
    {
      name: 'Email',
      url: 'mailto:minato.baiyun@gmail.com',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
      color: 'hover:text-red-400',
    },
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-3">Minato Baiyun</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Infrastructure Engineer & Full-Stack Developer focusing on secure, scalable systems and innovative solutions.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p><a href="#about" className="hover:text-blue-400 transition-colors">About</a></p>
              <p><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></p>
              <p><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></p>
            </div>
          </div>

          {/* Social links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                  title={link.name}
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                    <path d={link.icon} fillRule={link.name === 'GitHub' ? 'evenodd' : undefined} clipRule={link.name === 'GitHub' ? 'evenodd' : undefined} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <p>© {year} Minato Baiyun. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-600">Built with Next.js 14 • Tailwind CSS • TypeScript</p>
          </div>
          <div className="text-xs text-gray-600">
            <p>Made with <span className="text-red-500">❤️</span> for better development</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
