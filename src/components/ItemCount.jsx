// src/components/ItemCount.jsx
import { useState } from "react";
import "./ItemCount.css"; // Estilos opcionales

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [agregado, setAgregado] = useState(false);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const agregarAlCarrito = () => {
    onAdd(cantidad);
    setAgregado(true);
  };

  return (
    <div className="item-count">
      {agregado ? (
        <p>Producto agregado al carrito ✔</p>
      ) : (
        <>
          <div className="contador">
            <button onClick={disminuir}>-</button>
            <span>{cantidad}</span>
            <button onClick={aumentar}>+</button>
          </div>
          <button onClick={agregarAlCarrito} className="agregar-btn">
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
};

export default ItemCount;