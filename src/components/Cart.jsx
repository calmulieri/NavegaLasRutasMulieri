// src/components/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./Cart.css";

// Carga dinámica de imágenes desde la carpeta assets
const imagenes = import.meta.glob('../assets/*.jpg', {
  eager: true,
  import: 'default',
});

const Cart = () => {
  const { carrito, vaciarCarrito, eliminarProducto, cantidadTotal, total } = useCart();

  if (carrito.length === 0) {
    return <h2 className="carrito-vacio">🛒 El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de compras</h2>
      <ul className="cart-list">
        {carrito.map((prod) => {
          const imagenSrc = imagenes[`../assets/${prod.imageId}`];

          return (
            <li key={prod.id} className="cart-item">
              {imagenSrc && (
                <img
                  src={imagenSrc}
                  alt={prod.title}
                  className="cart-image"
                />
              )}
              <div className="cart-info">
                <h3>{prod.title}</h3>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio unitario: ${prod.price}</p>
                <p>Subtotal: ${prod.price * prod.cantidad}</p>
                <button onClick={() => eliminarProducto(prod.id)}>🗑 Eliminar</button>
              </div>
            </li>
          );
        })}
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