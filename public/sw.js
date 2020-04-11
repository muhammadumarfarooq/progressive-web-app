self.addEventListener("install", function (event) {
  console.log("installing sw", event);
});

self.addEventListener("activate", function (event) {
  console.log("activate sw", event);
  return self.clients.claim();
});
