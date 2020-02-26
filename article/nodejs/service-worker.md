+++
date = "2017-04-20T21:15:18-04:00"
title = "service worker"

+++

## Service Worker

服务工作是一个网络缓存机制，可以把浏览器和服务器之间的数据传递进行缓存和服务。

类似于一个离线服务器。

> 看代码是最好的办法

### `service-worker.js`

```js
var cacheName = 'cp-work-ts-vue';
var filesToCache = [
    '/',
    '/main.js',
    '/css/*.css',
    '/assets/img/*.JPG'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
```

### 使用`sw-cachetools`生成`sw`文件

```bash
npm install sw-cache
sw-cache('fileLocation', blobs;)
```
