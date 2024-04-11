var cacheName = 'pwaTeste-v1.0';

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                './index.html',
                './assets/CSS/style.css',
                './assets/JS/script.js',
                './assets/CSS/img/logo-texto-em-voz.png',
                './assets/CSS/img/logo-microphone.png',
                // Caminho para as outras imagens que ficaram salvas no cache
                './assets/img/29.png',
                './assets/img/40.png',
                './assets/img/57.png',
                './assets/img/58.png',
                './assets/img/60.png',
                './assets/img/80.png',
                './assets/img/180.png',
                './assets/img/1024.png'
            ]))
    );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event) {
    event.respondWith(async function () {
        try {
            return await fetch(event.request);
        } catch (err) {
            return caches.match(event.request);
        }
    }());
});
