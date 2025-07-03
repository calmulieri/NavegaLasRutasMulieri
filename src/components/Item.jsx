
// src/components/Item.jsx
import { Link } from "react-router-dom";
import "./Item.css"; // CSS se aplicará más adelante

// Importa todas las imágenes de forma dinámica
const imagenes = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' });

const Item = ({ producto }) => {
  const imagenSrc = imagenes[`../assets/${producto.imageId}`];

  return (
    <div className="producto-card">
      {imagenSrc && (
        <img
          src={imagenSrc}
          alt={producto.title}
          className="producto-imagen"
        />
      )}
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