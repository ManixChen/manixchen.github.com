```yaml
layout: post
title:  python虚拟环境配置
tags: python env
categories: python
```
#### 目录
```python
python -m pip --version查看安装pip的版本

1.运行以下命令来创建一个虚拟环境。这将在当前目录下创建一个名为.venv的文件夹（也可以自定义名称），里面包含了Python的副本和一个独立的site-packages目录
py -m venv .venv


2.激活虚拟环境的命令根据你的操作系统有所不同。 
Unix/Linux/macOS: Bash
source .venv/bin/activate
Windows: Cmd
.venv\Scripts\activate

完成工作后，可以通过运行deactivate命令来退出虚拟环境，回到全局的Python环境。 
Bash
deactivate

python -u "f:\Python_dev\pinkWeb\login.py"


打包：
pyinstaller -F xxx.py -i xxx.ico

取消命令行窗口:pyinstaller -F -w xxx.py -i xxx.ico
在运行上述命令生成的exe会出现命令行，取消则运行：

pyinstaller -F -w xxx.py -i xxx.ico
pyinstaller -F -w xxx.py -i xxx.ico
pyinstaller -F -w  f:/Python_dev/pinkWeb/login.py  f:/Python_dev/pinkWeb/img/warning.ico


pyinstaller -F -w  f:/Python_dev/pinkWeb/auto_melon.py  f:/Python_dev/pinkWeb/img/bird2.ico
或者：

pyinstaller -F mycode.py --noconsole 
1.运行以下命令来创建一个虚拟环境。这将在当前目录下创建一个名为.venv的文件夹（也可以自定义名称），里面包含了Python的副本和一个独立的site-packages目录
py -m venv .venv


2.激活虚拟环境的命令根据你的操作系统有所不同。 
Unix/Linux/macOS: Bash
source .venv/bin/activate
Windows: Cmd
.venv\Scripts\activate

完成工作后，可以通过运行deactivate命令来退出虚拟环境，回到全局的Python环境。 
Bash
deactivate

python -u "f:\Python_dev\pinkWeb\login.py"


打包：
pyinstaller -F xxx.py -i xxx.ico

取消命令行窗口:pyinstaller -F -w xxx.py -i xxx.ico
在运行上述命令生成的exe会出现命令行，取消则运行：
 
pyinstaller -F -w  f:/Python_dev/pinkWeb/auto_melon.py 

pyinstaller --onefile --icon=F:/Python_dev/pinkWeb/img/bird2.ico f:/Python_dev/pinkWeb/auto_melon.py 
 
pyinstaller -F mycode.py --noconsole 
```

执行打包命令：
pyinstaller .\auto_melon.spec

 