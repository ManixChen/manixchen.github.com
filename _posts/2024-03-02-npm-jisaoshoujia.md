---
layout: post
title:  javascript  脚手架制作
tags: javascript ES6 webpack 脚手架
categories: webpack
---
*** 通用脚手架 ***
> 本脚手架主要方便个人开发，常用的项目脚手架个模板自己封装便于使用，在企业中节约重复造轮子的时间，
包含VUE脚手架常用的插件功能，其实就是提升复用率，目前完成了VUE3的PC端模版
```
npm i manix-sun-cli
manix-sun-cli create <project name>
根据需求选择即可
```
1. vue3 PC端后台模板
2. vue2 PC端后台模板
3. vue3 移动端模板
4. vue2 移动端模板
5. 微信小程序模板


*** 安装前端脚手架制作所需要的一些插件 ***
npm install chalk@4.0.0 commander@9.4.1 download-git-repo@3.0.2 fs-extra@11.1.0 inquirer@8.0.0 log-symbols@4.0.0 ora@5.0.0 path@0.12.7 update-notifier@4.0.0
npm install babel-cli babel-env chalk commander download-git-repo ini inquirer log-symbols ora

npm i vite-plugin-imagemin -D

```
"chalk": "^4.0.0", //用于修改终端（terminal）输出的字符串样式，包括字体色、背景色、字体样式
"commander": "^9.4.1", //是 node.js 命令行解决方案，可以自动解析命令和参数，用于处理用户输入的命令，合并多选项，处理短参，等等
"download-git-repo": "^3.0.2", //主要用来从一个代码仓库中下载文件的到目标文件夹
"fs-extra": "^11.1.0", //加强版的 fs（node 文件系统模块），主要用于操作文件
"inquirer": "^8.0.0", //inquirer.js 是一个用来实现命令行交互式界面的工具集合,它帮助我们实现与用户的交互式交流
"log-symbols": "^4.0.0", //为各种日志级别提供着色的符号
"ora": "^5.0.0", //主要用于创建和展示终端加载动画
"path": "^0.12.7", //主要用于格式化或拼接完整路径
"update-notifier": "^4.0.0" //检测 npm 包是否更新
"babel"：语法转换工具
"gulp": 构建工具

metalsmith 静态网站生成器，批量处理模版

handlebars 模版引擎，将用户提交的动态信息填充到文件中

open 打开诸如URL，文件，可执行文件之类的东西
clipboardy 访问系统剪贴板（复制/粘贴）
progress 显示进度条
configstore 保存配置
```
依赖插件准备



文件结构如下，创建相应的文件，配置 package.json文件




运行测试脚手架
1、以上把我要实现的整体的脚手架代码已经编写完成了，接下来我们测试下；首先通过npm link软连接的方式，在项目本地测试脚手架的功能，可以看到已经成功完成了我想要的功能


npm link

sun-cli -v



要查看npm官网中是否已有自己准备上传的包名，打开cmd。执行命令

指令：npm view 【你的npm包名】

注：包名上传时会自动转小写，所以你还是用小写的名称吧

如果出现如下图。则表示包名已存在，建议换个其他包名



1.注册npm上传模块报错  
err: This operation requires a one-time password 还有其他的一大堆
这是因为npmjs平台强制开发者们要开启2FA验证

2.解决办法
登录npmjs官网，如果是首次发布就点击头像然后点击account选项然后在页面中找到Enable 2FA，如果是更新包的话就直接进入自己包的页面然后切换到setting页面下

接下来就是开启验证，我的是直接开启了指纹验证，开启后就可以继续上传了

开启2FA验证后，再输入npm login 就不会报错了，大家要注意阅读它的提示，框起来的那个地址，要自己复制，去浏览器打开，拿验证码再输入，就搞定了！

可以将npm login 控制台的链接在浏览器打开即可输入邮箱中的验证码即可，如果开启了验证的可以百度搜索一个双因子认证APP下载扫描二维码即可动态绑定实时生成校验码

3.登录npm账号并提交个人创建的脚手架项目
npm adduser //创建账户
npm login //登录
npm whoami //查看已经登录的账号

//前提已完成npm用户的注册
$ npm adduser
Username: your name
Password: your password
Email: yourmail@gmail.com
更改版本号
npm version <update_type>  
发包
npm publish
*** 如果上面的报错，就行下面这个指令 ***
 npm publish --access public
发布完之后想修改一下如何操作呢（升级）
首先：npm view publish_demo versions // 查看远端已经发布的publish_demo包的版本
然后：将包的内容进行修改，修改完后作为一个新的版本就行提交，
修改版本号：使用 npm version <update_type> 进行修改，update_type 有三个参数
patch：这个是补丁的意思，补丁最合适；
minor：这个是小修小改；
major：这个是大改咯；

具体咋用：
比如我想来个1.0.1版本，注意，是最后一位修改了增1，那么命令：npm version patch
比如我想来个1.1.0版本，注意，是第二位修改了增1，那么命令： npm version minor
比如我想来个2.0.0版本，注意，是第一位修改了增1，那么命令： npm version major

03 Forbidden - PUT

```
npm发版时报错
网上有各种升级的方案，这里我没有尝试
解决：
npm config set registry=https://registry.npmjs.org

这是因为用的淘宝的镜像地址
镜像地址是https://registry.npmmirror.com/或者 https://r.cnpmjs.org/都会跳到这个，而且你输入了username之后还让你注册，注册还会报错。
这是不行的，我们要把镜像地址改回原来的。
命令： npm config set registry http://registry.npmjs.org/注意不是下面的https地址，是http地址。
（注意不是npm config set registry https://registry.npmjs.org/）
至于为什么不是https地址，我们接着看。  

配置完了一定要重新 npm adduser
```





*** 修改CNPM源 ****

输入npm login直接给你跳转到Sign in to CNPM
这个地址https://registry.npmmirror.com/-/v1/login/request/session/60eec133-af28-4005-8a67-7a71c25a08ca

你可以使用我们定制的cnpm命令行工具代替默认的 npm。
cnpm 支持除了写相关操作外的所有命令，例如 install、info、view 等。
$ npm install -g cnpm --registry=https://registry.npmmirror.com
或者你直接通过添加 npm 参数 alias 一个新命令:
alias cnpm="npm --registry=https://registry.npmmirror.com \ --cache=$HOME/.npm/.cache/cnpm \ --disturl=https://npmmirror.com/mirrors/node \ --userconfig=$HOME/.cnpmrc"
当然，你也可以使用任意你心仪的命令行工具，只要配置 registry 即可
$ npm config set registry https://registry.npmmirror.com
安装模块
$ cnpm install [name]
同步模块
$ cnpm sync cnpmcore
当然, 你可以直接通过 web 方式来同步, 界面打开时会自动比对版本信息
$ open https://npmmirror.com/sync/cnpmcore







*** 同步项目 ****

echo "# manix-sun-cli" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ManixChen/manix-sun-cli.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/ManixChen/manix-sun-cli.git
git branch -M main
git push -u origin main
