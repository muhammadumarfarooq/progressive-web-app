self.addEventListener("install", function (event) {
  console.log("installing sw", event);
});

self.addEventListener("activate", function (event) {
  console.log("activate s", event);
  return self.clients.claim();
});

// fetch event listner (fetch whenever our webapp fetch something)
self.addEventListener("fetch", function (event) {
  console.log("fetching", event);
  event.respondWith(fetch(event.request));
});
