import { useParams } from 'react-router-dom';
import misproductos from './productos/misproductos';

const Producto = () => {
  const { id } = useParams();
  const producto = misproductos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
    </div>
  );
};

export default Producto;
