---
layout: post
title:  javascript  webpack配置
tags: javascript ES6 webpack 代码压缩
categories: webpack
---


1.前端模块化打包初识
commonjs语法形式
```
> user.js
const login = function(formData){
  console.log("logoing")
  return {}
}
const register = function(formData){
  console.log("register")
}
module.exports = {
  login:login,
  register:register
}
>login_index.js  引入
const user =require('./user.js')
const resp = user.login({})
```



ecmascript语法形式
```
> user.js
export const login = function(formData){
  console.log("logoing")
}
export const register = function(formData){
  console.log("register")
}

>login_index.js  引入
import {login,register} from './user.js'
```




2. *** npm包管理工具 ***
npm init -y
npm i packagename




1.
 Tree Shaking中文含义是摇树，在webpack中指的是打包时把无用的代码摇掉，以优化打包结果。
而webpack5已经自带了这个功能了，当打包环境为production时，默认开启tree-shaking功能
先来讲讲一个东西——副作用，是什么东西呢？副作用指的是：除了导出成员之外所做的事情，我举个例子，下面的a.js是没副作用的，b.js是有副作用的

```  
a.js

js复制代码function console () {
  console.log('console')
}
export default {
  console
}


b.js

js复制代码function console () {
  console.log('console')
}

// 这个就是副作用，会影响全局的数组
Array.prototype.func = () => {}

export default {
  console
}

有无副作用的判断，可以决定tree-shaking的优化程度，举个例子：

我现在引入a.js但是我不用他的console函数，那么在优化阶段我完全可以不打包a.js这个文件。
我现在引入b.js但是我不用他的console函数，但是我不可以不打包b.js这个文件，因为他有副作用，不能不打包。

```


*** sideEffects的使用***

sideEffects可以在package.json中设置：
js复制代码// 所有文件都有副作用，全都不可 tree-shaking
{
 "sideEffects": true
}
// 没有文件有副作用，全都可以 tree-shaking
{
 "sideEffects": false
}
// 只有这些文件有副作用，
// 所有其他文件都可以 tree-shaking，
// 但会保留这些文件
{
 "sideEffects": [
  "./src/file1.js",
  "./src/file2.js"
 ]
}
