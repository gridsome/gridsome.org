+++
title="proxys.md"
date="2018-02-16T14:05:34-04:00"
+++
title: "Proxy matters"
---

## 设置成功基本开发环境

nodejs
express
redis

### npm proxy

    npm config set registry http://registry.npmjs.vitecho.com
    npm config set proxy=http://127.0.0.1:3127

### wgetrc
    http_proxy = http://10.0.2.2:3128/
    ftp_proxy = http://10.0.2.2:3128/
    use_proxy = on
    wait = 15

##ubuntu下apt-get设置代理成功，原来只能用-o参数
    apt-get install -o Acquire::http::proxy= ip地址端口 wget


## git代理，使用gitconfig文件，通过命令可以设置
    git config --global http.proxy=10.0.2.2:3128
    git config –global http.sslverify false

### 在gitconfig文件中
    proxy = http://127.0.0.1:3127

##gem代理，使用--http-proxy ip地址端口
    gem install --http-proxy http://10.0.2.2:3128 $gem_name #

###在.gemrc中

    ---
    :backtrace: false
    :bulk_threshold: 1000
    :sources:
    - http://ruby.taobao.org
    :update_sources: true
    :verbose: true
    :http_proxy:
    - http://proxy.mfa.gov.cn:90

## w3m代理
~/.w3m/w3mrc

## elinks
~/.elinks/elinks.conf


##　在iphone下设置开发环境

1. 安装node
2. 用npm安装expess、redis、coffee-script等模块
3. 安装ruby和gem，并尝试安装rails、
4. 安装git

## iphone usb连接上网

### 用itools开启iphone的ssh隧道

### 用putty成功连接iphone并设置了端口转发

1.将iphone上3128端口，转到电脑本机的3128端口，作为代理

2.将iphone上3127端口，转到proxy.mfa.gov.cn的80端口，作为直接的代理

3.将iphone上6379端口，转到电脑本机的6379端口，作为redis服务器

4.将本机1337端口，转到iphone的1337端口，通过电脑访问iphone上的nodejs服务器


### iphone设置

* 用wifi

在mac笔记本上创建一个电脑对电脑的网络lenovo

固定ip地址 192.168.1.3

在iphone上连接lenovo热点

固定ip地址 192.168.1.2

代理设为127.0.0.1：3127


* 用3G

打开3G网络

通过属性表管理器编辑preferences.list文件，设置ip1的代理为127.0.0.1:3127，并将使用代理设为1

重启手机后生效

完成上述步骤，手机已经可以上网了


### 将iphone连接分享给电脑

在电脑上将代理设置为192.168.1.3:3127即可

实际上就是将电脑对网络的访问都转发到手机的3127，在转发到proxy.mfa.gov.cn


# 在Mac电脑上访问工作电脑内的虚拟机

实现思路：

1. Mac上访问iphone上的某个端口

2. putty中将该端口的访问转到工作电脑的2222端口

3. Virtualbox中将工作电脑的2222端口转到虚拟机的22端口

4. 在mac电脑上输入

        ssh root@192.168.1.3 -p 2222

# 在工作电脑内的虚拟机访问Mac电脑

实现思路：

在以上条件完成后，在Mac上输入plink命令，实际上就是建立反向的通道，开发本地的端口

    plink -v -ssh -2 -P 2222 root@192.168.1.3 -pw tswc0916 -R 22222:127.0.0.1:22 -a -N

上述命令的意思是连接到centos电脑上，将centos电脑上对22222的端口转发到我mac电脑上的22端口
