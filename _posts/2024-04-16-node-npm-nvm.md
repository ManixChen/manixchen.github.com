```yaml
layout: post
title:  最近项目出现多版本node和npm兼容的常见问题
tags: node npm webpack vite
categories:node npm
```



##### 版本查询
``` 
node -v 
//查询node的位置
where node

npm -v 

显示全局安装的包
npm list -g --depth=0

查看npm安装位置：npm root -g  
查看cnpm安装位置：cnpm root -g 

清屏命令：cls

cnpm配置[https://npmmirror.com/]

(nodejs npm 版本对应查询)[https://nodejs.org/dist/index.json]
*** 使用过程中一定注意版本问题，不然经常出现莫名情况，配置环境本来外网导致部分问题，及时使用cnpm配置感觉部分情况也是无济于事
```




##### 清除缓存常用的方法
```                
Remove-Item -Path node_modules -Recurse -Force


rmdir /s /q node_modules

要清除npm的缓存，可以执行以下命令：
npm cache clean --force
要清除pnpm的缓存，可以执行以下命令：
pnpm store prune
要清除cnpm的缓存，可以执行以下命令：
cnpm cache clean --force
rm package-lock.json
```
 

##### 卸载/安装模块
 
【npm install xxx】利用 npm 安装xxx模块到当前命令行所在目录；

【npm install -g xxx】利用npm安装全局模块xxx；

【npm install xxx】安装但不写入package.json；

【npm install xxx –save】 安装并写入package.json的”dependencies”中；

【npm install xxx –save-dev】安装并写入package.json的”devDependencies”中。
```
npm uninstall -g express-generator 
npm install @babel/types@7.21.2 -D
 

🎈 npm 删除模块

【npm uninstall/remove  xxx 】删除xxx模块；
【npm uninstall/remove  -g xxx】删除全局模块xxx； 

vue卸载：npm uninstall vue-cli -g（3.0以下版本卸载）
                npm uninstall -g @vue/cli（3.0以上版本卸载）
vue安装：npm install -g @vue/cli （安装的是最新版）
                npm install vue-cli@2.9.6 （指定版本安装【指定版本为3.0以下版本】，其中2.9.6为版本号）
                npm install -g @vue/cli@3.11.0（指定版本安装【指定版本为3.0以上版本】，其中3.11.0为版本号）
vue版本查看：vue -V
``` 


##### npm 常用命令
``` 

npm install --only=dev
npm install serve --save-dev 
npm update


#强制低版本安装node模块
npm i --legacy-peer-deps 
npm i --force

更新资源
npm update  
解决方法如下（提示：试新的命令最好把上次安装node_modules删掉）：
原因：这个命令是根据package.lock.json来安装命令；npm ci是会把node_module删掉，然后根据package.json来安装新的依赖并生成新的package.lock.json 
尝试   npm ci 
``` 


### 使用nvm install <version>[<arch>]命令下载需要的node版本
``` 
version 表示版本号 
nvm ls available
nvm list 

nvm use

显示nvm管理的所有node
nvm ls
5、显示当前所使用node版本
nvm current
6、显示nvm版本
nvm version nvm -v
7、显示网上所有可以使用的node版本
nvm list available
 
 ```


#### 切换npm版本插件
```
nvm install v18.7.0
npm install -g npm@8.15.0

npm install -g npm@8.1.0


npm install @vue/cli-service --save-dev

cnpm install  svg-sprite-loader  svgo-loader --save-dev

nvm install v16.13.0 （npm 8.15.0）




nvm install v20.5.0
nvm use v20.5.0
npm install -g npm@10.5.2


npm install -g npm@6.14.18



npm install -g yarn
yarn install 代替 npm install


electron19.0.6  electron-builder23.1.0 兼容node版本



npm config set prefix "D:\node\node16202\node_global"  
 
npm config set cache "D:\node\node16202\node_cache" 


```


####  sass 错误可以尝试以下操作
```
npm install -g sass-migrator
进入项目node_modules文件
执行sass-migrator division **/*.scss
```






 

#### npm镜像切换插件
```
npm install -g nrm
Example
$ nrm ls

* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

$ nrm use cnpm  //switch registry to cnpm

    Registry has been set to: http://r.cnpmjs.org/

Usage
Usage: nrm [options] [command]

  Commands:

    ls                                    List all the registries
    current                               Show current registry name
    use <registry>                        Change registry to registry
    add <registry> <url> [home]           Add one custom registry
    login <registry> [value]              Set authorize information for a registry with a base64 encoded string or username and pasword
      -a  --always-auth                     Set is always auth
      -u  --username <username>             Your user name for this registry
      -p  --password <password>             Your password for this registry
      -e  --email <email>                   Your email for this registry
    set-hosted-repo <registry> <value>    Set hosted npm repository for a custom registry to publish packages
    set-scope <scopeName> <value>         Associating a scope with a registry
    del-scope <scopeName>                 Remove a scope
    set <registryName>                    Set custom registry attribute
      -a  --attr <attr>                    Set custorm registry attribute
      -v  --value <value>                  Set custorm registry value
    del <registry>                        Delete one custom registry
    rename <registryName> <newName>       Set custom registry name
    home <registry> [browser]             Open the homepage of registry with optional browser
    publish [<tarball>|<folder>]          Publish package to current registry if current registry is a custom registry. The field 'repository' of current custom registry is required running this command. If you're not using custom registry, this command will run npm publish directly
      -t  --tag [tag]                        Add tag
      -a  --access <public|restricted>       Set access
      -o  --otp [otpcode]                    Set otpcode
      -dr --dry-run                          Set is dry run
    test [registry]                       Show the response time for one or all registries
    help                                  Print this help

  Options:

    -h  --help     output usage information
    -V  --version  output the version number


```