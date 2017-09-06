---
layout: post
title: node npm环境变量以及npm默认保存路径
tags: node npm npmpackage环境包
categories: node_npm
---
## I、软件包
安装nodejs》
路径：E:\nodejs

安装git》
路径：E:\git

********
### 1、查看npm全局相关配置
npm config ls

## 修改配置》
### 2、设置npm包安装位置
npm config set prefix "E:\\AAHuanjing\\nodejs\\node_global"

### npm缓存路径
npm config set cache "E:\\AAHuanjing\\nodejs\\cache"

### 如图 ：
![npm全局设置][arg0 "npm 配置文件"]


### 环境变量配置!!!

1  用户变量path中加上： E:\AAHuanjing\nodejs\node_global

2  系统变量path中加上： E:\nodejs\;E:\AAHuanjing\nodejs\node_global

3  系统变量加上：Node_path= E:\AAHuanjing\nodejs\node_global



[arg0]: {{"/npm_config_settings.png" | prepend: site.imgrepo }}
