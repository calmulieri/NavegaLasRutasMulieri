
import { Link } from "react-router-dom";
import "./Item.css";

const imagenes = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' });
const Item = ({ id, title, description, price, categoryId, imageId }) => {
const imagenSrc = imagenes[`../assets/${imageId}`];


  return (
    <div className="producto-card">
      <img
        src={imagenSrc}
        alt={title}
        className="producto-imagen"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <p>Categoría: {categoryId}</p>
      <Link to={`/producto/${id}`}>
        <button className="ver-btn">Ver</button>
      </Link>
    </div>
  );
};

export default Item;