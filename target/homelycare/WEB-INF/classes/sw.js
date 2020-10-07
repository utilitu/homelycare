const cacheName = 'mycache-v1';
const resourcesToPrecacheList = [
	'/',
	'index.html'
];

// ServiceWorker would receive the install event during registration. 
self.addEventListener('install', event => {
	console.log('In Service worker, In install event!');
	event.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				return cache.addAll(resourcesToPrecacheList);
			})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(caches.match(event.request).then(cachedResponse => {
		return cachedResponse || fetch(event.request);
	})
	);
});


