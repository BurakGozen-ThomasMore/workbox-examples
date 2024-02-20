import { useState } from "react";

export function App() {
  const [permission, setPermission] = useState(
    "Notification" in window ? Notification.permission : "default"
  );

  /**
   * This function will request permission to show notifications
   * and put the permission in state
   */
  async function requestPermission() {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      console.log(permission);
      setPermission(permission);
    }
  }

  /**
   * This function will show a notification if the permission is granted
   * and the browser supports notifications
   */
  async function activatePushNotifications() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.controller.postMessage({
        command: "ACTIVATE_OFFLINE_NOTIFICATIONS",
        data: false,
      });
    }
  }

  return (
    <main className="bg-zinc-900 max-h-dvh h-dvh overflow-hidden w-screen flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold text-zinc-300 font-mono">Demo App</h1>

      <div className="flex flex-col gap-4">
        {permission !== "granted" && (
          <button
            className="bg-orange-400 px-6 py-3 rounded-lg font-medium font-mono"
            onClick={requestPermission}
          >
            Ask for permission
          </button>
        )}

        <button
          className="bg-blue-400 px-6 py-3 rounded-lg font-medium font-mono"
          onClick={activatePushNotifications}
        >
          Activate Push Notifications
        </button>
      </div>
    </main>
  );
}
