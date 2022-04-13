importScripts("service-worker.js");

var cacheStorageKey = '190pwa'

var cacheList=[
  '/',
  'index.html',
]

self.addEventListener('install', e => {
  console.log(e)
  e.waitUntil(
    caches.open(cacheStorageKey)
    .then(cache => cache.addAll(cacheList))
    .then(() => self.skipWaiting())
  )
})

self.addEventListener('fetch', function (e) {
  console.log(e)
  console.log(localStorage.getItem('token'))
  e.respondWith(
    caches.match(e.request).then(function (response) {
      if(response != null){
        return response
      }
      return fetch(e.request.url)
    })
  )
})

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(res => {
//                 //1. 如果请求的资源已被缓存，则直接返回
//                 if (res) return res;
//                 //2. 没有，则发起请求并缓存结果
//                 let requestClone = event.request.clone();
//                 return fetch(requestClone).then(netRes => {
//                     if(!netRes || netRes.status !== 200) return netRes;
//                     let responseClone = netRes.clone();
//                     caches.open(cacheName).then(cache => cache.put(requestClone, responseClone));
//                     return netRes;
//                 });
//             })
//     );
// });

self.addEventListener('activate', function (e) {
  console.log(e)
  e.waitUntil(
    //获取所有cache名称
    caches.keys().then(cacheNames => {
      return Promise.all(
        // 获取所有不同于当前版本名称cache下的内容
        cacheNames.filter(cacheNames => {
          return cacheNames !== cacheStorageKey
        }).map(cacheNames => {
          return caches.delete(cacheNames)
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})
