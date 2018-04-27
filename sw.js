var CACHE = 'cache-and-update-hcb-1';
var VERSION = '1.0.0';

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');

  evt.waitUntil(precache());

  console.log('The service worker was installed.');
});

self.addEventListener('fetch', function(evt) {
  if(evt.request.url.match(/googleapis.com|gstatic.com/) != null){
    console.log('The service worker is serving the asset.');
    evt.respondWith(fromCache(evt.request));
    console.log('Served, update resource');
    evt.waitUntil(update(evt.request));
  }
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      '/index.html',
      '/js/bundle.js',
      '/public/css/style.css',
      '/manifest.json',
      '/sw.js',
      'https://api.digitransit.fi/routing/v1/routers/hsl/bike_rental'
    ]);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
