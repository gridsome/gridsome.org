+++
title="2013-5-6-express-tutorial-2.md"
date="2018-02-16T14:05:34-04:00"
+++
---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [intro, beginner, jekyll, tutorial]
---
## 从零开始构建Express+Mongoose的程序2

[如果你没有看过第一部分，请猛击这里](http://linuxing3.github.io/lessons/2013/05/06/express-tutorial-1/)

本文之间重点讲解如何通过发送网页数据创建Mongodb的文件。

这等于是建立一个数据库的表中的一行记录。

#### 首先我们需要一个页面，在jade模板中应该这样定义

    extends single
    block content3
    form(method='post',enctype="multipart/form- data",action='/newblog')
     input(type='hidden',id='',value=Date.now(),name='post[  date]')
     textarea(id='post_convaluent',id='Content',name='post[  content]')
     input(type="file",id='btn-file',name="post[image]")
     input(type='submit',id='btn-smt',value='好了吗？现在点击就可以发布')

+ 说明：

**通过post方法采取newblog的行动，发送多段的数据**

**网页抓取的数据存储在req.body.post中，以json的格式，供后续处理**

#### 需要设定对应的路由
    app.post('/newblog', mongodb.create)

+ 说明

**通过设定post的路由，告诉express，如果有post数据到newblog页面，就调用mongodb中的create方法 **

####调用的方法
    create=(req,res)->
      url = req.files.post['image'].path
      json = {
        name: req.body.post['name'],
        age: req.body.post['age'],
        work: req.body.post['work'],
        email: req.body.post['email'],
        title:req.body.post['title'],
        content:req.body.post['content'],
        image:url.slice(7,url.length),
        date:req.body.post['date']
      }
      aBlog = new Blog(json)
      aBlog.save((err)->
        console.log "Hello! " + aBlog.name + " are "+ aBlog.    work
        )
      res.redirect('blogs')

#### 注意其中对文件的处理方法。

_app配置中要启动bodyparser方法，并且使用扩展名和上传目录两个参数_

    app.use(express.bodyParser({keepExtensions: true, uploadDir: './public/resources'}))

_根据express的设计，上传后的文件路径将是/public/resources，我们要把public/这七个字符去掉，让网页可以加载resources路径）_

    image:url.slice(7,url.length)
