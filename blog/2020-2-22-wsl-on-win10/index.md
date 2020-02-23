---
title: Use WSL on win10 as development IDE
author: Xing Wenju
excerpt: wsl win10 linux
date: 2020-02-02
---

# Table of Contents

1.  [wsl入门介绍](#orgad652b6)
    1.  [环境安装](#org46bf5bf)
    2.  [创建项目](#org32a0dce)
    3.  [配置项目插件和功能](#org204664b)
    4.  [独立文件放置](#org4475a07)


<a id="orgad652b6"></a>

# WSL入门介绍


<a id="org46bf5bf"></a>

## 环境安装

确保你已经安装了choco包安装器。

    choco install -y wsl-alpine
    wsl Alpine
    apk update
    apk add vim emacs tmux mc
    passwd root
    


<a id="org32a0dce"></a>

## Doom Emacs

一个快速优雅的emacs发行版，建议在cmd中执行


    git clone https://github.com/hlissner/doom-emacs .emacs.d -b develop
    .emacs.d/bin/doom -p .doom.d install
    .emacs.d/bin/doom -p .doom.d test
    git clone https://github.com/linuxing3/doom-emacs-private .doom.d
    .emacs.d/bin/doom -p .doom.d refresh


<a id="org204664b"></a>

## 配置项目

集成什么语言

-   typeScript
-   javascript
-   python
-   org

<a id="org4475a07"></a>

# 总结

windows从环境、到创建、到配置、和常用项目技巧进行了简单介绍，希望可以帮助到刚使用的人 。

