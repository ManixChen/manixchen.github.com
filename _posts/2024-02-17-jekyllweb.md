---
layout: post
title: markdown自动生成github博客(前篇)
tags: jekyll vue3 elementplus
categories: web建站 jekyll建站 github
---
 
1. <b> 为什么我要用这么不知名的语言写这个系统</b>
* 好奇心驱使，热爱新鲜技术，希望避免重复性劳动
* 复用率高，每天写写markdown日记便可以同步到github
* 学的东西都来自开源，总的回馈点什么


``` 起因
  其实都知道github是我们很常用的一个仓库
. 很多人在上面贡献了大量的优秀项目
其中的大神也是层出不穷
谁人不想拥有自己的开源项目，就像尤玉溪一样，当然就是VUE的提出者兼实施者，MVVM框架的创造大佬一样
言归正传，在我刚大学毕业那会就一直研究怎么不花钱就去搭建博客，那时候还花钱备案去域名备案中心备案，后面接触了github这个平台
是真的挺好用的，个人用于记录项目并回滚是相当方便的

github既然这么方便，但是大家有没有想过，为什么github个人主页不能进行个性化定制呢，其实不然，giithub是提供了几种定制方法的
```

### 方法
今天我使用的便是 ruby jekyll vue3 elementplus 来重构N年前的 jquery  bootstrap 方案
有兴趣的自行下载，您现在看到的项目便是使用最新的vue3实现的


###操作
1. 安装ruby：
    - 配置淘宝镜像，自行百度，我就不重复性劳动
    - 安装gem
        ``` 
        ryby安装以及插件 
        gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/ 
        ```
2. 安装jekyll：[官网](http://jekyllcn.com/)
    - 自行百度 使用gem即可
    ```  
        gem install jekyll
        gem install jekyll-paginate --platform=ruby

    ```
    - 创建jekyll项目按照官网很简单，或者直接clone我的项目也可以很快上手
    ```
            gem install jekyll bundler 
            jekyll new my-awesome-site 
            cd my-awesome-site 
            bundle install 
            bundle exec jekyll serve
            # => 打开浏览器 http://localhost:4000
    ```
    - 自定义域名
    ```
    不想再与主机服务商打交道？GitHub Pages 基于 Jekyll 构建，你可以轻而易举地在 GitHub 上免费发布网站——自定义域名等等。

        进一步了解  [使用GitHub Pages](https://pages.github.com/)
        
        GitHub Pages是一个通过GitHub托管和发布网页的服务，官方文档：https://docs.github.com/en/pages。本文使用GitHub Pages部署个人博客网站。

        每个GitHub用户可以创建一个用户级网站，仓库名为<username>.github.io，发布地址为 https://<username>.github.io。GitHub Pages支持自定义域名，参考文档About custom domains and GitHub Pages。

        在部署之前，检查_config.yml中的url是否正确配置为上述发布地址（或者自定义域名）。 
    ```
    [参考花裤衩知名git主](https://www.jianshu.com/p/9f71e260925d)

###  需要进行配置编译，和本地一样即可，这样可以做到上传后更新
之后在GitHub上打开仓库设置，点击左侧导航栏 “Pages”，在 “Build and deployment” - “Source” 下拉列表选择 ![“GitHub Actions”](/static/img/git/develop/2024-02-17_133214.png)



###细节
1、 配种网站访问地址哦。可以不修改
    ```    url: "https://manixchen.github.io/"
        # imgrepo: "https://manixchen.github.io/static/img" //使用自己的git仓库路径即可，这个地方适应动态的好处是后期只用修改配置文件即可，kekyll页面中使用模板语法即可
          <img src="{{ '/clock.webp' | prepend: site.imgrepo }}" alt="Picture">
        其实就是模板语法，有没有感觉和vue如此类似，其实大概差不多吧所有如果你需要和我一样引用vue的话，需要修改vue的模板引擎，不然前端没法解析模板语法，有所冲突

        #https://manixchen.github.io/

        # url: "http://127.0.0.1:4000"
        imgrepo: "http://127.0.0.1:4000/static/img"
    ```


2、 vue模板语法和它冲突解决办法，修改vue的解析规则
    1. 参考(我是直接提取了公共JS文件)其实引用VUE和element后基本不需要操作dom，所有一个统一配置差不多了，主要是项目简单功能少，不然还是得遵从路由准则
    ```
    const { createApp, ref,reactive } = Vue

    createApp({
    setup() {
        const message = ref('Hello Vue!')
        const loading = ref(true) 
        // 改变加载状态
        function changeLoading(){ 
            setTimeout(()=>loading.value = false, 4000)
            
        } 
        const formInline = reactive({
        search: '', 
        date: '',
        })
        return {
        message,
        loading,
        formInline,
        changeLoading
        }
    }, 
    mounted() {  
        Vue.nextTick(this.changeLoading)
    },
    delimiters:['[[[',']]]']//这里就是修改的模板解析规则
    //   delimiters:['${','}']
    }).use(ElementPlus).mount('#app'); 


    前端使用分两个情况
    1、作为属性和类这些尽量统一，不然看记混了
    <div class="loading-box"  :class="`${loading?'loading':'loaded'}`"               v-loading="loading" :title="message" >
       
    </div>

    2、作为model层的动态监听数据使用新定义规则
     <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
            <p class="loading-text">
                [[[message]]]
            </p>
          </div> 
    ```