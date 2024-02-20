self.addEventListener("install", () => {
  console.log("[Service Worker] Installed 2");
});

self.addEventListener("activate", () => {
  console.log("[Service Worker] Activated");
});

self.addEventListener("push", (event) => {
  console.log("Push notification received", event);
});

self.addEventListener("notificationclose", (event) => {
  console.log("Notifiation closed", event);
});
