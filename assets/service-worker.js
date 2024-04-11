var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/CSS/style.css',
        '/assets/JS/script.js',
        '/assets/img/29.png',
        '/assets/img/40.png',
        '/assets/img/57.png',
        '/assets/img/58.png',
        '/assets/img/60.png',
        '/assets/img/80.png',
        '/assets/img/180.png',
        '/assets/img/1024.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
