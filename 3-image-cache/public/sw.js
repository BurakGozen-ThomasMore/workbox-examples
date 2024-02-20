/* eslint-disable no-undef */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);
