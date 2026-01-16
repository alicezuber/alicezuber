# 🌍 i18n 快速开始指南

## 5 分钟了解国际化

### 步骤 1️⃣: 查看翻译文件

翻译文件位于:
- `public/locales/en/common.json` - 英文
- `public/locales/zh/common.json` - 中文  
- `public/locales/ja/common.json` - 日文

### 步骤 2️⃣: 在组件中使用翻译

```tsx
'use client'

import { useI18n } from '@/i18n/useI18n'

export default function MyComponent() {
  const { t, language, setLanguage } = useI18n()

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>当前语言: {language}</p>
      
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('zh')}>中文</button>
      <button onClick={() => setLanguage('ja')}>日本語</button>
    </div>
  )
}
```

### 步骤 3️⃣: 添加新翻译

1. 编辑 `src/i18n/useI18n.tsx`
2. 在 `translations` 对象中添加新键值对:

```typescript
const translations = {
  en: {
    'myfeature.title': 'My Feature',
  },
  zh: {
    'myfeature.title': '我的功能',
  },
  ja: {
    'myfeature.title': '私の機能',
  },
}
```

3. 在组件中使用: `{t('myfeature.title')}`

## 🎯 常用翻译键

```
nav.home              # 导航 - 首页
hero.title            # 英雄 - 标题
hero.subtitle         # 英雄 - 副标题
about.title           # 关于 - 标题
about.desc.0          # 关于 - 描述1
skills.title          # 技能 - 标题
gallery.title         # 展示 - 标题
projects.title        # 项目 - 标题
motto.title           # 座右铭 - 标题
footer.company        # 页尾 - 公司
```

## ✅ 已经完成的集成

- ✅ Navbar - 语言选择器
- ✅ HeroSection - 文本翻译
- ✅ Layout - Provider 配置

## 📚 完整文档

详见:
- [I18N_GUIDE.md](I18N_GUIDE.md) - 完整使用指南
- [I18N_IMPLEMENTATION.md](I18N_IMPLEMENTATION.md) - 实现细节

## 🚀 测试语言切换

1. 运行项目: `npm run dev`
2. 打开 http://localhost:3000
3. 点击导航栏的语言选择器
4. 观察页面文本变化

✅ 完成！你的网站现在支持多语言了！
