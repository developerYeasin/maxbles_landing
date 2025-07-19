"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY || "BMn6MYpmYaYme5I53Q3cgivMcN5jrq719GMcQkdBreSXOQw1G4IgR34VlZx8Da_1I-DAtddq0ATNVrJl7AN_2oU";
const PUSH_API_BASE_URL = import.meta.env.VITE_PUSH_API_BASE_URL || "http://localhost:8000";

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
  const [isLoading, setIsLoading] = useState(true); // Start as loading since we're auto-subscribing
  const [permissionStatus, setPermissionStatus] = useState('default'); // To track permission state

  const sendSubscriptionToServer = async (subscription) => {
    console.log("Attempting to send subscription to server:", subscription);
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
      const result = await response.json();
      console.log("Subscription sent to server successfully:", result);
      return result;
    } catch (error) {
      console.error("Error sending subscription to server:", error);
      throw error;
    }
  };

  useEffect(() => {
    const setupPushNotifications = async () => {
      setIsLoading(true);
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        console.warn("Push notifications not supported by this browser.");
        toast({
          title: "Browser Not Supported",
          description: "Your browser does not support push notifications. Please try Chrome, Firefox, or Edge.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      try {
        const registration = await navigator.serviceWorker.ready;
        console.log("Service Worker ready:", registration);

        const currentSubscription = await registration.pushManager.getSubscription();
        if (currentSubscription) {
          console.log("Existing subscription found:", currentSubscription);
          setIsSubscribed(true);
          setPermissionStatus('granted');
          setIsLoading(false);
          return; // Already subscribed, no need to prompt or re-subscribe
        }

        // If no existing subscription, request permission and subscribe
        console.log("Requesting notification permission...");
        const permission = await Notification.requestPermission();
        setPermissionStatus(permission);
        console.log("Notification permission requested, result:", permission);

        if (permission === "granted") {
          console.log("Attempting to subscribe to push notifications...");
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
          });

          console.log("Push Subscription created:", subscription);
          await sendSubscriptionToServer(subscription);
          setIsSubscribed(true);
          toast({
            title: "Subscribed!",
            description: "You will now receive push notifications.",
          });
        } else if (permission === "denied") {
          toast({
            title: "Permission Denied",
            description: "Notification permission was denied. Please enable it in your browser settings if you wish to receive notifications.",
            variant: "destructive",
          });
        } else { // 'default' or other unexpected states
          toast({
            title: "Permission Required",
            description: "Please allow notification permission when prompted by your browser.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error setting up push notifications:", error);
        toast({
          title: "Subscription Failed",
          description: error.message || "Could not subscribe to push notifications. Ensure your VAPID key is correct and your backend is running.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    setupPushNotifications();
  }, []); // Empty dependency array means this runs once on mount

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      const serviceWorker = await navigator.serviceWorker.ready;
      const subscription = await serviceWorker.pushManager.getSubscription();

      if (subscription) {
        console.log("Attempting to unsubscribe from push notifications:", subscription);
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
        console.log("Successfully unsubscribed.");
      } else {
        toast({
          title: "Not Subscribed",
          description: "You are not currently subscribed to notifications.",
        });
        console.log("No active subscription found to unsubscribe.");
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

  const handleSendTestNotification = async () => {
    setIsLoading(true);
    try {
      console.log("Attempting to send test notification...");
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
      console.log("Test notification request sent successfully.");
    } catch (error) {
      console.error("Error sending test notification:", error);
      toast({
        title: "Test Notification Failed",
        description: error.message || "Could not send test notification. Ensure your backend is running and configured to send.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  let statusMessage = "";
  if (isLoading) {
    statusMessage = "Checking notification status...";
  } else if (isSubscribed) {
    statusMessage = "You are subscribed to notifications.";
  } else if (permissionStatus === 'denied') {
    statusMessage = "Notification permission denied. Please enable it in browser settings.";
  } else {
    statusMessage = "Notifications are not enabled.";
  }

  return (
    <div className="p-4 flex flex-col gap-4 items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg border border-primary/20 dark:border-primary/50">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Push Notifications</h3>
      {isLoading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      ) : (
        <div className="flex flex-col gap-2">
          {isSubscribed ? (
            <>
              <Button
                onClick={handleUnsubscribe}
                disabled={isLoading}
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive/10 dark:border-destructive dark:text-destructive dark:hover:bg-destructive/10 hover:scale-105 transition-transform"
              >
                Disable Notifications
              </Button>
              <Button
                onClick={handleSendTestNotification}
                disabled={isLoading}
                variant="secondary"
                className="hover:scale-105 transition-transform"
              >
                Send Test Notification
              </Button>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {permissionStatus === 'denied' ? "Notifications are blocked by your browser settings." : "Notifications are not enabled."}
            </p>
          )}
        </div>
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {statusMessage}
      </p>
    </div>
  );
};

export default PushNotificationButton;