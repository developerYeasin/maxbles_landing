// Helper function to convert base64 to Uint8Array
const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
};

// Event listener for push notifications
self.addEventListener("push", (event) => {
  const data = event.data.json(); // Assuming the push payload is JSON
  console.log("Push received:", data);

  const title = data.title || "New Notification";
  const options = {
    body: data.body || "You have a new message.",
    icon: data.icon || '/maskable-icon-512x512.png', // Default icon
    badge: data.badge || '/maskable-icon-512x512.png', // Default badge
    data: {
      url: data.url || 'https://maxblesdigital.com/', // URL to open on click
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Event listener for notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  // This looks for all the Window clients (tabs) and focuses one if it exists,
  // otherwise it opens a new one.
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
      return null;
    })
  );
});