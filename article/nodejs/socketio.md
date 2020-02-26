+++
title="socketio.md"
date="2018-02-16T14:05:34-04:00"
+++
# Learning socket.io

## combine `socket.io` with express is easy

```js
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
```

## setting route of express
```js
app.get('/', function(req, res){
  res.sendfile(__dirname  + '/index.html');
});
```

## setting socket.io on server side
```js
io.sockets.on('connection',function(socket){
  io.sockets.emit('sayhello',{hello:'world'});
  io.sockets.emit('news','All done!');
  // receive the socket from client
  socket.on('feedback',function(data){
    console.log("your feedback recevied",data.msg)
    io.sockets.emit('feedback',data.msg);
  });
  socket.on('login',function(data){
    console.log('Got your name:', data);
    var msg = data.name + ' just logged in';
    //broadcast to client
    io.sockets.emit('news',msg);
    //save data to a file
  });

});
```
* Note:
* `io.sockets.emit` can emit sockets as many as you want,but `socket` can be emitted only once!
* on server side, you may want to use `socket.on` many times,but `socket.emit` once

## make the server running!
```js
server.listen(process.env.PORT || 1337);
```

## On client side

### Define html body

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>index</title>
    <link rel="stylesheet" type="text/css" href="http://lib.sinaapp.com/js/bootstrap/v3.0.0/css/bootstrap.min.css" />
   <script src='http://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js'></script>
   <script src="http://lib.sinaapp.com/js/bootstrap/v3.0.0/js/bootstrap.min.js"> </script>
  </head>
  <body>
   <h1 >System Broadcasts:</h1>
   <br />
   <h1 id='news'></h1>
   <br />
   <h1 >Feedback to users emit :</h1>
   <br />
   <h1 id='feedback'></h1>
  </body>
</html>
```

### javascript in `body` tag

### testing sockets

```html
    <script src='/socket.io/socket.io.js'></script>
    <script>
      var socket = io.connect('http://10.0.2.10:1337')
      //var socket = io.connect('http://linuxing3c9.jd-app.com')
      socket.on('news',function(data){
          console.log(data);
            $('#news').html(data);
      });
      socket.on('feedback',function(data){
          console.log(data);
          $('#feedback').html(data);
      });
      socket.emit('feedback',{msg:'I like it '});
      socket.emit('login',{name:'xing wenju'});
   </script>
```

### you can also test the style and jquery loaded

```html
    <script language="javascript" type="text/javascript">
    $(function(){
          console.log('activated');
      });
    </script>
```
