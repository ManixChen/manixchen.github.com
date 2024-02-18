

一、 博客地址
[一篇博客从入门到实施github blog](http://manixchen.github.io/)

> [可以看更多项目](https://manixchen.github.io/) <https://manixchen.github.io/>/master
  
 >  [点我查看中文说明](https://github.com/ManixChen/manixchen.github.com/blob/master/README_zh_CN.md)
 


### 起因
``` 
  其实近两年使用VUE场景多起来了我就想着把手上的项目都使用Vue重构一下，这样一看，我算是一个完美主义者吧，哈哈^__^
  这个项目其实也是之前的老项目基于ryby jekyll Liquid 模板解析的一个静态博客，其实经历还挺久的这个项目，应该16年我大学那会就翻墙弄的，后面因为兴趣爱好问题，静态博客无法满足自己的需求，其实有部分也在于之前精力有限，没有一直去定制所谓的模板，其实前端还是比较重要的，直接很大程度影响用户体验，所以深感前端重要性，也是打算把这个博客简单重构一下，奈何本人文化有限和能力有限，缺乏一个审美到位的UI合伙人，我的博客就一直搁浅，最近也是逼了自己一把，过年这几天就在家写了下，自己抄，哦，还是说借鉴了一部分网站的样式主题简单定制了下，其实这不是最关键的，关键的是你现在可以直接访问我的博客简单看看效果,下面是我简单重构的记录
```

1.前提条件，别在这个上面吃亏
> 为了保障代码的独立性，我一般会新建一个分支，当然这次可把我坑了下，记起来几年前第一次使用github制作博客也记录了这个问题，可是这么多年过去电脑换了好几个就忘了这个事情，无论怎么新建分支，请记住github静态博客支持所有仓库下的 master 和 gh-pages
>> 这个没有什么好疑惑的，就像最开始Tomcat和Apache支持www下的index开通的特定启动页一样，具体看人家开放你什么接口你就用什么接口吗，约定俗成


2. git安装（新手参考即可）
> 创建 GitHub 账户
访问 https://github.com 并创建一个 GitHub 账户。
本地安装 Git
根据操作系统下载并安装 Git：https://git-scm.com/download
本地安装 Jekyll
安装 Ruby和Devkit https://rubyinstaller.org/downloads/
安装 Jekyll cmd命令：gem install jekyll bundler
————————————————
 
3. 快速搭建(记住用户名想好就行)
创建新的 Repository
登录 GitHub，点击页面右上角的 “New” 按钮，创建一个新的 Repository，名称为 你的用户名.github.io （注意：这里的用户名指的是你的 GitHub 用户名，Manixchen（账号名）/manixchen.github.io（仓库名））。
获取我的仓库文件
搜索栏搜索 carlosw0713.github.io 进入我的仓库，点击右上角的 Fork 将我的仓库拉到你仓库下。
运行查看
点击仓库 setting 再点击 Pages 当出现如下画面，可以点击 Visit site 查看或者直接浏览器输入你的Github账号名.github.io 

4. 查看项目结构
> 网站GitHub Pages + Jekyll实现的静态网页，Jekyll 网站基础结构如下

├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.markdown
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts   ### (_post可以说的上是整个博客最重要的部分了，应为文章都统一存放在这个页面。需要注意点如下：)
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.markdown
|   └── 2009-04-26-barcamp-boston-4-roundup.markdown
├── _data
|   └── members.yml
├── _site (不建议上传GIT,因为github的仓库会帮你再次编译，其实完全托管给他们服务器帮你操作了)
├── img
└── index.html

> 其实挺简单
  _config.yml 全局配置文件
  _posts 放置博客文章的文件夹
  img 存放图片的文件夹

#### _config.yml参考
``` 
permalink: /:year-:month-:day/:title/

highlighter: rouge
markdown: kramdown
kramdown:
input:  GFM
syntax_highlighter: rouge


paginate: 10
paginate_path: ":num" 
url: "https://manixchen.github.io/" #后面会覆盖
baseurl: ""
gems: [jekyll-paginate]   #分页插件
plugins: [jekyll-paginate]

# 配置默认的文章布局页面，可以多套主题，这个我使用的默认主题开发
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      layout: post  
      styles : [elementplus.css,style.css,index.css,highlight.css]
      scripts : [index.js]


autor: "manixchen"
title: "沐辰"
email: "manixchensunshine@163.com"
description: "ManixChen的个人技术博客,此博客采用VUE3+elementPlus+ jeklly markdown构建，仅供github个人主页使用，废弃了17年第一版本的jquery bootstrap"
github_username:  "ManixChen"
#搜索功能
swiftype_searchId: "自己申请去，你也用不了我的"
disqus_shortname: "自己申请去，你也用不了我的"
 
 #你可以定义全局常量访问在页面中使用 {{site.qqSpace}}
qqSpace: http://user.qzone.qq.com/13838389438(your qq number)

url: "http://127.0.0.1:4000"
imgrepo: "http://127.0.0.1:4000/static/img"

url: "https://manixchen.github.io/" #起作用的就是这个自动覆盖之前的配置,这个就代表外部访问你的地址，开发环境下可以先注释掉
imgrepo: "https://manixchen.github.io/static/img" #其实你懂了，你其他项目也可以引用仓库图片，白嫖学会了吧 **__** 不要太过分


```

5. 开始写作了，用MD记录你的博客就行了
>   _post可以说的上是整个博客最重要的部分了，应为文章都统一存放在这个页面。需要注意点如下：

 - 5.1  文章抬头设置
      ```
      ---
      ifupdate: false #是否需要更新配合初始化代码使用
      layout: post     
      title: Jekyll-博客模板	#文章标题
      subtitle: 模板	#文章副标题
      date: 2023-04-03	#文章日期
      author: Carlos	#作者
      header-img: img/bg-cook.jpg	#文章 head 图片
      catalog: true	
      tags:	#  网页 tags 标签
      - 博客模板
      - 博客初学
      --- 
      ``` 

 - 5.1 文件名称和路径设置
      ```文件名称需要设置为 yyyy-MM-dd-文件名格式。格式不正确jekyll将不会解析该md文件
      路径可以设置在根目录下或者子目录下都行，建议设置为 大类/小类/文件名 ，例如 Python/Python高级操作/2023-05-21-Python日志操作
      ```

 6  需要注意点, Markdown好jekyll语法语法
     6.1  Markdown文件可以包含HTML代码。Jekyll会自动将Markdown文件转换为HTML页面，并保留其中的HTML标签。如果你在Markdown文件中使用了Liquid模板语法，可以会导致网页找不到对应的数据，需要使用
     ```
     {% raw %}和{% endraw %}标记来避免Liquid解析其中的内容。例如： 
      {% raw %}
      这是一段包含Liquid模板语法的代码：{{ variable }}
      {% endraw %}  
    6.2  jekyll语法[官网](http://jekyllcn.com/docs/github-pages/)
    ```
      所有教程都挺全的
      ```
      site 来自_config.yml文件，全站范围的信息+配置。 
      page 页面专属的信息 + YAML 头文件信息。通过 YAML 头文件自定义的信息都可以在这里被获取。 

      layout  Layout specific information + the YAML front matter. Custom variables set via the YAML Front Matter in layouts will be available here.

      content 被 layout 包裹的那些 Post 或者 Page 渲染生成的内容。但是又没定义在 Post 或者 Page 文件中的变量。

      paginator 每当 paginate 配置选项被设置了的时候，这个变量就可用了。详情请看分页。
      ``` 


7. 详细信息可以获取在博客中使用
    site 
    site.time 当前时间（运行jekyll这个命令的时间点） 

    site.pages  所有 Pages 的清单

    site.posts 一个按照时间倒序的所有 Posts 的清单
 
    site.static_files

    静态文件的列表 (此外的文件不会被 Jekyll 和 Liquid 处理。)。每个文件都具有三个属性： path， modified_time 以及 extname。
 
    ‘site.pages’的子集，存储以‘.html’结尾的部分。
 

    ‘site.static_files’的子集，存储以‘.html’结尾的部分。
 
    site.data   一个存储了 _data 目录下的YAML文件数据的清单。

    site.documents 每一个集合（collection）中的全部文件的清单。

    site.categories.CATEGORY  所有的在 CATEGORY 类别下的帖子。

    site.tags.TAG 所有的在 TAG 标签下的帖子。

    site.[CONFIGURATION_DATA] 所有的通过命令行和 _config.yml 设置的变量都会存到这个 site 里面。 举例来说，如果你设置了 url: http://mysite.com 在你的配置文件中，那么在你的 Posts 和 Pages 里面，这个变量就被存储在了 site.url。Jekyll 并不会把对 _config.yml 做的改动放到 watch 模式，所以你每次都要重
 

8. 博客在在本地安装测试  
  终端命令行：  jekyll server 即可
    指定的端口查看即可 

9. 上传前一定记得修改_config.yml中的网站默认参数,如下参考
    ```
    baseurl: ""
    url: "https://manixchen.github.io/" #起作用的就是这个自动覆盖之前的配置
    imgrepo: "https://manixchen.github.io/static/img"
    
    autor: "manixchen"
    title: "沐辰"
    email: "manixchensunshine@163.com"
    description: "ManixChen的个人技术博客,此博客采用VUE3+elementPlus+ jeklly markdown构建，仅供github个人主页使用，废弃了17年第一版本的jquery bootstrap"
    github_username:  "ManixChen"
    ```
  
10. 同步代码到仓库即可,开启github的All workflows即可，工作流，自带jekyll编译，一同步代码就自动编译，你可以在你的github 仓库的 Action栏目看到
10.1
![All workflows](/static/img/git/blog/2024-02-18_204803.png)
10.2
![All workflows](/static/img/git/blog/2024-02-18_205402.png)
10.3
![All workflows](/static/img/git/blog/2024-02-18_205443.png)
10.3 实时编译情况，只要上传便会编译一次，建议萌新不要做太大改动工作流这块，github提供了操作系统环境的一些配置，请查阅文档后操作
![All workflows](/static/img/git/blog/2024-02-18_210439.png)

11.这个目前配置所有允许所有用户才能更好实现推送编译(你也可以在本地关联你的gihub账号)

![All workflows](/static/img/git/blog/2024-02-18_230747.png)


####  后期需要改内容

#### 1. swiftype

此服务提供站内搜索功能

服务地址：<https://swiftype.com/>

设置方法可参考 <http://opiece.me/2015/04/16/site-search-by-swiftype/>

设置完毕后，您需要修改 `_config.yml` 中 `swiftype_searchId`。

在自己的引擎中，进入 `Setup and integration` -> `Install Search`, 你将找到 `swiftype_searchId`。

```html
<script type="text/javascript">
...
...
  _st('install','swiftype_searchId','2.0.0');
</script>
```

#### 2.disqus

此服务提供评论功能

服务地址：<https://disqus.com/>

设置方法可参考 <http://blog.ihurray.com/blog/Disqus-learning.php>

设置完毕后, 你需要修改 `_config.yml` 中的 `disqus_shortname` ,否则对您博客的评论将归到本人名下。


#### 目前以上功能我全部移除了，后续有时间再添加定制，常用的免费的还是挺多的，页面搜索还有网站排名

