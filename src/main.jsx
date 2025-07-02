import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx"; // 👈 Agregado
import "./index.css";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXxWqMQLXzy1EXH9SvkR1_lMhbl5xQUmc",
  authDomain: "cm-coder-73700.firebaseapp.com",
  projectId: "cm-coder-73700",
  storageBucket: "cm-coder-73700.firebasestorage.app",
  messagingSenderId: "36038714487",
  appId: "1:36038714487:web:149f56ffe08e903235d272",
};

// Inicializa Firebase
initializeApp(firebaseConfig);

// Render principal
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider> {/* 👈 Contexto envuelve la app */}
      <App />
    </CartProvider>
  </StrictMode>
);
