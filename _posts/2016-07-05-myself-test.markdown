---
layout: default
title:  "如何在Github Pages搭建自己写的页面？"
date:   2016-07-03 15:35:07 +0800
categories: jekyll update
---

###如何在Github Pages搭建自己写的页面？
学了前端小半年，如今写了个自己的网页，却发现部署很麻烦，部署到阿里云之类，买域名啊啥的还要收费，说贵也不贵，但我就是傲娇~

google一下了解到Github有一个Github pages的功能可以搭建博客或者托管网页，而且免费耶，搜了下教程，猛地一看感觉步骤也不是很麻烦，所以就用这个了！

教程一大堆，却没有几个能看懂的，问题一：90%的都在讲解如何搭建博客，和我想要将自己的网页部署到上面还是有点区别的。问题二：所有的教程都用到了Git，而我只知道Git是一个开源的分布式版本控制系统。完全不知道命令行是什么鬼，只能照猫画虎的小白来说，那些教程只能帮我到桥头，但想要成功过河，还需要深夜里的一包特浓咖啡。

开始教程之前的准备工作：

1、需要你自己写的网页文件。
<img src="https://manixchen.github.io/imgs/demo1/1.png"/>

2、注册Github。

3、下载安装git。下载地址https://git-scm.com/downloads

教程开始：（以下出现的test指你的网页名或者你想起的一切名字）

步骤一：登录到Github上，新建一个repo，命名为test，勾选 initialize this repository with a README，点击create repository。
步骤二：打开settings，有一个Github Pages 的设置，点击Launch automatic page generator（启动自动页面生成器）。
步骤三：点击页面最后的continue to layouts，然后就可以进入设置你的页面主题，你会说这不是我的网页呀，别急嘛，先选择一个主题，点击 publish pages。

这个时候会出现你的网页的网址，也就是下图的 http://jiayili.github.io/test.复制打开这个网址，你看到了什么？
哇塞，这不是刚自己设置选择的主题页面吗？
好了，别激动了，真正让一个小白你发疯的阶段开始了，有了自己的网址，但页面显示的是什么鬼？

至此以上，github上要处理的操作告一段落，该上Git了！
步骤四 ：打开此电脑，选择一个盘，比如 f 盘，右键空白处点击 git bash here。

步骤五：输入如下命令，用来在 f 盘创建 test 文件放你的github上的test repository，克隆test repository到 test 文件中。

这个时候你的 f 盘，就会多一个 test 文件，打开它，

会看到一个 README.md 的文件，这个文件是从哪来的呢？追溯到gihub上，你会发现你有两个分支（branches），而 README 文件是来自 master 分支。

而我们需要编辑的是另一个分支——gh-pages，因为这个分支才能够真正定义github pages的内容和样式，也就是可以呈现你网页的地方。

步骤六：输入以下命令，为了在本地新建一个gh-pages分支，而这个分支是远程分支origin/gh-pages的镜像，也就是我们可以在本地的gh-pages看到github上的gh-pages的内容。

这个时候我们再打开 f 盘，发现变样了

刚才还是README呢，怎们现在成了3个文件了，这3个文件来自哪？

来自github 上的 gh-pages 分支下的文件。

打开f 盘中的 index.html，你会发现就是咱们一开始选择主题的页面。那我们将这个页面替换成自己coding的网页不就好了？

 

步骤七：执行如下命令，删除原有的gh-pages文件，并提交（commit）本次修改。

这个时候 f 盘没有文件。

步骤八：将自己的网页文件复制粘贴至 f 盘的 test 文件中

输入如下命令，为了本地gh-pages中的网页文件同步到远程的gh-pages中。

输入最后一行 git push origin gh-pages，按回车，等一会，会有弹出框让你输入你的 github 账号和密码。


恭喜你，成功了！！！

 
##附录一：常用git命令：

$ git clone  //本地如果无远程代码，先做这步，不然就忽略

$ cd //定位到你blog的目录下

$ git status //查看本地自己修改了多少文件

$ git add . //添加远程不存在的git文件

$ git commit  -m "what I want told to someone" //提交修改

$ git push  //更新到远程服务器上

$ git rm //移除文件

 

##附录二：如何修改你的网页？

方法一：在github上的gh-pages分支中直接进行修改。（如果不添加新的文件推荐此法）

方法二：在github客户端进行修改在同步。（如果添加了新的文集推荐此法）

转载自http://www.cnblogs.com/lijiayi/p/githubpages.html

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
