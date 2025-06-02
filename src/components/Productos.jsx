import misproductos from "./productos/misproductos.js"
import { Link, Outlet } from 'react-router-dom';

const Productos = () => {
  return (
    <div>
      <h2>Listado de productos</h2>
      <ul>
        {misproductos.map((prod) => (
          <li key={prod.id}>
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Categoría: {prod.categoria}</p>
            <Link to={`/producto/${prod.id}`}><button>Ver</button></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Productos