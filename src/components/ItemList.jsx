// src/components/ItemList.jsx
import Item from "./Item";
import "./ItemList.css"; // Si querés aplicar estilos específicos

const ItemList = ({ productos }) => {
  return (
    <div className="productos-grid">
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemList;