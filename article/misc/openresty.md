+++
title="openresty.md"
date="2018-02-16T14:05:34-04:00"
+++
# openresty

## luajit install
```sh
pacman -S luajit
```
this will install luajit into `usr/bin` and `lib` files into `usr/lib/luajit-2.0/`

## lib and include
```sh
cp /usr/lib/luajit-2.0/* /usr/lib/
```

## nginx/conf/nginx.conf
```txt
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile on;

    lua_shared_dict config 1m;
    lua_package_path "conf/?.lua;;";
    init_by_lua_file "conf/init.lua";

    server {
        listen       80;
        server_name  localhost;
        location /luaredis {
              content_by_lua_file "conf/content.lua";
        }
      }
    }
```
## nginx/conf/init.lua
```lua
local cjson = require "cjson"
local config = ngx.shared.config
local file = io.open("conf/config.json","r")
local content = cjson.decode(file:read("*all"))
file:close()
for name, value in pairs(content) do
  config:set(name,value)
end
```

## nginx/conf/config.json
```json
{"host":"127.0.0.1","port":"6379"}
```

## nginx/conf/content.lua
```lua
ngx.header.content_type = "text/plain";
local redis = require "resty.redis";
local config = ngx.shared.config;
local instance = redis:new();
local host = config:get("host");
local port = config:get("port");
ngx.say("Redis server conneted on ",host, ":", port);
local ok,err = instance:connect(host, port);
ngx.say(err)
if not ok then
end
instance:set("name", "Grand Xing Wenju ");
instance:set("work", "Diplomat");
local name = instance:get("name")
local work = instance:get("work")
ngx.say("name: ", name);
ngx.say("work: ", work);
```
## Test it!
Then open your browser `http://127.0.0.1/luaredis`
```text
Redis server conneted on 127.0.0.1:6379
nil
name: Grand Xing Wenju
work: Diplomat
```
# Complete `nginx.conf` file


#user  nobody;
```txt
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
#sendfile on;

    lua_shared_dict config 1m;
    lua_package_path "conf/?.lua;;";
    init_by_lua_file "conf/init.lua";

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm index.lsp;
        }

        location = /lua{
            default_type 'text/plain';
            content_by_lua 'ngx.say("Hello Lua!")';
        }

        location /luaredis {
            default_type 'text/plain';
              content_by_lua_file "conf/content.lua";
        }

        location = /addr {
            default_type 'text/plain';
              set $a "hello";
              set $b "world";
              set_by_lua_file $res "conf/addr.lua" $a $b;
              echo $res;
        }
        #error_page  404              /404.html;
    location = /test {
            default_type 'text/plain';
              content_by_lua_file "conf/test.lua";
    }

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```
