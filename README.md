# UKA Animation Company Website

UKA动画公司官方网站 - 专业的动画制作公司

## 特点

- 🎨 黑红主题设计，专业动画公司风格
- 📱 完全响应式布局
- 🌐 中英文双语支持
- ⚡ Next.js 14 + TypeScript
- 🎬 视频背景展示
- 🖼️ 多个作品展示板块

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 安装

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3001](http://localhost:3001)

## 构建

```bash
npm run build
npm start
```

## 项目结构

```
官网/
├── app/                    # Next.js 应用路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # React 组件
│   ├── Header.tsx         # 导航栏
│   ├── Hero.tsx           # 视频背景首页
│   ├── WorksSection.tsx   # 作品展示
│   ├── FullProductionSection.tsx  # 全流程承制作品
│   ├── CelShadeSection.tsx        # 三渲二制作作品
│   ├── MovieSection.tsx           # 电影制作作品
│   ├── AnimeSection.tsx           # 2D番剧制作作品
│   ├── NewsSection.tsx            # 新闻动态
│   ├── CompanySection.tsx         # 公司业务
│   └── Footer.tsx                 # 页脚
├── contexts/              # React Context
│   └── LanguageContext.tsx  # 语言切换
├── lib/                   # 工具函数
│   └── translations.ts    # 翻译文本
└── public/               # 静态资源
    └── images/           # 图片资源
```

## 板块说明

### 1. 作品展示
展示公司最新的动画作品，包括：
- 青之箱
- 黙示録の四騎士
- 指环王：洛希尔人的战争
- 胆大党
- 灵云代码

### 2. 全流程承制作品
展示全流程制作的动画项目：
- 驭灵师
- 我家大师兄有点靠谱
- 无脑魔女
- 个人英雄主义
- 血与心
- 即将动画化

### 3. 三渲二制作作品
展示3D转2D风格的作品（8个作品）

### 4. 电影制作作品
展示电影级制作项目（2个作品）

### 5. 2D番剧制作作品
展示传统2D动画作品（8个作品）

### 6. 新闻动态
公司最新动态和新闻资讯

### 7. 公司业务
展示公司的主要业务板块

## 自定义

### 修改作品内容
编辑对应的组件文件：
- `components/WorksSection.tsx` - 作品展示
- `components/FullProductionSection.tsx` - 全流程作品
- `components/NewsSection.tsx` - 新闻资讯

### 修改样式
- `app/globals.css` - 全局样式
- 各组件内的 Tailwind CSS 类名

### 添加语言
编辑 `lib/translations.ts` 添加新的语言支持

## 部署

项目已配置自动部署到 Vercel。每次推送到 GitHub 主分支都会自动触发部署。

## License

© 2024 UKA Animation Company. All rights reserved.
