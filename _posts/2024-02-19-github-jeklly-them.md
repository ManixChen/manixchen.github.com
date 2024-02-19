---
layout: post
title:  Jekyll 主题抽离定制
tags: Jekyll  免费建站 新手建站 VUE github
categories: Web  Blog 
---
  
   
> 其实挺简单
  _config.yml 全局配置文件
  _posts 放置博客文章的文件夹
  img 存放图片的文件夹

 *** _config.yml参考 ***
  ```
  defaults:
    -
      scope:
        path: ""
        type: "posts"
      values:
        layout: "my-site"
    -
      scope:
        path: "projects"
        type: "pages" # 以前的 `page`， 在 Jekyll 2.2 里。
      values:
        layout: "project" # 覆盖之前的默认布局
        author: "Mr. Hyde"
  ```
  *** 遵从的规则就是后面指定的会替换前面指定的规则 ***

