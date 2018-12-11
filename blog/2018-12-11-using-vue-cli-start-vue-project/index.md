---
title: Use vue-cli to bootstrap vue project
author: Xing Wenju
excerpt: Use vue-cli to bootstrap vue project
date: 2018-12-11
---

# Table of Contents

1.  [vue-cli 3.0 入门介绍](#orgad652b6)
    1.  [环境安装](#org46bf5bf)
    2.  [创建项目](#org32a0dce)
    3.  [配置项目插件和功能](#org204664b)
    4.  [独立文件放置](#org4475a07)
2.  [项目分析](#org4c2f346)
3.  [如何随心所欲](#org7a1edc5)
4.  [总结](#org4ae9198)


<a id="orgad652b6"></a>

# vue-cli 3.0 入门介绍


<a id="org46bf5bf"></a>

## 环境安装

全新版本的脚手架、逼格非常高、 记住这个名字 @vue/cli ，对就是这个 你npm 或者yarn 安装就行了，先保证全局环境有它。

    npm install -g @vue/cli
    yarn add global @vue/cli


<a id="org32a0dce"></a>

## 创建项目

这里对比下以前2.X之前的版本 ，新版本把插件以及模板等 移植到命令行界面了.


    2.x	vue init <template-name> <project-name>
    3.x	vue create <project-name>

来一张图把 ，这里已经有几个默认配好的模板了，我们选最后的Manually select features

vue-cli3.0在你创建后会有一个保存当前配置的功能


<a id="org204664b"></a>

## 配置项目插件和功能

这里就很傻瓜了， 你要集成什么 就选就行了。我这里选个我比较常用的。

-   TypeScript
-   PWA
-   Vue-router
-   Vuex
-   CSS预处理
-   eslint prettier
-   自动化测试单元测试 、e2e
-   clipboard.png

我选LESS 这里我选eslint + prettier

选择语法检查的方式 保存就检查 还是fix和commit时候检查，我就默认选第一个了

单元测试插件我选jest

是把babel,postcss,eslint这些配置文件放哪


<a id="org4475a07"></a>

## 独立文件放置

放package.json里, 最后就是选择 是否记录一下？

启动项目进入目录,启动项目 这里 vue-cli 3.x 默认会打开浏览器 地址也会打在控制台。

    yarn serve
    npm run serve


<a id="org4c2f346"></a>

# 项目分析

去掉了2.x build和config等目录 ,大部分配置 都集成到vue.config.js这里了

vue.config.js里大概包括了配置 常用的输出路径名、跟目录、预处理、devServer配置、pwa、dll、第三方插件等等
详细配置可以看官方文档 详细config配置


<a id="org7a1edc5"></a>

# 如何随心所欲

1. 服务器配置修改

这里我先改个端口, 修改vue.config.js 然后重新启动工程 , 可以看到已经改成5999端口了

    module.exports = {
      lintOnSave: false,
      devServer: {
        port: 5999
      }
    }

2. 常用webpack配置修改

webpack的配置在这个属性里修改configureWebpack

包括plugins也可以自己扩展 ，本身尤大已经把常用的都封装了 ，不满足可以自行扩展。

这里改个webpack devtool输出方式、默认那个我属实不知道怎么跟踪代码

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map'
            // mutate config for production...
        }
    }

其他配置 就不一一介绍了 具体可以看这里webpack

3. 全局变量的设置

在项目根目录 创建二个文件

-   .env.development
-   .env.production

里面配置键值对就行了

比如这样在axios中就可以配置根路径了

    const service = axios.create({
        baseURL: process.env.VUE_APP_MOCK_URL
    })


<a id="org4ae9198"></a>

# 总结

本文使用vue-cli3.x 从环境、到创建、到配置、和常用项目技巧进行了简单介绍，希望可以帮助到刚使用的人 。

