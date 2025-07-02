// src/components/Item.jsx
import { Link } from "react-router-dom";
import "./Item.css"; // Podés crear este archivo después si querés estilos

const Item = ({ producto }) => {
  return (
    <div className="producto-card">
      <h3>{producto.title}</h3>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.categoryId}</p>
      <Link to={`/producto/${producto.id}`}>
        <button className="ver-btn">Ver</button>
      </Link>
    </div>
  );
};

export default Item;