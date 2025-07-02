import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controles">
        <button onClick={disminuir}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)} className="agregar-btn">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;