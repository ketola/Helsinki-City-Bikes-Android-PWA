var APP_VERSION = '0.0.7'
var CACHE_NAME = 'hcb-cache_' + APP_VERSION
var urlsToCache = [
  '/',
  '/index.html',
  '/public/css/style.css',
  '/js/bundle.js'
];

self.addEventListener('activate', function(event) {
  console.log('activate service worker');
  event.waitUntil(self.clients.claim());

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (CACHE_NAME !== key) {
          console.log('delete old cache ' + key)
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('install', function(event) {
  console.log('install service worker');
  event.waitUntil(self.skipWaiting());
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch ' + event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('Cache hit ' + event.request.url);
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
