'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'en' | 'zh' | 'ja'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.gallery': 'Gallery',
    'nav.projects': 'Projects',
    'nav.motto': 'Motto',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Full Stack Engineer',
    'hero.subtitle': 'Focused on infrastructure, backend and full stack development',
    'hero.cta': 'Learn More',
    'about.title': 'About Me',
    'about.desc.0': 'I\'m an infrastructure and backend engineer with 5+ years of experience',
    'about.desc.1': 'Expertise in cloud-native technologies, microservices architecture and distributed systems design',
    'about.desc.2': 'Passionate about open source projects and active contributor to the developer community',
    'about.desc.3': 'Exploring game development and creative coding in my spare time',
    'skills.title': 'Skills Showcase',
    'gallery.title': 'Tech Stack',
    'gallery.feature.0': '🚀 High Performance',
    'gallery.feature.1': '🔒 Secure & Reliable',
    'gallery.feature.2': '🎨 Beautiful Design',
    'projects.title': 'Featured Projects',
    'motto.title': 'My Motto',
    'footer.company': 'Company',
    'footer.links': 'Quick Links',
    'footer.social': 'Social Media',
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.skills': '技能',
    'nav.gallery': '展示',
    'nav.projects': '项目',
    'nav.motto': '座右铭',
    'nav.contact': '联系',
    'hero.greeting': '你好，我是',
    'hero.title': '全栈工程师',
    'hero.subtitle': '专注于基础设施、后端与全栈开发',
    'hero.cta': '了解更多',
    'about.title': '关于我',
    'about.desc.0': '我是一名具有5年以上经验的基础设施和后端工程师',
    'about.desc.1': '精通云原生技术、微服务架构和分布式系统设计',
    'about.desc.2': '热爱开源项目，积极贡献于开发者社区',
    'about.desc.3': '业余时间探索游戏开发和创意编程',
    'skills.title': '技能展示',
    'gallery.title': '技术栈展示',
    'gallery.feature.0': '🚀 高性能',
    'gallery.feature.1': '🔒 安全可靠',
    'gallery.feature.2': '🎨 美观设计',
    'projects.title': '项目案例',
    'motto.title': '座右铭',
    'footer.company': '公司信息',
    'footer.links': '快速链接',
    'footer.social': '社交媒体',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': 'について',
    'nav.skills': 'スキル',
    'nav.gallery': 'ギャラリー',
    'nav.projects': 'プロジェクト',
    'nav.motto': '座右銘',
    'nav.contact': 'お問い合わせ',
    'hero.greeting': 'こんにちは、私は',
    'hero.title': 'フルスタックエンジニア',
    'hero.subtitle': 'インフラストラクチャ、バックエンド、フルスタック開発に特化',
    'hero.cta': '詳細を見る',
    'about.title': '私について',
    'about.desc.0': '5年以上の経験を持つインフラストラクチャおよびバックエンドエンジニア',
    'about.desc.1': 'クラウドネイティブ技術、マイクロサービスアーキテクチャ、分散システム設計に精通',
    'about.desc.2': 'オープンソースプロジェクトに情熱的で、開発者コミュニティへのアクティブな貢献',
    'about.desc.3': '空き時間でゲーム開発とクリエイティブなコーディングを探索',
    'skills.title': 'スキル展示',
    'gallery.title': 'テックスタック',
    'gallery.feature.0': '🚀 高性能',
    'gallery.feature.1': '🔒 安全で信頼性が高い',
    'gallery.feature.2': '🎨 美しいデザイン',
    'projects.title': 'プロジェクト',
    'motto.title': '座右銘',
    'footer.company': '会社情報',
    'footer.links': 'クイックリンク',
    'footer.social': 'ソーシャルメディア',
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations['en']]
    return value || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
