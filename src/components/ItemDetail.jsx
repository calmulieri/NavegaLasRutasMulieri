// src/components/ItemDetail.jsx
import ItemCount from "./ItemCount";
import "./ItemDetail.css"; // Estilos opcionales

const ItemDetail = ({ producto }) => {
  return (
    <div className="producto-detalle-card">
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.categoryId}</p>

      {/* Acá luego se manejará el agregado al carrito */}
      <ItemCount stock={10} initial={1} onAdd={(cantidad) => console.log("Agregar al carrito:", cantidad)} />
    </div>
  );
};

export default ItemDetail;