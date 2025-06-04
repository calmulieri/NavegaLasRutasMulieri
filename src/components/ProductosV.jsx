import misproductos from "./productos/misproductos.js" //Lista de productos
import { Link, Outlet } from "react-router-dom";
import "./Productos.css"; // Estilos para productos
//Armo las product card 
const Productos = () => {
  return (
    <div className="productos-container">
      <h2>Listado de productos</h2>
      <div className="productos-grid">
        {misproductos.map((prod) => (
          <div className="producto-card" key={prod.id}>
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Categoría: {prod.categoria}</p>
            <Link to={`/producto/${prod.id}`}>
              <button className="ver-btn">Ver</button>
            </Link>
          </div>
        ))}
      </div>
    </div>



  )
}

export default Productos