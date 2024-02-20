let notificationInterval;
let isActive = false;

self.addEventListener("message", async (event) => {
  if (event.data.command === "ACTIVATE_OFFLINE_NOTIFICATIONS") {
    isActive = !isActive;
    console.log("Offline notifications triggered", isActive);

    if (!isActive) {
      clearInterval(notificationInterval);
      return;
    }

    notificationInterval = setInterval(() => {
      self.registration.showNotification("Hello World!", {
        body: "This is a notification from the service worker",
      });
    }, 5000);
  }
});
