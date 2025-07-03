// src/components/ItemDetail.jsx
import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "./ItemDetail.css";

// Importa dinámicamente todas las imágenes desde assets
const imagenes = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' });

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { agregarProducto } = useCart();

  const handleAdd = (cantidad) => {
    agregarProducto(producto, cantidad);
    setAgregado(true);
  };

  const imagenSrc = imagenes[`../assets/${producto.imageId}`];

  return (
    <div className="producto-detalle-container">
      <div className="producto-detalle-card">
        {imagenSrc && (
          <img
            src={imagenSrc}
            alt={producto.title}
            className="producto-detalle-imagen"
          />
        )}
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