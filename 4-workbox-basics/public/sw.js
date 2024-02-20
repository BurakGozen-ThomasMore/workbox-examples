/* eslint-disable no-undef */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

// Claim clients immediately
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({ prefix: "my-app" });

// Cache and serve static assets
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "my-app-assets",
  })
);

// Cache and serve images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "my-app-images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
);

// Serve other requests using network-first strategy
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());
