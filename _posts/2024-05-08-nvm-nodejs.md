```yaml
layout: post
title:  nvm丝滑切换nodejs
tags: nvm nodejs
categories: nvm
```
####  nvm安装的前提 
>现代化web开发避免不了各种版本的nodejs混用，因为开源项目的依赖版本参差不齐，取决于开发者的版本，如果下载后本地的环境有所区别，或多或少编译是难以一次性通过，这时候就适合用nodejs的版本管理工具nvm了，如果个人学习的话或者公司多年一直稳定版本还有从来不需要学习开源项目的话那一般也用不上这个工具，基本上这种情况也比较少
>
>对于nvm安装切记一定不要提前安装官网的任何一个版本nodejs，可能造成后期干扰nvm的局部各种版本的nodejs测试发现仅需安装选择目录即可，环境变量nvm安装工具会自动配置，配置好了可以修改nodejs的位置，


#### 个人经验
> 测试发现仅需安装选择目录即可，环境变量nvm安装工具会自动配置，配置好了可以修改nodejs的位置，
测试发现安装包修改nodejs位置但是环境变量中NVM_SYMLINK一直链接到C盘下面，及时这个目录一直不存在，会影响后期安装包，
一定得修改这个配置或者C盘对应目录下面添加一个nodejs文件夹
检查环境变量 NVM_SYMLINK  D:\environment\nodejs



 
  
```cmd
1. 首先打开nvm安装的地方
如果忘记了，可以使用 where nvm 来查看
2. 修改配置文件 setting.txt
将原来的修改成新的：
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror:  https://npmmirror.com/mirrors/npm/ 



切换nodejs版本 npm正常是可以识别到，除非npm源不对

配置对了源一定得卸载之前安装的node版本并重新使用，如下操作
nvm uninstall v14.18.0
nvm install v14.18.0
nvm use v14.18.0
一直到npm出现结果为止
C:\WINDOWS\system32>npm -v
6.14.15

 
### 环境无法识别，服务找不到
win10中如果出现cmd中无法调用 node,npm，mysql等服务，提示找不到服务的情况下就可以检查是否是环境变量的path 中缺失 %SystemRoot%\system32


Remove-Item -Path node_modules -Recurse -Force



#### node,npm常用的一些命令
rmdir /s /q node_modules

要清除npm的缓存，可以执行以下命令：
npm cache clean --force
要清除pnpm的缓存，可以执行以下命令：
pnpm store prune
要清除cnpm的缓存，可以执行以下命令：
cnpm cache clean --force
rm package-lock.json

node -v 
//查询node的位置
where node


node-sass@4.14.1

显示全局安装的包
npm list -g --depth=0
卸载全局安装的包
npm uninstall -g express-generator


npm install @babel/types@7.21.2 -D


npm安装模块 
【npm install xxx】利用 npm 安装xxx模块到当前命令行所在目录；

【npm install -g xxx】利用npm安装全局模块xxx；

【npm install xxx】安装但不写入package.json；

【npm install xxx –save】 安装并写入package.json的”dependencies”中；

【npm install xxx –save-dev】安装并写入package.json的”devDependencies”中。

?? npm 删除模块

【npm uninstall/remove  xxx 】删除xxx模块；
【npm uninstall/remove  -g xxx】删除全局模块xxx； 

vue卸载：npm uninstall vue-cli -g（3.0以下版本卸载）
                npm uninstall -g @vue/cli（3.0以上版本卸载）
vue安装：npm install -g @vue/cli （安装的是最新版）
                npm install vue-cli@2.9.6 （指定版本安装【指定版本为3.0以下版本】，其中2.9.6为版本号）
                npm install -g @vue/cli@3.11.0（指定版本安装【指定版本为3.0以上版本】，其中3.11.0为版本号）
vue版本查看：vue -V


npm list -g --depth=0
查看npm安装位置：npm root -g 

查看cnpm安装位置：cnpm root -g 

清屏命令：cls


npm install --only=dev
npm install serve --save-dev

npm update


#强制低版本安装node模块
npm i --legacy-peer-deps 
npm i --force
npm update
解决方法如下（提示：试新的命令最好把上次安装node_modules删掉）：
1、项目npm版本较低，但是你本地的npm版本过高，导致项目启动失败或者安装依赖失败，使用如下命令：

      npm i --legacy-peer-deps

原因：–legacy-peer-deps：安装时忽略所有 peerDependencie，默认使用npm 4-6版本的安装模式，安装过程中是会跳过对等依赖项（7.x的版本比6.x的版本更加严格）

2、如果还是安装不上的话，就使用下面这个命令:

      npm ci

原因：这个命令是根据package.lock.json来安装命令；npm ci是会把node_module删掉，然后根据package.json来安装新的依赖并生成新的package.lock.json 


npm install @vue/cli-service --save-dev

cnpm install  svg-sprite-loader  svgo-loader --save-dev


###切换npm版本插件
nvm install v18.7.0
npm install -g npm@8.15.0

npm install -g npm@8.1.0


nvm install v16.13.0 （npm 8.15.0）




nvm install v20.5.0
nvm use v20.5.0
npm install -g npm@10.5.2



东信同帮的版本库
nvm install v14.18.0
npm install -g npm@6.14.15



nvm list available

nvm install v16.13.1
npm install -g npm@8.1.2



npm install -g npm@6.14.18



npm install -g yarn
yarn install 代替 npm install


electron19.0.6  electron-builder23.1.0 兼容node版本



npm config set prefix "D:\node\node16202\node_global"  
 
npm config set cache "D:\node\node16202\node_cache" 


sass 错误可以尝试以下操作
npm install -g sass-migrator
进入项目node_modules文件
执行sass-migrator division **/*.scss





另外npm安装时还有一个缓存目录，可以通过命令：

npm config get cache

npm list -global
#执行结果
+-- cross-env@7.0.3
`-- yarn@1.22.19


############################################################
## npm镜像切换插件
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
 
#### 使用nvm install <version>[<arch>]命令下载需要的node版本

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
