self.addEventListener("install", function (event) {
  console.log("installing sw", event);
});

self.addEventListener("activate", function (event) {
  console.log("activate s", event);
  return self.clients.claim();
});
