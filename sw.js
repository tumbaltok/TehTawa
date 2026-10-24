const CACHE_NAME = 'tehtawa-pwa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Biarkan request API & halaman tetap mengambil data real-time dari jaringan
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});