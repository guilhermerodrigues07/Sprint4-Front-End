// Simple service worker for PWA caching (install static shell)
const CACHE = 'passaabola-v1';
const urlsToCache = ['/', '/index.html'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((r) => r || fetch(event.request)));
});
