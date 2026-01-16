# Minato Baiyun CV - Next.js

這是一個使用 Next.js 14 + Tailwind CSS 建置的個人簡歷網站。

## 特色功能

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ 響應式設計（支援手機 16:9、21:9）
- ✅ 深色模式支援
- ✅ 多語言支援（中文、英文、日文）
- ✅ 平滑滾動與動畫效果
- ✅ Tech Stack 圖示整合

## 開始使用

### 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 開發模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置專案

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 啟動生產環境

```bash
npm run start
# 或
yarn start
# 或
pnpm start
```

## 專案結構

```
cv-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # 根布局
│   │   ├── page.tsx         # 首頁
│   │   └── globals.css      # 全域樣式
│   └── components/
│       ├── Navbar.tsx       # 導航列
│       ├── HeroSection.tsx  # 首頁英雄區
│       ├── AboutSection.tsx # 關於我
│       ├── TechnicalSkills.tsx # 技術技能
│       ├── ProjectsSection.tsx # 專案展示
│       ├── MottoSection.tsx # 座右銘
│       ├── Footer.tsx       # 頁尾
│       └── ThemeProvider.tsx # 主題提供者
├── public/                  # 靜態資源
├── tailwind.config.ts       # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
├── next.config.js          # Next.js 配置
└── package.json            # 專案依賴

```

## 技術棧

- **框架**: Next.js 14
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **主題**: next-themes
- **字體**: Google Fonts (Noto Sans TC, Noto Sans JP, Poppins)

## 響應式設計

本網站完全支援移動端響應式設計：
- 📱 手機 (16:9, 21:9)
- 💻 平板
- 🖥️ 桌面

## 自訂設定

您可以在以下文件中自訂內容：

- `src/app/layout.tsx` - 修改 metadata 和 SEO 設定
- `src/components/*.tsx` - 修改各區塊內容
- `tailwind.config.ts` - 自訂 Tailwind 配置
- `src/app/globals.css` - 自訂全域樣式

## License

© 2024 Minato Baiyun. All rights reserved.
