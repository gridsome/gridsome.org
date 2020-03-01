+++
title="2013-05-13-rake-in-coffee2.md"
date="2018-02-16T14:05:34-04:00"
+++
---
layout: post
title: "用coffee脚本自动生成MVC"
description: ""
category: "lesson"
tags: [intro, beginner, jekyll, tutorial]
---


## 创建程序入口

    createApplication=(path)->
      console.log 'creating files...'
      createMVC path

## 生成MVC的入口

    createMVC=(path)->
      console.log path
      console.log("请注意，我将为你自动生成相关文件。所有现有文件将被覆盖。");
      console.log("1. 生成数据模块定义文件")
      moduleDir = './module/' + path
      mkdir  moduleDir
      templateSchemaFile = './templates/schema.coffee'
      templateSchemaFileData = fs.readFileSync templateSchemaFile,'utf8'
      console.log templateSchemaFileData
      write  moduleDir + '/schema.coffee',templateSchemaFileData
      console.log("2. 生成视图定义文件")
      viewDir= './views/' + path
      mkdir viewDir
      for view in views
        templateViewFile= './templates/' + view + '.jade'
        write  viewDir + '/' + view + '.jade', fs.readFileSync templateViewFile,'utf8'
