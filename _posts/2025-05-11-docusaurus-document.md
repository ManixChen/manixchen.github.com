```yaml
layout: post
title:  docusaurus 入门
tags: docusaurus document
categories: docusaurus document
```

> [官网](https://docusaurus.io/zh-CN/)

### 创建项目

```bash
npx create-docusaurus@latest react-help-book classic --typescript

# 安装依赖
cd react-help-book
npm install

# 启动开发服务器
npm start
```


```
react-help-book
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```
 

 ### 创建文档
 ```
 react-help-book # 你的网站的根目录
├── docs
│   └── greeting.md
├── src
│   └── pages
├── docusaurus.config.js
├── ...
 ```

 ### 创建文档
 ```
 ---
description: Create a doc page with rich content.
---

# Hello from Docusaurus

Are you ready to create the documentation site for your open source project?

## Headers

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

## Only h2 and h3 will be in the TOC by default.

You can configure the TOC heading levels either per-document or in the theme configuration.

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times
 ```

 ### 特性
 - 选项卡式导航栏
 ```md
 import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
 ```md
 - 告示
 ```
 :::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
 ```
 - 内置插件支持
 - 内置搜索
 - 内置 Markdown 解析器
 - 内置 MDX 文档支持 
 - 多语言支持
 - 自定义主题 