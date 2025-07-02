import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const { carrito, vaciarCarrito, eliminarProducto, cantidadTotal, total } = useCart();

  if (carrito.length === 0) {
    return <h2 style={{ marginTop: "100px", padding: "2rem" }}>🛒 El carrito está vacío</h2>;
  }

  return (
    <div style={{ marginTop: "100px", padding: "2rem" }}>
      <h2>🛒 Carrito de compras</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {carrito.map((prod) => (
          <li key={prod.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem", paddingBottom: "1rem" }}>
            <h3>{prod.title}</h3>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.price}</p>
            <p>Subtotal: ${prod.price * prod.cantidad}</p>
            <button onClick={() => eliminarProducto(prod.id)}>🗑 Eliminar</button>
          </li>
        ))}
      </ul>

      <h3>Total ({cantidadTotal} productos): ${total}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>

      {carrito.length > 0 && (
        <>
          <h3>Completa tus datos para finalizar la compra:</h3>
          <CheckoutForm />
        </>
      )}
    </div>
  );
};

export default Cart;
