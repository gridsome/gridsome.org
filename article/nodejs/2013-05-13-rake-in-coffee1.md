+++
title="2013-05-13-rake-in-coffee1.md"
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

    mkdirp = require('./node_modules/express/node_modules/mkdirp')
    os = require('os')
    fs = require('fs')
    readline = require('readline')

    eol = 'win32' == os.platform() ? '\r\n' : '\n'
    views = ['list','create','get','update','layout']

    emptyDirectory=(path, fn) ->
      fs.readdir path, (err, files)->
        throw err if  err && 'ENOENT' != err.code
        fn(!files || !files.length)

    read=(path,fn) ->
      fs.readFile path,'utf8',(err,data)->
        fn && fn(data)

    write=(path, str) ->
      fs.writeFileSync(path, str,'utf8')
      console.log('   ' + path)

    mkdir=(path, fn) ->
      mkdirp path, 755, (err)->
        throw err if err
        console.log '  ' + path
        fn && fn(path)

    abort=(str) ->
      console.error str
      process.exit(1)
