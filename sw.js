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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('meu-pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
        '/images/logo.png'
      ]).catch((error) => {
        // Este console.error vai mostrar qual arquivo específico falhou
        console.error('Falha ao adicionar arquivos ao cache:', error);
      });
    })
  );
});
