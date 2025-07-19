import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY || "BMn6MYpmYaYme5I53Q3cgivMcN5jrq719GMcQkdBreSXOQw1G4IgR34VlZx8Da_1I-DAtddq0ATNVrJl7AN_2oU";
const PUSH_API_BASE_URL = import.meta.env.VITE_PUSH_API_BASE_URL || "http://localhost:8000"; // Default to localhost as per your example

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

const PushNotificationButton = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.getSubscription().then(subscription => {
          setIsSubscribed(!!subscription);
        });
      });
    }
  }, []);

  const sendSubscriptionToServer = async (subscription) => {
    try {
      const response = await fetch(`${PUSH_API_BASE_URL}/save-subscription`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(subscription),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error sending subscription to server:", error);
      throw error;
    }
  };

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        toast({
          title: "Push notifications not supported",
          description: "Your browser does not support push notifications.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        toast({
          title: "Permission Denied",
          description: "Notification permission was not granted.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const serviceWorker = await navigator.serviceWorker.ready;
      const subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      });

      console.log("Push Subscription:", subscription);
      await sendSubscriptionToServer(subscription);
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "You will now receive push notifications.",
      });
    } catch (error) {
      console.error("Error subscribing to push notifications:", error);
      toast({
        title: "Subscription Failed",
        description: error.message || "Could not subscribe to push notifications.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      const serviceWorker = await navigator.serviceWorker.ready;
      const subscription = await serviceWorker.pushManager.getSubscription();

      if (subscription) {
        await subscription.unsubscribe();
        // Optionally, send a request to your backend to remove the subscription
        // await fetch(`${PUSH_API_BASE_URL}/remove-subscription`, {
        //   method: "POST",
        //   headers: { "Content-type": "application/json" },
        //   body: JSON.stringify({ endpoint: subscription.endpoint }),
        // });
        setIsSubscribed(false);
        toast({
          title: "Unsubscribed!",
          description: "You will no longer receive push notifications.",
        });
      }
    } catch (error) {
      console.error("Error unsubscribing:", error);
      toast({
        title: "Unsubscription Failed",
        description: error.message || "Could not unsubscribe from push notifications.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // This button is for testing sending a notification from the client (if your backend supports it)
  // In a real app, notifications are usually sent from the server.
  const handleSendTestNotification = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${PUSH_API_BASE_URL}/send-notification`, {
        method: "GET", // Or POST with specific data
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      toast({
        title: "Test Notification Sent!",
        description: "Check your notifications.",
      });
    } catch (error) {
      console.error("Error sending test notification:", error);
      toast({
        title: "Test Notification Failed",
        description: error.message || "Could not send test notification.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg border border-primary/20 dark:border-primary/50">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Push Notifications</h3>
      {!isSubscribed ? (
        <Button
          onClick={handleSubscribe}
          disabled={isLoading}
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
        >
          {isLoading ? "Subscribing..." : "Enable Notifications"}
        </Button>
      ) : (
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleUnsubscribe}
            disabled={isLoading}
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive/10 dark:border-destructive dark:text-destructive dark:hover:bg-destructive/10 hover:scale-105 transition-transform"
          >
            {isLoading ? "Unsubscribing..." : "Disable Notifications"}
          </Button>
          <Button
            onClick={handleSendTestNotification}
            disabled={isLoading}
            variant="secondary"
            className="hover:scale-105 transition-transform"
          >
            {isLoading ? "Sending Test..." : "Send Test Notification"}
          </Button>
        </div>
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {isSubscribed ? "You are subscribed to notifications." : "Enable notifications to receive updates."}
      </p>
    </div>
  );
};

export default PushNotificationButton;