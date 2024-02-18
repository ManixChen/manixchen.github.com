---
layout: post
title:  Mardown语法
tags: Mardown Mardown语法
categories: Mardown
---
  
 ### github本地关联远程秘钥
1、 进入到你当前用户的根目录的.ssh文件夹下。如我的地址是C:\Users\manixchen\.ssh

2、 查看是否存在秘钥文件。文件名称为：id_rsa和id_rsa.pub

3.1  生成秘钥并配置到github上。

3.1、 生成秘钥命令：ssh-keygen -t rsa -C "your_email@youremail.com"。一路回车即可

3.2、 找到github上setting -> SSH and GPG keys -> new SSH key。将id_rsa.pub文件中的内容复制过去

4、 验证是否配置成功。命令：ssh -T git@github.com。注意不是你的账号，就是“git@github.com”

如果输出“Hi ***! You've successfully authenticated, but GitHub does not provide shell access.”即为成功
    ```
    如果再次出现连接超时的错误信息： 
    ssh: connect to host github.com port 22: Connection timed out 
    这意味着无法通过 22 端口进行 SSH 连接。
    尝试使用以下命令，将 SSH 连接的端口更改为 443： 
    ssh -T -p 443 git@ssh.github.com 
    ```

5、 查看全局配置

git config --list --global

6、 配置全局账号、邮箱

git config --global user.name "name"
git config --global user.email "email"

如果你使用ssh每次PUSH代码时需要输入密码，则可能是你生成的公钥时设置了密码，重新执行上述命令，不设置密码，push的时候就不会让你重复输入密码了。
