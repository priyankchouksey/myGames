var cacheName = 'com-otv-games_v1';
var urlsToCache = ['/',
'/common.js'];
self.addEventListener('install',(e) =>{
    e.waitUntil(
        caches.open(cacheName).then((cache) =>{
            return cache.addAll(urlsToCache);
        })
    )
})
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
    console.log("fetch called.");
})
self.addEventListener('activate',(e) => {
    //update cache here.
})
self.addEventListener('message',(e)=>{
    // messages send by UI to update or do something
})