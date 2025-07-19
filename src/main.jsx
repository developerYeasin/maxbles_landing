import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import { register } from './utils/serviceWorkerRegistration'; // Import the registration utility

createRoot(document.getElementById("root")).render(<App />);

// Register the service worker
register();