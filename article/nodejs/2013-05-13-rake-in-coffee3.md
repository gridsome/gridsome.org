+++
title="2013-05-13-rake-in-coffee3.md"
date="2018-02-16T14:05:34-04:00"
+++
---
layout: post
title: "用coffee脚本自动生成MVC"
description: ""
category: "lesson"
tags: [intro, beginner, jekyll, tutorial]
---


## 主程序入口


    main=()->
      rl = readline.createInterface(process.stdin, process.stdout)
      console.log "Please define your Module's name and schema in following format"
      console.log "name=key1:value1,key2:value2,..."
      rl.setPrompt('OHAI> ')
      rl.prompt()
      rl.on 'line',(line)->
        name = line.split('=')
        MODULE_NAME = name[0]
        MODULE_SCHEMA = name[1].split(',').join('\n')
        console.log MODULE_NAME
        console.log MODULE_SCHEMA
        console.log 'Generating new MVC files...'
        createApplication MODULE_NAME
        console.log 'Doing Customization Stuff...'
        moduleFile = './module/' +  MODULE_NAME + '/schema.coffee'
        customize moduleFile,MODULE_NAME,MODULE_SCHEMA
        for view in views
          viewFile = './views/' + MODULE_NAME + '/' + view + '.jade'
          customize viewFile,MODULE_NAME,MODULE_SCHEMA
        console.log 'Done'
        process.exit(0)


## 必要的后期个性化更改

    customize=(file,module_name,module_schema)->
        data = fs.readFileSync file,'utf8'
        data = data.replace /{_MODULE_NAME}/g,module_name
        data = data.replace /{_MODULE_INSTANCE}/g,module_name
        data = data.replace /{_MODULE_SCHEMA}/g,module_schema
        fs.writeFileSync file,data

## 别忘了`main()`主函数的调用
