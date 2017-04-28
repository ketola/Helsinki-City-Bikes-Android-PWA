console.log('sw');

var CACHE_NAME = 'hcb-cache1';
var urlsToCache = [
  '/',
  '/index.html',
  '/public/css/style.css',
  '/dist/js/bundle.js',
  'http://api.digitransit.fi/routing/v1/routers/hsl/bike_rental'
];

self.addEventListener('activate', function(event) {
  console.error('activate');
});

self.addEventListener('install', function(event) {
  console.log('install');
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
