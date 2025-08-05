import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import { register } from './utils/serviceWorkerRegistration'; // Import the registration utility
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Register the service worker
register();