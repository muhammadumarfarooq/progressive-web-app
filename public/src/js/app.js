// the browser in which we want to register the sw has sw support
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("sw registered"));
}
