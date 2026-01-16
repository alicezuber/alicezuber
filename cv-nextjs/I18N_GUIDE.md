# 🌍 国际化 (i18n) 指南

## 📋 概览

项目现已支持 **中文、英文、日文** 三种语言的完整国际化。

## 🎯 如何使用

### 在组件中使用翻译

```tsx
'use client'

import { useI18n } from '@/i18n/useI18n'

export default function MyComponent() {
  const { t, language, setLanguage } = useI18n()

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('about.desc.0')}</p>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('zh')}>中文</button>
      <button onClick={() => setLanguage('ja')}>日本語</button>
    </div>
  )
}
```

### useI18n Hook 提供的功能

```typescript
const { language, setLanguage, t } = useI18n()

// language: 当前语言 ('en' | 'zh' | 'ja')
// setLanguage: 设置语言的函数
// t: 翻译函数，接收翻译键名，返回对应文本
```

## 📁 文件结构

```
src/
  i18n/
    useI18n.tsx          # i18n Context 和 Hook 的定义
    config.ts            # 备用配置文件（可选）

public/
  locales/
    en/
      common.json        # 英文翻译
    zh/
      common.json        # 中文翻译
    ja/
      common.json        # 日文翻译
```

## 🔧 添加新的翻译

### 步骤 1: 在 JSON 文件中添加翻译

编辑 `public/locales/{lang}/common.json`:

```json
{
  "myComponent": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

### 步骤 2: 在 useI18n.tsx 中添加翻译

编辑 `src/i18n/useI18n.tsx` 中的 `translations` 对象:

```typescript
const translations = {
  en: {
    'myComponent.title': 'My Title',
    'myComponent.description': 'My Description',
  },
  zh: {
    'myComponent.title': '我的标题',
    'myComponent.description': '我的描述',
  },
  ja: {
    'myComponent.title': '私のタイトル',
    'myComponent.description': '私の説明',
  },
}
```

### 步骤 3: 在组件中使用

```tsx
const title = t('myComponent.title')
const description = t('myComponent.description')
```

## 📚 翻译键名约定

使用点符号，从大分类到小分类:

```
nav.home              # 导航 > 首页
hero.title            # 英雄区 > 标题
about.desc.0          # 关于 > 描述 > 第0条
footer.links          # 页尾 > 链接
```

## 🌐 支持的语言

| 语言 | 代码 | 名称 |
|------|------|------|
| English | `en` | English |
| 中文 | `zh` | 中文 |
| 日本語 | `ja` | 日本語 |

## 💡 最佳实践

1. **保持一致性**: 相同的内容在所有语言中应该翻译成类似的含义
2. **简洁明了**: 保持翻译简洁，避免过长的文本
3. **格式一致**: 使用统一的键名格式
4. **分组管理**: 按页面或组件分组相关的翻译

## 🔄 默认语言

当前默认语言是 `en` (English)。修改默认语言:

编辑 `src/i18n/useI18n.tsx`:

```typescript
const [language, setLanguage] = useState<Language>('en') // 改为 'zh' 或 'ja'
```

## 🚀 后期扩展

### 添加更多语言

1. 在 `public/locales/` 中创建新的语言文件夹 (如 `ko/`)
2. 复制 `common.json` 并翻译内容
3. 在 `src/i18n/useI18n.tsx` 中:
   - 添加语言类型: `type Language = 'en' | 'zh' | 'ja' | 'ko'`
   - 在 `translations` 中添加新语言的翻译
4. 在 Navbar 中添加新语言选项

### 使用专业 i18n 库

如果项目增长，可以迁移到更强大的库如 `next-i18next`:

```bash
npm install next-i18next i18next react-i18next
```

## 📝 当前已翻译的部分

✅ 导航栏 (nav)
✅ 英雄区 (hero)
✅ 关于区 (about)
✅ 技能区 (skills)
✅ 展示区 (gallery)
✅ 项目区 (projects)
✅ 座右铭 (motto)
✅ 页尾 (footer)

## ⚠️ 需要翻译的部分

下列组件还未完全集成 i18n，需要更新:

- [ ] ParallaxHero.tsx
- [ ] AboutSection.tsx
- [ ] TechnicalSkills.tsx
- [ ] ImageCarousel.tsx
- [ ] GallerySection.tsx
- [ ] ProjectsSection.tsx
- [ ] MottoSection.tsx
- [ ] Footer.tsx

更新这些组件:

```tsx
import { useI18n } from '@/i18n/useI18n'

export default function Component() {
  const { t } = useI18n()
  // 使用 t() 替换硬编码的文本
}
```

## 🔗 相关文件

- [Navbar.tsx](../../src/components/Navbar.tsx) - 语言选择器
- [HeroSection.tsx](../../src/components/HeroSection.tsx) - 使用 i18n 的示例
- [layout.tsx](../../src/app/layout.tsx) - I18nProvider 配置

---

**创建日期**: 2024  
**更新日期**: 最近
**维护者**: Your Name
