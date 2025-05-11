```yaml
layout: post
title:  docker安装  
tags:  docker       
categories:  docker windows linux      
```

# 安装jenkins
网上解释：jenkins是一个开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件项目可以进行持续集成。我就简单的解释下我为什么安装jenkins。
> 其实就是天天写代码，然后提交到git，然后还得手动编译打包，还得手动部署到测试环境，还得手动测试，还得手动回滚，还得手动发布，还得手动监控，还得手动报警，还得手动处理异常，还得手动回滚，还得手动修复bug，还得手动重启服务器，还得手动配置服务器，还得手动备份数据，还得手动恢复数据，还得手动监控服务器，还得手动报警，还得手动处理异常，还得手动回滚，还得手动修复bug，还得手动重启服务器，还得手动配置服务器，还得手动备份数据，还得手动恢复数据，还得手动监控服务器，还得手动报警，还得手动处理异常，还得手动回滚，还得手动修复bug，还得手动重启服务器，还得手动配置服务器，还得手动备份数据
* 此次安装jenkins主要是使用docker结合gitlab进行项目的自动化部署，给各位小伙伴展示下完整的项目开发流程，以及jenkins的安装流程，以及jenkins的使用流程。

# 一、docker安装
* [win10 wsl,docker desktop ,ssh,ssl,gitLab安装完整方案](https://blog.csdn.net/manixchenyang/article/details/141527821)

# 二、 安装portainer
> Portainer是一个轻量级的容器管理平台，主要用于简化Docker环境的部署和管理。用户可以通过图形界面直观地管理容器、镜像、卷和网络等Docker资源，支持Docker引擎和Swarm模式。Portainer的主要作用包括容器管理、镜像管理、团队与权限管理，以及提供API接口实现自动化部署和监控，使Docker资源管理更加高效和便捷 
* 相当方便，可以管理端的方式查看   
* 根据个人需要安装 

### 1、安装portainer
 ```bash
 docker run -d -p 9099:9099  -p 9543:9543 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.21.0 

 
### 1、设置卷
 docker volume create portainer_data 
### 2、关闭容器
doccker stop protainer_web 
### 3、查看容器信息 
 docker inspect  protainer_web  或者  docker inspect 3351c9cf7ac9 
find / -name protainer_web.key
### 4、
docker run --rm -v /var/lib/docker/volumes/93286e02c9780e6b617e3e5f6fce5e63ceb688135b048f5f2ae8947a9bb0fb43/_data:/data portainer/helper-reset-password 

### 5、拉取portainer镜像
 docker pull portainer/portainer-ce:latest

### 6、启动portainer容器 
docker run -d --name portainerUI -p 7000:7000  -p 9000:9000 -p 9000:9000  --restart=always      -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest

 ```

### 2、安装portainer
* docker extension  中安装portainer更快速

## 访问 https://localhost:9543




# 三、安装jenkins  
### 1、docker search jenkins            查看jenkins镜像

### 2、docker pull jenkins/jenkins      拉取jenkins镜像

### 3、docker images                    查看镜像状态


### 4、创建
* mkdir -p /home/jenkins_home      #创建
 
### 5、文件夹授权
* chmod 777 /home/jenkins_home      #创建 
 

四、jenkins容器命令  
1、启动jenkins容器 

###  创建jenkins容器
```bash
docker run -dit --name=jenkins -p 8060:8080 -u=root -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker -v /etc/localtime:/etc/localtime:ro jenkins/jenkins:latest
 
``` 
> --name=jenkins 
* 名称 -p 8060:8080 
* 端口映射 外部端口:jenkins容器端口(8080的默认端口我尝试了修改后并不会生效，反而会导致jenkinns启动失败，所以前面的映射端口默认即可)
*  -u=root

2、参数说明
-i：表示运行容器
-t：表示容器启动后会进入其命令行
-d：守护式方式创建容器在后台运行
–name：容器名称
``` 
--memory 500M：最大可消耗内存资源（因为不能一直占用资源，所以要有一个最大消耗值）
-p 8080:8080：端口映射，宿主机端口：jenkins 容器端口
-u=root：指定容器用户为 root 用户
-v /var/run/docker.sock:/var/run/docker.sock：将 docker.sock 映射到 jenkins 容器中
docker.sock 文件是 docker client 与 docker daemon 通讯的文件
-v /usr/bin/docker:/usr/bin/docker：将宿主机 docker 客户端映射到 jenkins 容器中

/etc/localtime:/etc/localtime:ro 在docker容器中同步宿主机的时间，来挂载宿主机的 /etc/localtime 到容器的对应位置，。
```

3、获取初始登录密码
* docker logs jenkins
* 路径：/var/jenkins_home/secrets/initialAdminPassword
 367330fe3c704dbc890cbb460c73e757 

systemctl status jenkins 


4、注意事项     重装注意事项
如果你遇到了某些问题，需要重装Jenkins，需要依次进行以下操作 
docker ps -a        # 查看当前运行容器
docker stop id        # 停止容器，id为要停止的容器id
docker rm id        # 删除容器，id为要删除的容器id
 
docker images        # 查看镜像
docker rmi id        # 删除镜像，id为要删除的镜像id
rm -rf /home/jenkins_home        # 删除目录 
 
### 1、关闭容器
docker stop jenkins 
### 1、查看容器信息 
docker inspect  jenkins 
docker logs jenkins
 
docker ps -a        # 查看当前运行容器
docker stop id        # 停止容器，id为要停止的容器id
docker rm id        # 删除容器，id为要删除的容器id
 
docker images        # 查看镜像
docker rmi id        # 删除镜像，id为要删除的镜像id
rm -rf /home/jenkins_home  
 


# 五、 安装java环境   
### 1、 查看rpm  、java版本
* ：rpm --version               查看版本
* ：sudo apt-get install rpm    安装rpm    
* ：java -version               查看java版本
* ：apt install openjdk-17-jre-headless       安装java环境
用find / -name java找下这些包的安装目录 
 
* ： which java   查看java安装路径
* ：/usr/bin/java

* ls -lsa /usr/bin/java 
* ls -lsa /etc/alternatives/java 
###  2、 尝试加入JDK8与JDK11，让Ubuntu知道，Java还可以调整至这两个版本 
我的JDK8的java程序安装路径：/usr/lib/jvm/java-8-openjdk-amd64/bin/java，根据刚刚find / -name java搜到的来
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-8-openjdk-amd64/bin/java 100
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-11-openjdk-amd64/bin/java 100

### 3、切换JDK版本
用sudo update-alternatives --config java 

root@programmer-ubuntu:/# sudo update-alternatives --config java
There are 4 choices for the alternative java (providing /usr/bin/java).

  Selection    Path                                            Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-17-openjdk-amd64/bin/java      1711      auto mode
* 1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      100       manual mode
* 2            /usr/lib/jvm/java-17-openjdk-amd64/bin/java      1711      manual mode
* 3            /usr/lib/jvm/java-8-openjdk-amd64/bin/java       100       manual mode
* 4            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode

Press <enter> to keep the current choice[*], or type selection number: 3
update-alternatives: using /usr/lib/jvm/java-8-openjdk-amd64/bin/java to provide /usr/bin/java (java) in manual mode 
再执行java -version，就是JDK8了，JDK11同理，选择你想要的即可

root@programmer-ubuntu:/# java -version 


### 4、设置环境变量
需要和Windows一样添加环境变量，有些软件或者框架就靠这个去找Java装在哪 
sudo vim /etc/environment 
 添加确定版本的JAVA_HOME 
#这一行是文件原本就有的
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/ 

执行命令，立即生效，并查看结果，关闭终端再重新登录Ubuntu即永久起效

root@programmer-ubuntu:/# source /etc/environment
root@programmer-ubuntu:/# echo $JAVA_HOME
/usr/lib/jvm/java-11-openjdk-amd64 

/usr/lib/jvm/java-17-openjdk-amd64/bin/java
JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64



### 
1、安装jenkins插件
给node01主机安装JDK
wget https://download.oracle.com/java/17/archive/jdk-17.0.6_linux-x64_bin.rpm
sudo rpm -ivh jdk-17.0.6_linux-x64_bin.rpm



git 如果密码输入错误，可以尝试以下命令，当push时输入错误密码时，会提示输入用户名和密码
git credential-store erase

此命令将重新设置Git凭证助手为缓存模式，时效为1小时。这样，您在1小时内再次访问Git服务器时不需要重新输入用户名和密码。
git config –global credential.helper “cache –timeout=3600″

. 打开Git Bash或终端窗口，输入以下命令登录到Git服务器：
“`
git config –global credential.helper store
“`
此命令将设置全局的Git凭证助手为存储模式，以便将凭证保存在本地文件中，方便后续登录。

2. 输入以下命令以更改Git账户的用户名：
“`
git config –global user.name “YourNewUsername”
“`
将”YourNewUsername”替换为您要设置的新用户名。

3. 输入以下命令以更改Git账户的邮箱地址：
“`
git config –global user.email “yournewemail@example.com”
“`
将”yournewemail@example.com”替换为您要设置的新邮箱地址。

4. 输入以下命令以更改Git账户的密码：
“`
git credential-store erase


wsl -l -v

要启动一个已停止的 WSL 发行版，可以使用 wsl --distribution <DistributionName>.
要设置 WSL 的默认版本，可以使用 wsl --set-default-version <VersionNumber>，例如 wsl --set-default-version 2 来将默认版本设置为 WSL 2



### 自动化部署pipeline
```bash
pipeline {
    agent {
        label 'linux74'
    }
    environment {
        DOCKER_IMAGE = 'spark-webfrontend-image'
        DOCKER_CONTAINER = 'spark-webfrontend-image-container'
        IMAGE_FILE = 'spark-webfrontend-image.tar'
        SSH_SERVER = 'linux74'
        REMOTE_DIR = '/home/sysadmin/docker-images-1'
        // REMOTE_DIR = ''
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Set GIT_SSL_NO_VERIFY to disable SSL verification
                    sh 'git config --global http.sslVerify false'
                    //echo "start"
                    git credentialsId: 'gitlab',
                           url: 'https://192.168.134.1/webjsj/reactspark.git',
                           branch: 'main'
                    //echo "end"
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        stage('Export Docker Image') {
            steps {
                script {
                    // Save the Docker image as a .tar file
                    sh "docker save -o ${IMAGE_FILE} ${DOCKER_IMAGE}"
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        stage('Export Docker Image') {
            steps {
                script {
                    // Save the Docker image as a .tar file
                    sh "docker save -o ${IMAGE_FILE} ${DOCKER_IMAGE}"
                }
            }
        }
        stage('Transfer Image to Server') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: "${SSH_SERVER}",
                            transfers: [
                                sshTransfer(
                                    sourceFiles: "${IMAGE_FILE}",
                                    removePrefix: '',
                                    remoteDirectory: '/home/sysadmin/docker-images-1',
                                    // remoteDirectory: '${REMOTE_DIR}', // Adjust remote directory as needed
                                    execCommand: """
                                        docker load -i ${REMOTE_DIR}/${IMAGE_FILE}
                                        docker stop ${DOCKER_CONTAINER} || true
                                        docker rm ${DOCKER_CONTAINER} || true
                                        docker run -p 9091:80 -d --name ${DOCKER_CONTAINER} ${DOCKER_IMAGE}
                                    """,
                                    execTimeout: 120000, // Adjust the timeout as needed
                                    usePty: true
                                )
                            ],
                            usePromotionTimestamp: false,
                            useWorkspaceInPromotion: false,
                            verbose: true
                        )
                    ]
                )
            }
        } 
    }
}
```

``` bash markdown  
Pipeline定义:
pipeline 是Jenkins Pipeline的开始标记。
Agent配置:
agent { label 'linux74' } 指定这个Pipeline将在标签为linux74的Jenkins Agent上运行。
环境变量:
定义了几个环境变量，如DOCKER_IMAGE、DOCKER_CONTAINER、IMAGE_FILE、SSH_SERVER和REMOTE_DIR，用于后续的构建和导出操作。
Checkout阶段:
使用git命令从指定的GitLab仓库检出代码。
git config --global http.sslVerify false 用于禁用SSL验证，这在某些情况下可能需要，以避免SSL证书问题。
Build Docker Image阶段:
使用docker build命令构建Docker镜像，镜像标签为DOCKER_IMAGE。
Export Docker Image阶段:
使用docker save命令将构建好的Docker镜像导出为.tar文件，文件名为IMAGE_FILE。

Build Docker Image阶段:
使用docker build命令构建Docker镜像，镜像标签为DOCKER_IMAGE。
Export Docker Image阶段:
使用docker save命令将构建好的Docker镜像导出为.tar文件，文件名为IMAGE_FILE。
Transfer Image to Server阶段:
使用sshPublisher插件将导出的Docker镜像文件传输到远程服务器上。
sshPublisherDesc配置了SSH连接的详细信息，包括服务器配置名称、传输文件的源路径、远程目录等。
execCommand部分定义了在远程服务器上执行的命令，包括加载镜像、停止和删除旧的容器、以及运行新的容器。
execTimeout设置了命令执行的超时时间。
usePty设置为true，表示在执行命令时使用伪终端。
```


### 构建Dockerfile
``` dockerfile
# Build stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:latest as smp-frontend
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
> 说明：
> - 构建阶段 (Build stage):
> - 使用node:latest镜像作为构建基础镜像。
> - 设置工作目录为/app。
> - 复制package*.json文件到工作目录。
> - 使用npm install安装依赖。
> - 复制所有文件到工作目录。
> - 使用npm run build构建应用程序。
> - 生产阶段 (Production stage):
> - 使用nginx:latest镜像作为生产基础镜像。
> - 从构建阶段复制构建好的dist目录到/usr/share/nginx/html，这是Nginx服务器的默认文档根目录。
> - 使用EXPOSE指令声明容器将监听80端口。
> - 使用CMD指令设置Nginx的启动命令，daemon off;表示Nginx将以非守护进程模式运行。




### nginx配置
```bash nginx
# 基本配置
events {
    worker_connections 1024; # 每个worker进程允许的最大连接数
}

http {
    include mime.types; # 包含MIME类型文件
    default_type application/octet-stream; # 默认的MIME类型

    # 日志配置
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    sendfile on; # 开启sendfile功能
    tcp_nopush on; # 开启TCP_NODELAY
    tcp_nopush on; # 开启TCP_NODELAY
    keepalive_timeout 85; # 保持连接超时时间
    gzip on; # 开启gzip压缩

    server {
        listen 80; # 监听80端口
        server_name localhost; # 服务器名称

        # 默认页面
        location / {
            root /usr/share/nginx/html; # 根目录
            index index.html index.htm; # 默认索引文件
        }

        # 特定路径配置
        location /smp {
            proxy_set_header Host $http_host; # 设置Host头
            proxy_set_header X-Real-IP $remote_addr; # 设置X-Real-IP头
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # 设置X-Forwarded-For头
            proxy_pass http://127.0.0.1:8031/spark; # 代理到后端服务器
        }

        # 错误页面配置
        error_page 404 /404.html; # 404错误页面
        error_page 500 502 503 504 /50x.html; # 其他错误页面
    }
}

```