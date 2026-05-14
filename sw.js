// Simple service worker to satisfy PWA requirements
const CACHE_NAME = 'pv-poche-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through for now, just to satisfy PWA criteria
  event.respondWith(fetch(event.request));
});
