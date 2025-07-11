// src/components/CheckoutForm.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext"; // asegurate que la ruta esté bien
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import "./CheckoutForm.css"


const CheckoutForm = () => {
  const { carrito, vaciarCarrito } = useCart();
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [idOrden, setIdOrden] = useState(null);

  const total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
 

  const manejarSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: { nombre, telefono, email },
      items: carrito,
      fecha: Timestamp.fromDate(new Date()),
      total,
    };

    try {
      const db = getFirestore();
      const ordenesRef = collection(db, "ordenes");
      const docRef = await addDoc(ordenesRef, orden);
      setIdOrden(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error("Error al generar orden:", error);
    }
  };

  return (
  <div className="checkout-form">
    {idOrden ? (
      <div>
        <h3>¡Gracias por tu compra!</h3>
        <p>Tu número de orden es: <strong>{idOrden}</strong></p>
      </div>
    ) : (
      <>
        <h2>Completa tus datos para finalizar la compra:</h2>
        <form onSubmit={manejarSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              id="telefono"
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <p>Total a pagar: <strong>${total}</strong></p>

          <button type="submit">Finalizar compra</button>
        </form>
      </>
    )}
  </div>
);
};
export default CheckoutForm;
