```yaml
layout: post
title:  docker安装  
tags:  docker       
categories:  docker windows linux      
```
#### docker安装     

#### 开启hyper-v  
```
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
```        
> 新建一个批处理文件，将以上代码复制进去，并保存为`enableHyperV.bat`文件。双击运行此文件，即可开启Hyper-V。    需要重启       
> 注意：如果系统中已经安装了Hyper-V，则可以忽略此步骤。     

#### 修改注册表，伪装专业版

以管理员身份打开cmd,执行如下

REG ADD "HKEY_LOCAL_MACHINE\software\Microsoft\Windows NT\CurrentVersion" /v EditionId /T REG_EXPAND_SZ /d Professional /F
 
 

#### WSL安装    
> 手动安装
wsl --install

> 自动安装    
https://learn.microsoft.com/zh-cn/windows/wsl/install-manual


#### 启用
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

#### 下载Linux发行版            
https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

#### 安装Linux发行版        
wsl --list --online

请使用“wsl --install -d <分发>”安装。 例如：        
NAME                            FRIENDLY NAME
Ubuntu                          Ubuntu
Debian                          Debian GNU/Linux
kali-linux                      Kali Linux Rolling
Ubuntu-18.04                    Ubuntu 18.04 LTS
Ubuntu-20.04                    Ubuntu 20.04 LTS
Ubuntu-22.04                    Ubuntu 22.04 LTS
Ubuntu-24.04                    Ubuntu 24.04 LTS
OracleLinux_7_9                 Oracle Linux 7.9
OracleLinux_8_7                 Oracle Linux 8.7
OracleLinux_9_1                 Oracle Linux 9.1
openSUSE-Leap-15.6              openSUSE Leap 15.6
SUSE-Linux-Enterprise-15-SP5    SUSE Linux Enterprise 15 SP5
SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6
openSUSE-Tumbleweed             openSUSE Tumbleweed
PS C:\Users\Administrator>  wsl --install -d Ubuntu-18.04


##### 参考链接  
https://blog.csdn.net/qq_55610255/article/details/135898034

https://learn.microsoft.com/zh-cn/windows/wsl/install

#### 常用命令

####  查看已安装的 Linux 发行版
 wsl -l -v
#### 设置默认系统
wsl --set-default Ubuntu-22.04
### 启动 Linux 发行版
wsl -d Ubuntu-22.04

### 终止运行的系统 
wsl -t Ubuntu-22.04
### 注销指定系统 
wsl --unregister Ubuntu-22.04



#### 导出和导入 Linux 发行版（修改安装位置）
wsl --export  Ubuntu-24.04  F:\DockOs\Ubuntu2404\ubuntu24.04.tar 

wsl --unregister Ubuntu-24.04

wsl --import Ubuntu-24.04 F:\DockOs\Ubuntu2404\ubuntu24.04.tar 

ubuntu2204.exe config --default-user root

####  更改或重置密码
请打开 Linux 发行版并输入命令：passwd。 系统会要求你输入当前密码，然后要求输入新密码，之后再确认新密码。
如果忘记了 Linux 分发版的密码：

请打开 PowerShell，并使用以下命令进入默认 WSL 分发版的根目录：wsl -u root

如果需要在非默认分发版中更新忘记的密码，请使用命令：wsl -d Debian -u root，并将 Debian 替换为目标分发版的名称。

在 PowerShell 内的根级别打开 WSL 发行版后，可使用此命令更新密码：passwd <username>，其中 <username> 是发行版中帐户的用户名，而你忘记了它的密码。

系统将提示你输入新的 UNIX 密码，然后确认该密码。 在被告知密码已成功更新后，请使用以下命令在 PowerShell 内关闭 WSL：exit。


root 密码好像有长度校验，不能设置过短的密码。
root123456




#### 安装net工具
apt install net-tools 
查看IP地址
ifconfig查看IP地址

#### 安装ssh服务，开启远程权限，shell登录
ssh服务安装
卸载ssh服务
apt remove openssh-server
1
重装ssh服务
apt install openssh-server
1
开启SSH服务
sudo service ssh start
1
设置SSH服务在开机时自动启动
sudo systemctl enable ssh 

编辑/etc/ssh/sshd_config文件
vi /etc/ssh/sshd_config

修改ssh服务监听端口和监听地址
Port 22
#AddressFamily any
ListenAddress 0.0.0.0
ListenAddress ::Port 22
#AddressFamily any
ListenAddress 0.0.0.0
ListenAddress ::



#LoginGraceTime 2m
PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10


# To disable tunneled clear text passwords, change to no here!
#PasswordAuthentication yes ## 允许root用户使用密码登录，开启的话必须使用public key登录
# public key authentication is disabled by default since Ubuntu 16.04
#PermitEmptyPasswords no

>   开放22端口，允许SSH远程登录               

 
sudo service ssh restart


#### 远程连接
ssh root@192.168.1.100   # 连接远程服务器

#### 远程命令执行        
ssh root@192.168.1.100 "ls -l"  # 远程执行命令

#### 远程文件传输
scp /root/test.txt root@192.168.1.100:/root/test.txt  # 远程文件传输

#### 远程端口转发
ssh -L 8080:192.168.1.100:80 root@192.168.1.100  # 远程端口转发 8080 端口转发到 192.168.1.100 80 端口
#### 远程端口转发（动态端口）
ssh -D 8080 root@192.168.1.100  # 远程端口转发 8080 端口转发到 192.168.1.100 80 端口（动态端口）
#### 远程端口转发（动态端口）
ssh -N -f -L 8080:192.168.1.100:80 root@192.168.1.100  # 远程端口转发 8080 端口转发到 192.168.1.100 80 端口（动态端口）
#### 远程端口转发（动态端口）
### ubuntu常见命令
#### 查看系统信息   
uname -a    # 查看系统信息

#### 查看CPU信息            
cat /proc/cpuinfo    # 查看CPU信息
#### 查看内存信息                   
free -m    # 查看内存信息            
#### 查看磁盘信息                   
df -h    # 查看磁盘信息                         
#### 查看网络信息                       
ifconfig    # 查看网络信息          
#### 查看进程信息                       
ps -ef    # 查看进程信息        


#### 查看端口信息                       

netstat -anp    # 查看端口信息          

### 常用命令        

#### 切换目录           

cd /root    # 切换目录          

#### 查看当前目录下的文件           

ls -al    # 查看当前目录下的文件                

#### 创建目录           

mkdir /root/test    # 创建目录                  

#### 删除目录                       

rm -rf /root/test    # 删除目录             


#### 复制文件                               

cp /root/test.txt /root/test1.txt    # 复制文件          



#### 移动文件                                   

mv /root/test.txt /root/test1.txt    # 移动文件          


#### 查看文件内容                                           

cat /root/test.txt    # 查看文件内容          


#### 查看文件大小                                           

du -h /root/test.txt    # 查看文件大小          


#### 查看文件权限                                           

ls -l /root/test.txt    # 查看文件权限          


#### 查看文件类型                                           

file /root/test.txt    # 查看文件类型          


#### 查看文件内容（指定行数）                                           

head -n 10 /root/test.txt    # 查看文件内容（指定行数）          


#### 查看文件内容（倒序）                                           

tail -n 10 /root/test.txt    # 查看文件内容（倒序）          


#### 查看文件内容（搜索关键字）                                           

grep "关键字" /root/test.txt    # 查看文件内容（搜索关键字）            


#### 查看文件内容（统计关键字出现次数）                                           

grep -c "关键字" /root/test.txt    # 查看文件内容（统计关键字出现次数）          




#### 查看文件内容（统计关键字出现位置）                                           


grep -n "关键字" /root/test.txt    # 查看文件内容（统计关键字出现位置）          

 

#### 压缩文件                                           

tar -zcvf /root/test.tar.gz /root/test    # 压缩文件          

 
#### 解压文件                                           

tar -zxvf /root/test.tar.gz    # 解压文件          


### 文件操作命令

#### 显示当前目录下的文件
ls          

#### 显示当前目录下的文件（详细信息）            
ls -l          

创建文件
touch test.txt              

#### 显示文件内容                   

cat test.txt            

# 查找文件
find / -name "test.txt"
# 按文件名查找文件
find / -name "test.txt"
# 按文件类型查找文件  
find / -type f -name "*.txt"
# 按文件大小查找文件
find / -size +10M -name "test.txt"
# 按文件权限查找文件
find / -perm 777 -name "test.txt"
# 按文件属主查找文件
find / -user root -name "test.txt"
# 按文件属组查找文件
find / -group root -name "test.txt"
# 按文件修改时间查找文件
find / -mtime -1 -name "test.txt"
# 按文件创建时间查找文件
find / -ctime -1 -name "test.txt"
# 按文件更改时间查找文件
find / -mtime -1 -name "test.txt"
# 按文件内容查找文件  
find / -type f -name "*.txt" -exec grep "关键字" {} \;
# 按文件内容查找文件并显示行号
find / -type f -name "*.txt" -exec grep -n "关键字" {} \;
# 按文件内容查找文件并显示行号和文件名  


### docker desktop安装


选择Docker Engine,在其中输入(这里使用的是163的源,如果想要使用其他源可以自行设置,github上有个项目:docker_mirror可以自动检测在你的网络环境下那个源是最快的)

{
  "registry-mirrors": [
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ],
  "insecure-registries": [],
  "debug": true,
  "experimental": false
} 
### doocker 常见命令
# 启动docker
sudo service docker start
# 重启docker
sudo service docker restart
# 停止docker
sudo service docker stop


获取当时所有镜像(docker images)
docker image ls
# 或者
docker images

拉取镜像(docker pull)


# 官方镜像
docker image pull 镜像名称 
# 或简写为 
docker pull 镜像名称
# 比如
docker pull ubuntu
docker pull ubuntu:16.04

# 个人镜像
docker pull 仓库名称/镜像名称
docker pull xunmi/django

# 第三方仓库拉去
docker pull 第三方仓库地址/仓库名称/镜像名称
docker pull hub.c.163.com/library/mysql:latest
(默认仓库名为library,所有从官方获取镜像相当于`sudo docker image pull library/镜像名称`) 


删除镜像(docker rmi)
docker image rm 镜像名或镜像ID 或 docker rmi 镜像名或镜像ID
docker image rm hello-world
docker rmi 9e64176cd8a2

docker rm: 删除一个或多个 容器
docker rmi: 删除一个或多个 镜像
docker prune: 用来删除不再使用的 docker 对象

docker run [可选参数] 镜像名 [向启动容器中传入的命令]

# 启动一个容器          
docker run -it --name my-ubuntu ubuntu:16.04 /bin/bash          
# -it: 让容器的标准输入、输出和错误输出保持打开状态，即可以进行交互式操作。             
# --name: 为容器指定一个名称，方便后续操作。             
# ubuntu:16.04: 指定要启动的镜像，这里是Ubuntu 16.04。             
# /bin/bash: 容器启动后默认执行的命令，这里是bash。             

# 启动一个后台运行的容器
docker run -d --name my-ubuntu-daemon ubuntu:16.04 /bin/bash


# 停止一个容器          
docker stop 容器名或容器ID              
# 停止my-ubuntu容器                           
docker stop my-ubuntu          
# 停止my-ubuntu-daemon容器                                   
docker stop my-ubuntu-daemon          
 
docker search 关键字
#下载影像，镜像位置填入上面搜索出来的地址
docker pull 影像
#创建启动容器，等同于先执行docker create命令，再执行docker start命令
docker run
# 启动容器
docker start 容器id   
# 重启容器
docker restart 容器id 
# 停止当前正在运行的容器
docker stop 容器id    
# 强制停止当前容器
docker kill 容器id   
#查看容器 
docker ps 
#进入容器
docker exec -it 容器id 



### 安装的gitlab 查看初始密码
cat /etc/gitlab/initial_root_password


grep 'Password:' /opt/gitlab/config/initial_root_password

# 创建ssl证书目录
[root@cloud ~]# mkdir /opt/gitlab/config/ssl/
# 设置权限
[root@cloud ~]# chmod 755 /opt/gitlab/config/ssl/
# 切换到ssl目录下
[root@cloud ~]# cd /opt/gitlab/config/ssl/
# 创建证书
[root@cloud ssl]# openssl req -x509 -newkey rsa:1024 -keyout gitlab.key -out gitlab.crt -nodes -days 36500
Generating a 1024 bit RSA private key
....++++++
.......................................++++++
writing new private key to 'gitlab.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:cn
State or Province Name (full name) []:wh
Locality Name (eg, city) [Default City]:wc
Organization Name (eg, company) [Default Company Ltd]:manix
Organizational Unit Name (eg, section) []:manix
Common Name (eg, your name or your server's hostname) []:manixchen.com  
Email Address []: manixchen-@163.com  




### 开启https支持，新版本的gitlab必须开启https支持，否则无法clone代码

# 编辑gitlab.rb文件      
sudo vi /etc/gitlab/gitlab.rb 

# 找到并修改以下内容  （如果是docker desktop安装的gitlab，直接在desktop的volume中修改gitlab.rb文件即可，特别方便，常用的配置文件均在里面）
external_url 'https://192.168.134.1'
nginx['redirect_http_to_https'] = true
nginx['ssl_certificate'] = "/etc/gitlab/gitlab.crt"
nginx['ssl_certificate_key'] = "/etc/gitlab/gitlab.key" 


   

https://192.168.134.1:9443/root/reactspark.git


 


git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"


验证配置是否生效：
在终端执行命令git config --list即可验证。

SSH密钥生成：
在本地终端运行以下命令：

ssh-keygen -t rsa -b 4096 -C "manixchensunshine@163.com"


假设我有github.com 、gitlab.com 和 bitbucket.org三个云端的账号，各自的注册邮箱和用户名不同。

建议：linux 或 mac 用户推荐在 ~/.ssh 路径下运行命令行，Windows用户推荐在“ C:\Users\用户名.ssh ”目录下运行命令行

## 说明: 
## -t rsa 表示加密方式  
## -C 表示注册不同云端仓库时所用的邮箱 
## -f 表示自定义生成秘钥的名称
#--------------------------------------
# 生成 github.com 公私钥对
ssh-keygen -t rsa -C "manixchen@gmail.com" -f github
# 生成 gitlab.com 公私钥对
ssh-keygen -t rsa -C "manixchensun@gmail.com" -f gitlab 
## 说明: 
## -t rsa 表示加密方式  
## -C 表示注册不同云端仓库时所用的邮箱 
## -f 表示自定义生成秘钥的名称
#--------------------------------------
# 生成 github.com 公私钥对
ssh-keygen -t rsa -C "manixchen@gmail.com" -f github
# 生成 gitlab.com 公私钥对
ssh-keygen -t rsa -C "manixchensun@163.com" -f gitlab 







### 在安装了git的机器上，关闭ssl验证，不然的话可能没法clone代码
export GIT_SSL_NO_VERIFY=true
git config --global http.sslVerify "false"

//取消http代理（尝试作用不大）只需执行上面两行命令后，就可以clone代码了。
git config --global --unset http.proxy
//取消https代理 
git config --global --unset https.proxy
https://192.168.134.1:9443/webjsj/reactspark.git

> 注意：下面提示：：：如果是使用https协议，则需要关闭ssl验证。    
```
$ git clone https://192.168.134.1:9443/root/reactspark.git
Cloning into 'reactspark'...
fatal: unable to access 'https://192.168.134.1:9443/root/reactspark.git/': SSL certificate problem: self-signed certificate


$ git clone https://192.168.134.1:9443/root/reactspark.git
Cloning into 'reactspark'...
fatal: unable to access 'https://192.168.134.1:9443/root/reactspark.git/': SSL certificate problem: self-signed certificate

``` 
...  注意，由于忽略了对HTTPS证书的验证，可能会存在安全风险，请谨慎使用 ... 



#### 配置完成后根据仓库提示，可以关联项目到gitlab上，然后就可以进行代码的管理了。 如果是初始化项目名直接clone即可
查看现有远程仓库的信息（git remote -v）；
删除现有的远程仓库信息（git remote rm origin）；
建立新的远程仓库地址（git remote add origin + 新的远程仓库地址）；

