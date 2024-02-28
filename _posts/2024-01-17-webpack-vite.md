---
layout: post
title:  javascript vite构建工具入门到上手
tags: javascript ES6 vite
categories: ES6 vite
---


*** 初始化 ***
# npm
npm init vite@latest
​
# yarn
yarn create vite
​
# pnpm
pnpm create vite

**** 初始化项目架构 ***

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

 # npm 6.x
 npm init vite@latest my-vue-app --template vue

 # npm 7+, 需要额外的双横线：
 npm init vite@latest my-vue-app -- --template vue

 # yarn
 yarn create vite my-vue-app --template vue

 # pnpm
 pnpm create vite my-vue-app -- --template vue

注意：在 Vite 中所选择的 template 的 vue 模板默认是 vue3 的版本；

*** 启动项目 ***
cd vite-vue3 && npm install && npm run dev



**** 5.vue的安装方式 ***
```
创建 Vue2 项目


5.1 初始化（同Vue3）

npm init vite@latest


5.2 输入项目名：vite-vue2



5.3 选择一个框架：vanilla



5.4 选择完成之后

cd vite-vue2 && npm install && npm install vite-plugin-vue2 vue-template-compiler -D


5.5 新建 vite.config.js 文件

 // 1. 新建: touch vite.config.js
 ​
 // 2. 打开且编辑 vite.config.js
 import { createVuePlugin } from 'vite-plugin-vue2'
 ​
 export default {
   plugins: [createVuePlugin()],
 }
5.6 安装 vue2

由于 vue 仓库主分支默认 vue3.x，所以直接 npm install vue 安装的是最新的 vue3，所以安装 vue2.x 得使用版本号

 npm install vue@2.7.0 -save-dev
5.7 修改项目结构

1. 创建src文件夹

2. 将 main.js 移入src 文件夹中，并修改：

     // main.js
     import Vue from "vue";
     import App from "./../App.vue"
     ​
     new Vue({
        el: "#app",
        render: (h) => h(App)
     }).$mount();
3. 修改 `index.html`中对 `main.js`的引用路径：`<script type="module" src="/src/main.js"></script>`

4. 在src文件中创建`App.vue`，并修改：

<template>
  <div>This is Vue2</div>
</template>
5.8 启动项目

 npm install && npm run dev
创建 vue2 项目或者可以使用官方提供的 awesome-vite ，找到自己想使用的插件即可（如下图）
```
