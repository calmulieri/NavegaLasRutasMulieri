import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";
import './index.css'
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyBXxWqMQLXzy1EXH9SvkR1_lMhbl5xQUmc",
  authDomain: "cm-coder-73700.firebaseapp.com",
  projectId: "cm-coder-73700",
  storageBucket: "cm-coder-73700.firebasestorage.app",
  messagingSenderId: "36038714487",
  appId: "1:36038714487:web:149f56ffe08e903235d272"
};
// Genero variable para inicializar la instancia a la base de datos
initializeApp(firebaseConfig)
// Me asguro que la inicialización se hace al principio

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
