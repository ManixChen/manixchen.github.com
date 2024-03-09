---
layout: post
title: 免费激活Idea的热部署插件JRebel，解决连接失败报错，提供下载地址
tags:  java 
categories: JRebel IDEA Plugin
---



 
###### 免费激活Idea之热部署插件JRebel，解决连接失败报错
JRebel是一个实用的插件，它可以让你在不重启服务器的情况下，修改Java程序并即时生效。相信大家都有这样的经历：每次修改代码后都需要重新编译、打包、部署，然后重启服务器，这个过程非常耗时且繁琐。但是，如果你使用了JRebel，你就可以摆脱这些烦恼，轻松享受修改代码后立即生效的快感！

1、安装
直接在插件中搜索即可

File – settings – Plugins – Jrebel and XRebel for IntelliJ下载安装 


2、激活
重启Idea之后，会弹出JRebel setup guide页面，点击JRebel Activation

GUID生成：https://www.guidgen.com/

激活URL : https://jrebel.qekang.com/GUID

点击第一个网页，会生成一个GUID，复制，替换第二个链接的GUID

例如：https://jrebel.qekang.com/132d042c-3b1a-4c45-9044-b7897c3de788

第二栏的邮箱随便写，然后点击右下角的激活按钮即可

3、Unable to connect 报错
如果报Unable to connect to license server.Check your network connnection and/or VPN settings.




需要下载连接工具
https://github.com/ilanyu/ReverseProxy/releases/tag/v1.4

下载自己电脑匹配的版本，下载成功后打开运行 


向上图这样就可以了

一定要注意这里的ip地址和端口号保持一致，然后再次执行上面的激活步骤

我写的  http://0.0.0.0:8888/986741e0-4cb2-413a-8082-601ca3489f4b


格式 	IP/GUID
ip生成工具 https://github.com/ilanyu/ReverseProxy/releases/tag/v1.4

GUID在线最新生成：https://www.guidgen.com/



#####  参考文档
*** IDEA中Lombok插件的安装与使用 ***
https://www.cnblogs.com/iathanasy/p/9262689.html
https://www.javatiku.cn/ideaplugins/9527.html
https://blog.csdn.net/m0_68055637/article/details/135444254