const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/PWA_Service-Worker/',
    '/PWA_Service-Worker/index.html',
    '/PWA_Service-Worker/style.css',
    '/PWA_Service-Worker/manifest.json',
    '/PWA_Service-Worker/icons/icon-192x192.png',
    '/PWA_Service-Worker/icons/icon-512x512.png'
];


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
