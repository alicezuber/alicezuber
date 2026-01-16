# 🎨 Next.js CV 网站 - 快速参考

## 📊 项目概览

| 属性 | 值 |
|------|-----|
| **框架** | Next.js 14 + React 18 + TypeScript |
| **样式** | Tailwind CSS 3.4.1 + 自定义 CSS |
| **特效** | 20+ 动画、视差、粒子、玻璃态 |
| **响应式** | 16:9、21:9 等多种宽高比 |
| **主题** | 深色/浅色切换 (next-themes) |
| **语言** | 中文、英文、日文支持结构 |

## 🎬 核心特效列表

### CSS 动画 (@keyframes)

```
✨ gradient-shift (3s)      - 彩色渐变背景移动
✨ shimmer (3s)             - 卡片闪烁高光效果
✨ glow-pulse (2s)          - 脉冲发光框
✨ aurora (4s)              - 极光渐变动画
✨ blob (7s)                - 有机形状变形
✨ bounce-in (0.8s)         - 弹跳进入动画
✨ slide-in-left (0.6s)     - 左侧滑入
✨ slide-in-right (0.6s)    - 右侧滑入
✨ rotate-in (0.6s)         - 旋转进入
✨ pulse-glow (2s)          - 脉冲发光
✨ float (2s)               - 浮动效果
✨ shine (3s)               - 闪亮扫过
✨ keyword-float            - 关键词浮动
✨ slideUp (0.6s)           - 向上滑入
✨ slideDown (0.6s)         - 向下滑入
```

### 延迟类
```
delay-100 through delay-800 (100ms 递增)
用于级联动画效果
```

### 高级效果

1. **Parallax Hero** - 视差滚动层级
2. **Particle System** - Canvas 粒子效果
3. **Glassmorphism** - 玻璃态毛玻璃效果
4. **Intersection Observer** - 滚动触发动画
5. **Auto-Play Carousel** - 自动轮播相册

## 🧩 主要组件

### ParallaxHero ⭐ (新)
- 视差背景层级
- 15 个浮动粒子
- 网格背景动画
- 渐变文本效果

### ImageCarousel ⭐ (新)
- 5 秒自动轮播
- 手动导航按钮
- 点指示器
- 光泽效果

### GallerySection ⭐ (新)
- 30 星星背景
- 脉冲发光球体
- 4 列技术卡片
- 闪烁效果

### AboutSection ✨ (增强)
- 4 个渐变框
- 错落进入动画
- Intersection Observer 触发

### TechnicalSkills ✨ (增强)
- 3 列网格
- 表情符号图标
- 技能栈图标 (skillicons.dev)

### ProjectsSection ✨ (增强)
- 项目卡片网格
- 悬停闪烁效果
- 错落进入动画

### MottoSection ✨ (增强)
- 玻璃态卡片
- 渐变背景
- 三语言座右铭

## 🎯 使用特效

### 应用渐变文本
```tsx
<div className="gradient-text animate-gradient-shift">
  Your Text Here
</div>
```

### 添加闪烁效果
```tsx
<div className="hover:animate-shimmer">
  Shimmer Card
</div>
```

### 创建玻璃态效果
```tsx
<div className="glass-morphism">
  Frosted Glass
</div>
```

### 悬停抬升效果
```tsx
<div className="hover-lift">
  Lift on Hover
</div>
```

### 发光效果
```tsx
<div className="glow-on-hover">
  Glowing Card
</div>
```

## 🚀 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器
open http://localhost:3000

# 4. 生产构建
npm run build
npm start
```

## 📝 自定义指南

### 修改主要内容

1. **关于部分** - 编辑 `src/components/AboutSection.tsx`
2. **项目列表** - 编辑 `src/components/ProjectsSection.tsx`
3. **技能清单** - 编辑 `src/components/TechnicalSkills.tsx`
4. **社交链接** - 编辑 `src/components/Navbar.tsx` 和 `Footer.tsx`

### 修改颜色主题

编辑 `tailwind.config.ts`:
```typescript
extend: {
  colors: {
    'your-color': '#HEXCODE',
  }
}
```

### 修改动画速度

编辑 `src/app/globals.css`:
```css
@keyframes gradient-shift {
  animation: change-duration;  /* 修改此处 */
}
```

### 修改字体

编辑 `src/app/layout.tsx`:
```typescript
// 从 Google Fonts 导入其他字体
```

## 📱 响应式设计

支持的断点：
- `sm`: 640px (手机)
- `md`: 768px (平板)
- `lg`: 1024px (桌面)
- `xl`: 1280px (大屏)

## 🌙 深色模式

自动支持通过 next-themes:
- 自动切换按钮在导航栏
- 保存用户偏好
- 支持系统主题检测

## 📊 文件大小参考

| 文件 | 大小 | 影响 |
|------|------|------|
| globals.css | ~8KB | 所有特效 |
| ParallaxHero.tsx | ~6KB | 视差效果 |
| components/* | ~40KB | 所有组件 |
| **总计** | **~60KB** | 轻量级 |

## 🔗 重要链接

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [React Docs](https://react.dev)

## 📞 技术栈

- **前端框架**: Next.js 14.1.0
- **UI 库**: React 18.2.0
- **样式**: Tailwind CSS 3.4.1
- **类型检查**: TypeScript 5
- **主题**: next-themes 0.2.1
- **图标**: skillicons.dev CDN
- **动画**: 纯 CSS + Canvas API

## ✅ 已完成功能

- ✅ 响应式设计
- ✅ 深色/浅色主题
- ✅ 20+ CSS 动画
- ✅ 视差滚动效果
- ✅ 粒子背景系统
- ✅ 自动轮播相册
- ✅ 玻璃态效果
- ✅ 技能栈展示
- ✅ 项目案例展示
- ✅ SEO 优化
- ✅ 多语言结构

## 🔮 可选扩展

- 博客系统 (MDX)
- 联系表单 (Formspree)
- Google Analytics
- 自定义域名
- Vercel 部署
- 评论系统
- 项目过滤器

---

**创建日期**: 2024  
**更新频率**: 按需  
**维护者**: Your Name
