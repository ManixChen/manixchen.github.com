```yaml
layout: post
title:  Rspack Rsbuild 入门
tags: Rspack Rsbuild
categories: Rspack Rsbuild
```

> 环境准备



![Alt text](2345%E6%88%AA%E5%9B%BE20240510103941.png)
####   
```
Node.js
对于 Node.js，请安装 Node.js >= 16 版本，推荐使用 Node.js LTS 版本。
通过以下命令检查当前使用的 Node.js 版本：

```
- node -v
# 安装 Node.js LTS
nvm install --lts
# 切换到 Node.js LTS
nvm use --lts


###  win1o使用power shell 更新 pnpm 
> Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression

- 需要注意墙问题

### UI 库
1. https://www.skeleton.dev/docs/get-started/migrate-from-v2

### 全局需要安装
npm install -g tailwindcss postcss autoprefixer

### 删除
- rm -rf node_modules .rsbuild-cache