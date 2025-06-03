import { useParams } from 'react-router-dom';
import misproductos from './productos/misproductos';
import "./Producto.css";

const Producto = () => {
  const { id } = useParams();
  const producto = misproductos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="producto-detalle-container">
      <div className="producto-detalle-card">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>
        <button className="ver-btn">Agregar a mi carrito</button>
      </div>
    </div>
  );
};

export default Producto;
