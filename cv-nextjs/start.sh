#!/bin/bash

# Next.js Personal CV - 快速启动脚本

echo "🚀 Minato Baiyun CV - 启动助手"
echo "================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 未找到 Node.js，请先安装 Node.js"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo ""

# 检查是否在正确目录
if [ ! -f "package.json" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

# 安装依赖
echo "📦 正在安装依赖..."
npm install

echo ""
echo "🎨 Next.js CV 已准备好！"
echo ""
echo "可用命令："
echo "  npm run dev    - 启动开发服务器 (localhost:3000)"
echo "  npm run build  - 构建生产版本"
echo "  npm run start  - 启动生产服务器"
echo "  npm run lint   - 代码检查"
echo ""
echo "开发服务器现在启动中..."
echo "请访问 http://localhost:3000"
echo ""

npm run dev
