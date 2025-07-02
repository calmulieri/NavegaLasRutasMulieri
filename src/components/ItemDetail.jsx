import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext"; //Importao hook
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { agregarProducto } = useCart(); //Uso función del context

  const handleAdd = (cantidad) => {
    agregarProducto(producto, cantidad); //Agrega al carrito
    setAgregado(true);
  };

  return (
    <div className="producto-detalle-container">
      <div className="producto-detalle-card">
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <p>Categoría: {producto.categoryId}</p>

        {!agregado ? (
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        ) : (
          <p style={{ marginTop: "1rem" }}>✅ Producto agregado al carrito</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;