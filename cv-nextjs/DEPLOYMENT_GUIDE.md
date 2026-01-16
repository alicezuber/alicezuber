# 🚀 部署指南 - 从本地到线上

## 📋 目录

1. [Vercel 部署 (推荐)](#vercel部署)
2. [Netlify 部署](#netlify部署)
3. [自主服务器部署](#自主服务器部署)
4. [Docker 部署](#docker部署)
5. [域名绑定](#域名绑定)
6. [部署后检查清单](#部署后检查清单)

---

## <a name="vercel部署"></a>1. Vercel 部署 (推荐)

### 为什么选择 Vercel?
- ✅ Next.js 官方支持 (最快最稳定)
- ✅ 免费 SSL 证书
- ✅ 自动 CI/CD
- ✅ CDN 全球加速
- ✅ 无需配置，一键部署
- ✅ 免费层足够个人网站使用

### 步骤 1: 准备 GitHub 仓库

```bash
# 初始化 git (如果还没有)
git init
git add .
git commit -m "Initial commit: CV website with Next.js"

# 推送到 GitHub
git remote add origin https://github.com/yourusername/cv-nextjs.git
git branch -M main
git push -u origin main
```

### 步骤 2: 连接 Vercel

1. 打开 https://vercel.com/
2. 点击 "Sign Up" 使用 GitHub 账户登录
3. 点击 "Import Project"
4. 选择 `cv-nextjs` 仓库
5. 点击 "Import"

### 步骤 3: 配置项目

**环境变量** (如果有):
```
无需配置 (此项目无第三方 API)
```

**构建设置**:
- Framework: `Next.js`
- Build Command: `npm run build` (自动)
- Output Directory: `.next` (自动)

### 步骤 4: 部署

1. 点击 "Deploy"
2. 等待构建完成 (通常 2-3 分钟)
3. 获得免费 `.vercel.app` 域名

### 部署完成 ✅

你的网站现在在线了！URL 如下:
```
https://cv-nextjs.vercel.app
```

---

## <a name="netlify部署"></a>2. Netlify 部署

### 步骤 1: 连接 Netlify

1. 打开 https://app.netlify.com/
2. 点击 "Add new site" > "Connect to Git"
3. 选择 GitHub
4. 选择 `cv-nextjs` 仓库

### 步骤 2: 构建设置

```
Build command:     npm run build
Publish directory: .next/standalone/
```

### 步骤 3: 部署

点击 "Deploy" 即可

---

## <a name="自主服务器部署"></a>3. 自主服务器部署

### 要求
- Node.js 18+ 
- npm 或 yarn
- Linux 服务器 (Ubuntu 推荐)

### 步骤 1: 连接到服务器

```bash
ssh root@your-server-ip
```

### 步骤 2: 安装 Node.js

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证
node -v  # v18.x.x
npm -v   # 9.x.x
```

### 步骤 3: 克隆项目

```bash
cd /var/www
git clone https://github.com/yourusername/cv-nextjs.git
cd cv-nextjs
npm install
npm run build
```

### 步骤 4: 使用 PM2 运行

```bash
# 全局安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "cv-nextjs" -- start

# 设置开机自启
pm2 startup
pm2 save
```

### 步骤 5: 使用 Nginx 反向代理

```bash
sudo nano /etc/nginx/sites-available/default
```

配置如下:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# 验证配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

### 步骤 6: 设置 HTTPS (SSL)

```bash
sudo apt-get install certbot python3-certbot-nginx

certbot --nginx -d your-domain.com
```

---

## <a name="docker部署"></a>4. Docker 部署

### 创建 Dockerfile

```dockerfile
# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 运行阶段
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

### 构建和运行

```bash
# 构建镜像
docker build -t cv-nextjs .

# 本地运行
docker run -p 3000:3000 cv-nextjs

# 推送到 Docker Hub
docker tag cv-nextjs yourusername/cv-nextjs
docker push yourusername/cv-nextjs
```

### 在服务器上部署

```bash
docker run -d -p 3000:3000 --restart=always yourusername/cv-nextjs
```

---

## <a name="域名绑定"></a>5. 域名绑定

### 步骤 1: 购买域名

推荐平台:
- Namecheap (便宜)
- GoDaddy (知名)
- 阿里云 (中国)
- 腾讯云 (中国)

### 步骤 2: Vercel 上配置域名

1. 打开 Vercel 项目设置
2. 点击 "Domains"
3. 输入你的域名
4. 按照提示更新 DNS 记录

**DNS 记录示例**:
```
Name:   @
Type:   A
Value:  76.76.19.20

Name:   www
Type:   CNAME
Value:  cname.vercel-dns.com
```

### 步骤 3: 验证

```bash
# 等待 DNS 生效 (可能需要 24 小时)
nslookup your-domain.com
```

---

## <a name="部署后检查清单"></a>6. 部署后检查清单

### ✅ 功能检查

- [ ] 首页加载正常
- [ ] 所有导航链接工作
- [ ] 深色/浅色模式切换正常
- [ ] 语言切换工作
- [ ] 社交链接跳转正确
- [ ] 所有动画流畅播放
- [ ] 移动设备适配良好
- [ ] 页面响应快速

### ✅ 性能检查

```bash
# 使用 Lighthouse
# 在 Chrome DevTools 中选择 Lighthouse 标签

# 目标分数:
# Performance: > 85
# Accessibility: > 90
# Best Practices: > 90
# SEO: > 95
```

### ✅ 安全检查

- [ ] HTTPS 已启用 (绿色锁)
- [ ] 没有混合内容警告
- [ ] CSP 头部配置
- [ ] X-Frame-Options 设置

### ✅ SEO 检查

- [ ] 页面标题正确
- [ ] Meta 描述完整
- [ ] Open Graph 标签完整
- [ ] robots.txt 配置
- [ ] sitemap.xml 生成
- [ ] 结构化数据标记

### ✅ 监控设置

#### 添加 Google Analytics

```typescript
// src/app/layout.tsx 中添加

import Script from 'next/script'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* 其他内容 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
```

#### 添加错误追踪 (Sentry)

```bash
npm install @sentry/nextjs

# 初始化
npx @sentry/wizard@latest --integration nextjs
```

---

## 🔄 持续部署 (CI/CD)

### GitHub Actions

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      - run: npm run lint
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🆘 故障排查

### 问题: 页面加载缓慢

**解决**:
1. 检查 Lighthouse 报告
2. 压缩大型图片
3. 启用缓存 (Next.js 自动)
4. CDN 已启用

### 问题: 构建失败

**查看日志**:
```bash
# Vercel 日志
vercel logs

# 本地构建测试
npm run build
```

### 问题: 样式未加载

**解决**:
```bash
# 清除缓存
rm -rf .next
npm run build

# 或使用 Vercel CLI
vercel --prod --force
```

### 问题: 域名无法访问

**检查**:
```bash
# 检查 DNS 解析
nslookup your-domain.com

# 检查连接
ping your-domain.com

# 查看 DNS 传播状态
https://www.whatsmydns.net
```

---

## 📊 部署后监控

### 推荐工具

| 工具 | 用途 | 免费额度 |
|------|------|--------|
| Vercel Analytics | 性能监控 | 是 |
| Google Analytics | 流量分析 | 是 |
| Sentry | 错误追踪 | 5000 事件/月 |
| Uptime Robot | 正常运行时间 | 50 个监视器 |

### 配置 Uptime 监控

1. 打开 https://uptimerobot.com/
2. 创建新的 HTTP 监视器
3. 输入你的域名
4. 设置告警邮箱

---

## 💰 成本估算

| 方案 | 成本 | 适合 |
|------|------|------|
| Vercel | 免费 | 大多数人 |
| Netlify | 免费 | 备选方案 |
| VPS (DigitalOcean) | $5/月 | 需要完全控制 |
| 虚拟主机 | $3-10/月 | 传统主机 |

---

## ✨ 下一步

1. **选择部署平台** - 推荐 Vercel
2. **购买域名** - 使用 Namecheap 或类似
3. **绑定域名** - 按照上述步骤
4. **配置 DNS** - 等待传播 (24 小时内)
5. **测试所有功能** - 使用检查清单
6. **设置监控** - Google Analytics + Uptime Robot
7. **定期更新** - git push 后自动部署

---

**最后一步**: 分享你的网站到社交媒体和专业网络！

```
🎉 我的个人 CV 网站已上线！
https://your-domain.com
```

---

**创建日期**: 2024  
**最后更新**: 部署时  
**难度等级**: ⭐⭐ (中等)
