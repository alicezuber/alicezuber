# 自架部落格開發待辦清單 (Dev Only)

## Core / 核心架構
- [ V] 初始化 Astro 專案 (`npm create astro@latest -- --template blog --typescript --strict --install`)
- [ V] 配置 Tailwind CSS 設定檔 (`astro.config.mjs`, `tailwind.config.js`)
- [ V] 規劃 Pages 結構 (`src/pages/`, `src/components/`, `src/layouts/`, `src/content/`)
- [ V] 設計 Content Collections 架構 (`src/content/config.ts`, schema validation)
- [ V] 實作 MDX 遠端渲染 (`@astrojs/mdx`, `gray-matter`, `remark/rehype` plugins)
- [ V] 配置 Shiki 程式碼高亮 (`astro.config.mjs` shiki config, custom themes)
- [ V] 實作 RSS 2.0 Feed 生成 (`@astrojs/rss`, RSS endpoint)
- [ V] 實作 sitemap.xml 生成 (`@astrojs/sitemap`, dynamic sitemap)

## UI Components / 元件開發
- [ ] 建立 BaseLayout (`src/layouts/BaseLayout.astro`, `<slot />`)
- [ ] 實作 RWD 響應式設計 (`tailwind.config.js` breakpoints, mobile-first)
- [ ] 開發 PostCard 元件 (`src/components/PostCard.astro`, image optimization)
- [ ] 實作 Pagination 元件 (`src/components/Pagination.astro`, URL params)
- [ ] 實作 Dark Mode (`viewTransitions`, localStorage, CSS variables)
- [ ] 設計 404 頁面 (`src/pages/404.astro`, custom error layout)
- [ ] 實作 BackToTop 元件 (`src/components/BackToTop.astro`, scroll behavior)
- [ ] 開發 Breadcrumbs 元件 (`src/components/Breadcrumbs.astro`, `Astro.url.pathname`)

## Feature Implementation / 功能實作
- [ ] 實作 Categories 篩選 (`Astro.url.searchParams`, content collection filtering)
- [ ] 實作 Tags 系統 (content collection schema, tag pages)
- [ ] 開發 TOC (Table of Contents) (`rehype-slug`, `rehype-toc`, scroll spy)
- [ ] 實作站內搜尋 (`Fuse.js`, client-side indexing, `getStaticPaths`)
- [ ] 計算閱讀時間 (`reading-time` package, WPM algorithm)
- [ ] 實作相關文章推薦 (tag similarity, content collection queries)
- [ ] 程式碼區塊複製功能 (vanilla JS, clipboard API)
- [ ] 整合 Giscus 留言系統 (`<Giscus />` component, GitHub discussions)

## SEO & Performance / 優化與效能
- [ ] 動態 Meta Tags (`layout` props, SEO component)
- [ ] JSON-LD 結構化資料 (`<script type="application/ld+json">`, structured data)
- [ ] OG 圖片生成 (`@astrojs/og`, dynamic OG image route)
- [ ] 圖片優化 (`<Image />` component, `@astrojs/image`, WebP conversion)
- [ ] 字體載入優化 (`@astrojs/font`, font subsetting, `font-display: swap`)
- [ ] PWA 設定 (`@astrojs/pwa`, manifest.json, service worker)
- [ ] Analytics 整合 (`@astrojs/analytics`, Google Analytics 4, privacy compliance)