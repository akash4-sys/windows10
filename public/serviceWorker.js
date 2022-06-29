const CACHE_NAME = 'version-1';
const self = this;

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request).then(cachedResponse => {
			const networkFetch = fetch(event.request).then(response => {
				// update the cache with a clone of the network response
				caches.open(CACHE_NAME).then(cache => {
					cache.put(event.request, response.clone());
				});
			});
			// prioritize cached response over network
			return cachedResponse || networkFetch;
		}
		)
	)
});