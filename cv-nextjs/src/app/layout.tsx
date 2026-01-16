import type { Metadata } from 'next'
import { Noto_Sans_TC, Noto_Sans_JP, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { I18nProvider } from '@/i18n/useI18n'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-tc',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-jp',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Minato Baiyun | 湊白雲',
  description: '這是湊白雲的個人網站，湊白雲是一個程式開發者，專注於 Infrastructure、Backend 和 Security 相關領域',
  keywords: ['湊白雲', 'Minato Baiyun', 'DevOps', 'Backend', 'Infrastructure', 'Security'],
  authors: [{ name: 'Minato Baiyun' }],
  openGraph: {
    title: '湊白雲的個人網站',
    description: '這是湊白雲的個人網站，湊白雲是一個程式開發者，專注於 Infrastructure、Backend 和 Security 相關領域',
    locale: 'zh_TW',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={`${notoSansTC.variable} ${notoSansJP.variable} ${poppins.variable} font-sans antialiased`}>
        <I18nProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
