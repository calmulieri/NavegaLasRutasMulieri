// subirProductos.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import misproductos from "./misproductos.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXxWqMQLXzy1EXH9SvkR1_lMhbl5xQUmc",
  authDomain: "cm-coder-73700.firebaseapp.com",
  projectId: "cm-coder-73700",
  storageBucket: "cm-coder-73700.firebasestorage.app",
  messagingSenderId: "36038714487",
  appId: "1:36038714487:web:149f56ffe08e903235d272"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const subirProductos = async () => {
  try {
    for (const p of misproductos) {
      const productoFirestore = {
        title: p.title,
        description: p.description,
        price: p.price,
        categoryId: p.categoryId,
        imageId: p.imageId || "" // queda en blanco por ahora
      };

      await addDoc(collection(db, "productos"), productoFirestore);
      console.log(`✅ Producto "${p.title}" subido con ID automático.`);
    }
    console.log("🎉 Todos los productos fueron cargados exitosamente.");
  } catch (error) {
    console.error("❌ Error al subir productos:", error);
  }
};

subirProductos();