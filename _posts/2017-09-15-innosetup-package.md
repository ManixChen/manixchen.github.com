---
layout: post
title: windows下将服务文件一键打包成应用程序自动执行
tags: window 打包 InnoSetup
categories: InnoSetup
---


 在这个容器化包管理时代，前端打包工具等满天飞的时代想必你也会比较感兴趣这个话题(Webpack,Rollup,RequireJS,browserify)
 
 很多小伙伴估计都没有听说过这个名词，打包工具其实就是将做好的程序用用户可以看到的方式制作成一个对应操作系统下的可执行应用，Windows下面必然就是打包成 .exe为后缀的，说起来高大上，其实就是一个难者亦易的事情，具体你看我怎么操作的就知道的

 > 主要用途还是节省时间为平时安装项目或者服务，集成打包web 的apache等容器居多



#### 其实同类型的打包下载工具确实相当多，下面的统计一下相关工具，我之前也是因为公司没有专业技术做这块，我一个前端就研究了下
1. Inno Setup
　　Inno Setup 是一款免费的 Windows 安装程序制作工具，具有易于使用、灵活性高和功强大的特点。支持言、自定义安装界面、自动升级、注册表操作等功，可以帮助你快速打包出一个完整的安装程序。

2. InstallShield
　　InstallShield 是一款商业化的安装程序制作工具，支持种操作系和编程言，包括 Windows、Linux、MacOS 等。的特点是可定制性强、易于使用、功齐全，可以帮助你快速创建出一个专业的安装程序


3. [NSIS](https://blog.csdn.net/gyc1307py42568/article/details/129099170)
　　NSIS 是一款免费的安装程序制作工具，支持自定义安装界面、自动升级、注册表操作等功。的特点是小巧、简单、易于学，可以帮助你快速打包出一个简单的安装程序。

4. WiX Toolset
　　WiX Toolset 是一款免费的 Windows 安装程序制作工具，使用 XML 文件来描述安装程序，可以支持言、自定义安装界面、自动升级等功。的特点是可扩性强、功齐全、易于使用，可以帮助你快速打包出一个专业的安装程序。

　　5. Advanced Installer

Advanced Installer 是一款商业化的安装程序制作工具，支持种操作系和编程言，包括 Windows、Linux、MacOS 等。的特点是功强大、易于使用、可定制性强，可以帮助你快速创建出一个专业的安装程序。

　　6. Nullsoft Scriptable Install System (NSIS)

　　Nullsoft Scriptable Install System (NSIS) 是一款免费的 Windows 安装程序制作工具，支持自定义安装界面、自动升级、注册表操作等功。的特点是小巧、简单、易于学，可以帮助你快速打包出一个简单的安装程序。

7. InstallAnywhere

　　InstallAnywhere 是一款商业化的安装程序制作工具，支持种操作系和编程言，包括 Windows、Linux、MacOS 等。的特点是可定制性强、易于使用、功齐全，可以帮助你快速创建出一个专业的安装程序。


> 我尝试的使用的工具(installshield)也比较高大上一点
切入正题，如标题所述使用inno setup来打包一个java web 相关的内容为一个exe，.net web类似，这个工具可以在网上直接找到下载，有汉化版的，并且里面也有帮助手册可以参考。把里面的一些敏感信息已经做了替代，这些都是可以根据你自己情况来修改的。下面直接上干货。
> 打包和发布的内容
jdk(1.6/1.7/1.8)、mysql(5.5~)、tomcat(6.0/7.0/8.0)、ftp服务器、webapp、.Net服务、C++服务(请诸位无视项目中技术的复杂行，都是历史原因)
打包脚本和bat脚本中涉及到，文件拷贝、ini配置文件修改、xml配置文件修改、服务安装停止启动、.net服务安装、环境变量配置、数据库初始化等，唯独缺少注册表和防火墙配置(%>_<%)
打包脚本  
8.  配置安装程序默认信息，拷贝安装部中内置的程序到用户指定目录以及安装脚本教程
    ```
        ; 脚本由 Inno Setup 脚本向导 生成！
        ; 有关创建 Inno Setup 脚本文件的详细资料请查阅帮助文档！

        #define MyAppName "abc"
        #define MyAppVersion "1.0"
        #define MyAppPublisher "aaa"
        #define MyAppURL ""

        [Setup] 
        ; 注: AppId的值为单独标识该应用程序。
        ; 不要为其他安装程序使用相同的AppId值。
        ; (生成新的GUID，点击 工具|在IDE中生成GUID。)
        AppId={9E044575-9CD9-4751-B0BE-F6758BA94548}
        AppName={#MyAppName}
        AppVersion={#MyAppVersion}
        ;AppVerName={#MyAppName} {#MyAppVersion}
        AppPublisher={#MyAppPublisher}
        AppPublisherURL={#MyAppURL}
        AppSupportURL={#MyAppURL}
        AppUpdatesURL={#MyAppURL}
        DefaultDirName={pf}\{#MyAppName}
        DefaultGroupName=XX管理软件(abc)
        AllowNoIcons=yes
        OutputBaseFilename=setup
        Compression=lzma
        SolidCompression=yes
        [Files]
        ;拷贝tomcat
        Source:"Source\apache-tomcat-6.0.41\*";DestDir:"{app}\tomcat6.0";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝jdk
        Source:"Source\jdk1.6.0_43\*";DestDir:"{app}\jdk1.6";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝mysql
        Source:"Source\MySql5.5\*";DestDir:"{app}\MySql5.5";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝源代码
        Source:"Source\abc\*";DestDir:"{app}\tomcat6.0\webapps\ROOT";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝sdk
        Source:"Source\Sdk\*";DestDir:"{app}\Sdk";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝服务器
        Source:"Source\Server\*";DestDir:"{app}\Server";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝ftp
        Source:"Source\FtpServer\*";DestDir:"{app}\FtpServer";Flags:igNoreversion recursesubdirs createallsubdirs
        ;拷贝bat
        Source:"Source\*";DestDir:"{app}\";
        ;拷贝桌面快捷方式
        Source:"Source\xx系统.url";DestDir:"{userdesktop}\xx系统";
        [Languages]
        Name: "chinesesimp"; MessagesFile: "compiler:Default.isl"
        [Icons]
        Name: "{group}\{cm:ProgramOnTheWeb,{#MyAppName}}"; Filename: "{#MyAppURL}"
        Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
        [INI]
        ;修改数据库配置文件
        Filename:"{app}\MySql5.5\my.ini";Section:"mysqld";Key:"basedir"; String:"{app}\MySql5.5"
        Filename:"{app}\MySql5.5\my.ini";Section:"mysqld";Key:"datadir"; String:"{app}\MySql5.5\data"
        Filename:"{app}\MySql5.5\my.ini";Section:"mysqld";Key:"port"; String:"3308"
        Filename:"{app}\MySql5.5\my.ini";Section:"client";Key:"port"; String:"3308"
        ;修改服务器配置文件
        Filename:"{app}\Server\init.ini";Section:"RegAddr";Key:"port"; String:"5556"
        Filename:"{userdesktop}\xx系统.url";Section:"InternetShortcut";Key:"URL"; String:"http://127.0.0.1:7070/"
        [Run]
        ;修改tomcat配置文件
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\tomcat6.0\conf\server.xml'),'/Server/Service/Connector','port','7070')
        ;修改web数据库连接配置文件
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\tomcat6.0\webapps\ROOT\META-INF\Context.xml'),'/Context/Resource','password','123456')
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\tomcat6.0\webapps\ROOT\META-INF\Context.xml'),'/Context/Resource','url','jdbc:mysql://127.0.0.1:3308/abc?characterEncoding=UTF-8')
        ;修改FTP配置文件
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\FtpServer\FileZilla Server.xml'),'/FileZillaServer/Users/User','Name','admin')
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml2(ExpandConstant('{app}\FtpServer\FileZilla Server.xml'),'/FileZillaServer/Users/User/Option[0]','e10adc3949ba59abbe56e057f20f883e')
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\FtpServer\FileZilla Server.xml'),'/FileZillaServer/Users/User/Permissions/Permission','Dir',ExpandConstant('{app}\tomcat6.0\webapps\ROOT\SystemFile'))
        ;修改服务配置文件
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\Sdk\abc.config'),'/configuration/appSettings/add[1]','value','127.0.0.1')
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\Sdk\abc.config'),'/configuration/appSettings/add[2]','value','5556')
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\Sdk\abc.config'),'/configuration/appSettings/add[3]','value','127.0.0.1')
        Filename:"{app}\loading.bat";AfterInstall:ConfigXml(ExpandConstant('{app}\Sdk\abc.config'),'/configuration/appSettings/add[4]','value','7070')
        Filename:"{app}\install.bat";Description:"正在启动或配置相关程序";
        [UninstallRun]
        Filename:"{app}\uninstall.bat";
        [UninstallDelete]
        Type:filesandordirs;Name:"{app}\Server"
        Type:filesandordirs;Name:"{app}\MySql5.5"
        Type:filesandordirs;Name:"{app}\Sdk"
        Type:filesandordirs;Name:"{app}\tomcat6.0"
        Type:files;Name:"{app}\InstallUtil.InstallLog"
        [Code]
        procedure ConfigXml2(xmlPath:String;xPath:String;innerText:String);
        var
            XMLDocument,XMLRoot,XMLNode:Variant;
        begin
            try
            XMLDocument := CreateOleObject('MSXML2.DOMDocument');
            XMLDocument.async := False;
            XMLDocument.resolveExternals := False;
            XMLDocument.load(xmlPath);
            XMLRoot := XMLDocument.documentElement;

            XMLNode:=XMLRoot.SelectSingleNode(xPath);
            XMLNode.Text:=innerText;
            XMLDocument.Save(xmlPath);
            except
            MsgBox('xml error', mbInformation, mb_Ok);
            end;
        end;
        procedure ConfigXml(xmlPath:String;xPath:String;attrName:String;attrValue:String);
        var
            XMLDocument,XMLRoot,XMLNode:Variant;
        begin
            try
            XMLDocument := CreateOleObject('MSXML2.DOMDocument');
            XMLDocument.async := False;
            XMLDocument.resolveExternals := False;
            XMLDocument.load(xmlPath);
            XMLRoot := XMLDocument.documentElement;

            XMLNode:=XMLRoot.SelectSingleNode(xPath);
            XMLNode.Attributes.GetNamedItem(attrName).Value:=attrValue;
            XMLDocument.Save(xmlPath);
            except
            MsgBox('xml error', mbInformation, mb_Ok);
            end;
        end;
    ```

9. 配置环境变量，启动并修改mysql默认密码(这个需要格外注意，别给客户更新把数据库删除或者替换了)

```
    @echo off 
    title 运维系统正在安装中,请不要手动关闭
    color 0a
    echo jdk 环境变量
    reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v JAVA_HOME /t REG_EXPAND_SZ /d "%cd%\jdk1.6" /f
    echo tomcat 环境变量
    reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v CATALINA_HOME /t REG_EXPAND_SZ /d "%cd%\tomcat6.0" /f
    echo 系统环境变量
    reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v "PATH" /d "%PATH%;%cd%\jdk1.6\bin;%cd%\tomcat6.0\bin;" /f
    echo 启动mysql并更新密码
    "%cd%\MySql5.5\bin\mysqld.exe" --install "abcMysql" --defaults-file="%cd%\MySql5.5\my.ini"
    net start abcMysql
    sc config abcMysql start=auto
    ping -n 30 127.1>nul
    "%cd%\MySql5.5\bin\mysql.exe" --defaults-file="%cd%\MySql5.5\my.ini" -u root -e "UPDATE mysql.user SET Password=old_password('123456') WHERE User='root' or User='';"
    "%cd%\MySql5.5\bin\mysql.exe" --defaults-file="%cd%\MySql5.5\my.ini" -u root -e "FLUSH PRIVILEGES;"
    echo 初始化mysql数据库
    "%cd%\MySql5.5\bin\mysql.exe"  -uroot -p123456 < "%cd%\tomcat6.0\webapps\ROOT\abc.sql"
    net stop abcMysql
    net start abcMysql
    echo 安装ftp
    "%cd%\FtpServer\FileZilla server.exe" /install auto
    "%cd%\FtpServer\FileZilla server.exe" /start
    echo 安装服务器
    sc create abcMessageService binpath= "%cd%\Server\Server.exe" displayname= "abcMessageService" start= auto 
    Net Start abcMessageService
    echo 启动tomcat
    set JAVA_HOME=%cd%\jdk1.6
    set CATALINA_HOME=%cd%\tomcat6.0
    set CATALINA_BASE=%cd%\tomcat6.0
    cd .\tomcat6.0\bin
    call service.bat install
    sc config abcTomcat6 start=auto
    net start abcTomcat6
    cd ..\..\
    echo 安装服务
    %SystemRoot%\Microsoft.NET\Framework\v2.0.50727\installutil.exe "%cd%\Sdk\abc.exe"
    Net Start abcService
    sc config abcService start=auto
    exit
```

10. 添加一个卸载功能，不然岂不是流氓软件
```
    @echo off
    title abc系统正在卸载中,请不要手动关闭
    color 0a
    echo 删除环境变量
    reg delete "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v JAVA_HOME  /f   
    reg delete "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v CATALINA_HOME  /f   
    echo 停止并删除tomcat
    net stop abcTomcat6
    cd .\tomcat6.0\bin
    call service.bat remove
    cd ..\..\
    echo 停止并删除mysql
    net stop abcMysql
    sc delete abcMysql
    echo 停止并卸载FTP
    "%cd%\FtpServer\FileZilla server.exe" /stop
    "%cd%\FtpServer\FileZilla server.exe" /uninstall
    echo 卸载注册服务器
    Net Stop abcMessageService
    sc delete abcMessageService
    echo 卸载运维服务
    Net Stop abcService
    %SystemRoot%\Microsoft.NET\Framework\v2.0.50727\installutil.exe -u "%cd%\Sdk\abc.exe"
    sc delete abcService
    exit
```