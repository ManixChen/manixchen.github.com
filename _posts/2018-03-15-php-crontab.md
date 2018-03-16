---
layout: post
title: php定时任务
tags: php 定时任务
categories: php
---


### 打包完整示例

crontab（定时任务）

查看crontab配置文件

vi /etc/crontab

#SHELL变量指定了系统要使用哪个shell
SHELL=/bin/bash
#第二行PATH变量指定了系统执行命令的路径
PATH=/sbin:/bin:/usr/sbin:/usr/bin
#第三行MAILTO变量指定了crond的任务执行信息将通过电子邮件发送给root用户，如果MAILTO变量的值为空，则表示不发送任务执行信息给用户
MAILTO=
#第四行的HOME变量指定了在执行命令或者脚本时使用的主目录
HOME=/

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# | .------------- hour (0 - 23)
# | | .---------- day of month (1 - 31)
# | | | .------- month (1 - 12) OR jan,feb,mar,apr ...
# | | | | .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# | | | | |
# * * * * * user-name command to be executed

用户任务调度：用户定期要执行的工作，比如用户数据备份、定时邮件提醒等。用户可以使用 crontab 工具来定制自己的计划任务。所有用户定义的crontab 文件都被保存在 /var/spool/cron目录中。其文件名与用户名一致。

minute   hour   day   month   week   command

其中：

minute： 表示分钟，可以是从0到59之间的任何整数。

hour：表示小时，可以是从0到23之间的任何整数。

day：表示日期，可以是从1到31之间的任何整数。

month：表示月份，可以是从1到12之间的任何整数。

week：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。

command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。

在以上各个字段中，还可以使用以下特殊字符：

星号（*）：代表所有可能的值，例如month字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。

逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”

中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”

正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如*/10，如果用在minute字段，表示每十分钟执行一次。



crontab 服务

服务操作说明：

/sbin/service crond start //启动服务

/sbin/service crond stop //关闭服务

/sbin/service crond restart //重启服务

/sbin/service crond reload //重新载入配置

查看crontab服务状态：

service crond status

手动启动crontab服务：

service crond start

查看crontab服务是否已设置为开机启动，执行命令：

ntsysv

加入开机自动启动：

chkconfig –level 35 crond on



crontab命令详解

1．命令格式：

crontab [-u user] file

crontab [-u user] [ -e | -l | -r ]

2．命令功能：

通过crontab 命令，我们可以在固定的间隔时间执行指定的系统指令或 shell script脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。这个命令非常设合周期性的日志分析或数据备份等工作。

3．命令参数：

-u user：用来设定某个用户的crontab服务，例如，“-u ixdba”表示设定ixdba用户的crontab服务，此参数一般有root用户来运行。

file：file是命令文件的名字,表示将file做为crontab的任务列表文件并载入crontab。如果在命令行中没有指定这个文件，crontab命令将接受标准输入（键盘）上键入的命令，并将它们载入crontab。

-e：编辑某个用户的crontab文件内容。如果不指定用户，则表示编辑当前用户的crontab文件。

-l：显示某个用户的crontab文件内容，如果不指定用户，则表示显示当前用户的crontab文件内容。

-r：从/var/spool/cron目录中删除某个用户的crontab文件，如果不指定用户，则默认删除当前用户的crontab文件。

-i：在删除用户的crontab文件时给确认提示。



实例

3,15 * * * * command    每小时的第3和第15分钟执行

3,15 8-11 * * * command  在上午8点到11点的第3和第15分钟执行

3,15 8-11 */2 * * command 每隔两天的上午8点到11点的第3和第15分钟执行

3,15 8-11 * * 1 command　　每个星期一的上午8点到11点的第3和第15分钟执行

30 21 * * * /etc/init.d/smb restart 　　每晚的21:30重启smb  

45 4 1,10,22 * * /etc/init.d/smb restart　　每月1、10、22日的4 : 45重启smb

10 1 * * 6,0 /etc/init.d/smb restart　　每周六、周日的1 : 10重启smb

0,30 18-23 * * * /etc/init.d/smb restart　　每天18 : 00至23 : 00之间每隔30分钟重启smb

0 23 * * 6 /etc/init.d/smb restart　　每星期六的晚上11 : 00 pm重启smb

* */1 * * * /etc/init.d/smb restart　　每一小时重启smb

* 23-7/1 * * * /etc/init.d/smb restart　　晚上11点到早上7点之间，每隔一小时重启smb

0 11 4 * mon-wed /etc/init.d/smb restart　　每月的4号与每周一到周三的11点重启smb



. 来源，转载自
https://www.cnblogs.com/xin-jun/p/7814068.html
