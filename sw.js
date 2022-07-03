// const CACHE_NAME = "offline-dependencies";
// const REQUIRED_FILES = [
//   "index.html",
//   //   "./pages/about.html",
//   //   "./pages/contact.html",
//   //   "./js/index.js",
//   //   "./js/app.js",
//   //   "./js/materialize.min.js",
//   //   "./css/styles.css",
//   //   "./css/materialize.min.css",
//   //   "./img/fish.png",
//   //   "./img/logo.png",
// ];

// // install
// self.addEventListener("install", (evt) => {
//   evt.waitUntil(async () => {
//     const cache = await caches.open(CACHE_NAME);
//     await cache.addAll(REQUIRED_FILES);
//     self.skipWaiting();
//   });
//   console.log("service worker installed");
// });

// // activate event
// self.addEventListener("activate", (evt) => {
//   console.log("service worker activated");
// });

// self.addEventListener("fetch", (evt) => {
//   evt.respondWith(async () => {
//     const response = await caches.match(evt.request);
//     return response ? response : await fetch(evt.request);
//   });
//   console.log("service worker fetch");
// });

// install event
self.addEventListener("install", (evt) => {
  console.log("service worker installed");
});

// activate event
self.addEventListener("activate", (evt) => {
  console.log("service worker activated");
});

// fetch event
self.addEventListener("fetch", (evt) => {
  console.log("fetchevent", evt);
});
