// Service Worker pour améliorer le score EcoIndex
const CACHE_NAME = 'vvachet-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/app.css',
  '/js/app.js',
  '/js/chunk-vendors.js',
  '/imgs/hero/heroCharacter.svg',
  '/imgs/hero/technologies/webby.svg',
  '/imgs/hero/technologies/nuxt.svg',
  '/imgs/hero/technologies/symfony.svg',
  '/imgs/hero/technologies/vue.svg',
  '/imgs/hero/technologies/tailwind.svg',
  '/imgs/technos/docker.svg'
];

// Installation du service worker et mise en cache des ressources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Stratégie de cache : Network first, puis cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cloner la réponse pour la mettre en cache
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME)
          .then(cache => {
            // Ne mettre en cache que les requêtes GET
            if (event.request.method === 'GET') {
              cache.put(event.request, responseToCache);
            }
          });
          
        return response;
      })
      .catch(() => {
        // En cas d'échec, essayer de servir depuis le cache
        return caches.match(event.request);
      })
  );
});

// Nettoyage des anciens caches lors de l'activation
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
