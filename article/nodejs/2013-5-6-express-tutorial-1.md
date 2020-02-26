+++
title="2013-5-6-express-tutorial-1.md"
date="2018-02-16T14:05:34-04:00"
+++
---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [intro, beginner, jekyll, tutorial]
---
## 从零开始构建Express+Mongoose的程序

[如果你已经看过第一部分，请猛击这里看下一章](http://linuxing3.github.io/lessons/2013/05/06/express-tutorial-2/)

### 关于Express的框架

### 调用http、express和path模块
    http = require 'http'
    path = require 'path'
### 生成express应用
    express = require 'express'
    app = express()
    app.configure(->
      # 设置端口
      app.set('port', process.env.PORT || 3000)
      # 设置视图和公共目录
      app.use(express.logger('dev'))
      # app.use(express.directory(__dirname + 'public'))
      app.use(express.static(path.join(__dirname, 'public')))
      app.use(express.favicon())
      # 设置视图渲染模板为jade
      app.set('views', __dirname + '/views')
      app.set('view engine', 'jade')

      # 设置查询体解析为json功能
      app.use(express.bodyParser({keepExtensions: true,     uploadDir: './public/resources'}))
      # 设置http方法重写，如使用put更改数据等
      app.use(express.methodOverride())
      # 设置cookie和session
      # app.use(express.cookieParser())
      # app.use(express.session({ secret: 'bang590' }))
      # 设置路由功能
      app.use(app.router)
      app.use(express.errorHandler({ dumpExceptions: true,     showStack: true }))
      app.enable('trust proxy')
      )

### 启动服务器
    port = process.env.PORT or 3000
    http.createServer(app).listen(app.get('port'), ->
      console.log("Express server listening on port " + app.get('port'))
    )

### 设置列表路由
    app.get('/blogs',mongodb.findAll)

#### 设置新建路由
    app.get('/newblog', (req, res)->
      res.render('newblog',{title:'Input New Blog'})
    )
    app.post('/newblog', mongodb.create)

#### 设置统一化路由
    app.all('/blog/:id/:op?',mongodb.findById)

#### 分路由
    app.get('/blog/:id',mongodb.findById)
    app.get('/blog/:id/edit',mongodb.findById)
    app.put('/blog/:id/edit',mongodb.update)
    app.post('/blog/:id/edit',mongodb.update)
    app.get('/blog/:id/delete',mongodb.remo    ve)
    app.get('*', (req, res)->
      res.send('what???', 404)
     )

### 关于Mongoose的框架

#### 确定数据库的初始化设置,连接blogs集合
    mongoose = require('mongoose')
    mongoose.connect('localhost', 'blogs')

#### 定义数据结构
    BlogId = mongoose.Schema.ObjectId
    BlogSchema = mongoose.Schema({
	    owner: BlogId,
	    name: String,
	    age: String,
	    work: String,
	    email: String,
	    title:String,
	    content:String,
	    image:String,
	    date:Date
    })

#### 生成表模型，可作为类使用
    Blog = mongoose.model('Blog', BlogSchema)
#### CRUD具体方法和函数
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
		console.log "Hello! " + aBlog.name + " are "+     aBlog.work
		    )
	    res.redirect('blogs')
    module.exports.create = create

#### 查找
    findAll =(req,res)->
	    Blog.find({},(err,docs)->
		    res.render('blogs',{title:'Blogs',blog:docs})
	    )
    module.exports.findAll = findAll

    findById =(req,res)->
	    Blog.findById(req.params.id,(err,doc)->
		    console.log "Found " + doc
		    res.render('editblog',{title:'Blogs',blog:doc})
	    )
    module.exports.findById = findById

#### 移除remove
    remove=(req,res)->
	    Blog.findByIdAndRemove(req.params.id,(err,doc)->
		    console.log "removed!" + doc.name
		    res.redirect('blogs')
	    )
    module.exports.remove = remove

#### 更新update
    update =(req,res)->
    	Blog.findByIdAndUpdate(req.params.id,req.body.post,(err,docs)->
		    console.log docs + "updated!"
		    res.redirect('blogs')
	    )
    module.exports.update = update
