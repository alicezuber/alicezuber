# 🎨 特效速查表 - 复制即用

## 最常用特效代码片段

### 1️⃣ 渐变文本 + 自动动画

```tsx
<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                 bg-clip-text text-transparent animate-gradient-shift">
  Your Text Here
</div>
```

**效果**: 彩色渐变背景，每 3 秒循环移动一次  
**技术**: CSS @keyframes + animation  
**适用**: 标题、Logo、重点文字

---

### 2️⃣ 玻璃态卡片

```tsx
<div className="glass-morphism p-6 rounded-lg border border-white/20">
  <p>Frosted glass effect with blur</p>
</div>
```

**CSS**:
```css
.glass-morphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**效果**: 毛玻璃效果，带模糊背景透视  
**适用**: 卡片、容器、重点区域

---

### 3️⃣ 悬停抬升 + 发光

```tsx
<div className="hover-lift glow-on-hover p-4 rounded-lg">
  Hover me!
</div>
```

**CSS**:
```css
.hover-lift {
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.glow-on-hover:hover {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.6),
              0 0 40px rgba(168, 85, 247, 0.4);
}
```

**效果**: 悬停时上升 8px + 发光  
**适用**: 按钮、卡片、交互元素

---

### 4️⃣ 级联淡入动画

```tsx
<div className="space-y-4">
  <div className="animate-slide-in-left delay-100">Item 1</div>
  <div className="animate-slide-in-left delay-200">Item 2</div>
  <div className="animate-slide-in-left delay-300">Item 3</div>
  <div className="animate-slide-in-left delay-400">Item 4</div>
</div>
```

**CSS**:
```css
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
```

**效果**: 列表项依次从左滑入  
**技术**: Tailwind delay + @keyframes  
**适用**: 列表、网格、逐个出现效果

---

### 5️⃣ 闪烁卡片

```tsx
<div className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-br 
                 from-blue-600 to-purple-600 hover:animate-shimmer">
  <div className="relative z-10">Content here</div>
</div>
```

**CSS**:
```css
@keyframes shimmer {
  0% { 
    background-position: -1000px 0; 
  }
  100% { 
    background-position: 1000px 0; 
  }
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  background-size: 1000px 100%;
  animation: shimmer 3s infinite;
}
```

**效果**: 光泽高光从左扫过  
**适用**: 卡片、按钮、产品展示

---

### 6️⃣ 脉冲发光框

```tsx
<div className="p-4 rounded-lg glow-pulse border-2 border-purple-500">
  Pulsing Glow
</div>
```

**CSS**:
```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 5px rgba(168, 85, 247, 0.5),
                0 0 10px rgba(168, 85, 247, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.8),
                0 0 30px rgba(168, 85, 247, 0.5);
  }
}

.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

**效果**: 框线发光，脉动式呼吸效果  
**适用**: 强调框、通知、关键元素

---

### 7️⃣ Intersection Observer 滚动触发

```tsx
'use client'

import { useEffect, useRef } from 'react'

export default function ScrollTriggeredAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in-left')
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="opacity-0">
      Appears on scroll
    </div>
  )
}
```

**效果**: 元素进入视口时触发动画  
**优势**: 性能高、SEO 友好、用户体验好  
**适用**: 大页面、长列表、图片懒加载

---

### 8️⃣ 视差滚动效果

```tsx
'use client'

import { useState, useEffect } from 'react'

export default function ParallaxSection() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* 快速层 */}
      <div 
        style={{ transform: `translateY(${offset * 0.5}px)` }}
        className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500"
      />
      
      {/* 慢速层 */}
      <div 
        style={{ transform: `translateY(${offset * 0.2}px)` }}
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"
      />
      
      {/* 内容 */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
        Parallax Effect
      </div>
    </div>
  )
}
```

**效果**: 多层背景以不同速度滚动  
**技术**: transform + window.scrollY  
**适用**: 英雄区、专题区、视差网站

---

### 9️⃣ 旋转进入动画

```tsx
<div className="animate-rotate-in">
  Spinning In
</div>
```

**CSS**:
```css
@keyframes rotate-in {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.3);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

.animate-rotate-in {
  animation: rotate-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**效果**: 元素旋转并缩放进入，带橡皮筋缓动  
**适用**: 图标、按钮、卡片进入

---

### 🔟 浮动粒子背景

```tsx
'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20" />
}
```

**效果**: 浮动粒子背景  
**技术**: Canvas API + requestAnimationFrame  
**适用**: 页面背景、装饰效果

---

## 🎭 组合方案

### 方案 A: 豪华卡片
```tsx
<div className="glass-morphism hover-lift glow-on-hover animate-slide-in-left delay-200">
  <h3 className="gradient-text animate-gradient-shift">Title</h3>
  <p>Content</p>
</div>
```

### 方案 B: 强调框
```tsx
<div className="relative p-6 rounded-lg border-2 border-purple-500 glow-pulse">
  <div className="absolute inset-0 animate-shimmer rounded-lg" />
  <div className="relative z-10">Important Content</div>
</div>
```

### 方案 C: 英雄区
```tsx
<div className="relative h-screen">
  <ParticleBackground />
  <div 
    className="relative z-10 flex flex-col items-center justify-center h-full"
    style={{ transform: `translateY(${offset * 0.3}px)` }}
  >
    <h1 className="gradient-text animate-gradient-shift text-6xl">
      Welcome
    </h1>
  </div>
</div>
```

---

## ⚡ 性能建议

| 特效 | 性能 | 建议数量 |
|------|------|--------|
| 梯度渲染 | 低 | ≤ 3 个 |
| CSS 动画 | 低 | ≤ 10 个 |
| Canvas 粒子 | 中 | 1 个（50-100 粒子） |
| Intersection Observer | 极低 | 无限制 |
| 视差滚动 | 中 | 2-3 层 |

---

## 💡 最佳实践

1. **用 Intersection Observer 替代 scroll 事件** - 性能更好
2. **使用 CSS transforms** - 比修改 top/left 快
3. **启用 GPU 加速** - 加 `will-change: transform`
4. **限制粒子数量** - Canvas 50-100 个为佳
5. **移动端简化** - 媒体查询减少动画

---

**更新于**: 2024  
**下一步**: 参考 VISUAL_EFFECTS_GUIDE.md 获取更多效果详解
