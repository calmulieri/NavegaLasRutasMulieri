import { useState } from "react";
import misproductos from "./productos/misproductos.js";
import { Link } from "react-router-dom";
import "./Productos.css";

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  // Genero array con todas las categorias y agrego la opcion Todas
  const categorias = ["Todas", ...new Set(misproductos.map((prod) => prod.categoria))];

  // Averiguo categoria y Filtro productos según categoría seleccionada 
  let productosFiltrados;
  if (categoriaSeleccionada === "Todas") {
    productosFiltrados = misproductos;
  } else {
    productosFiltrados = misproductos.filter(
      (prod) => prod.categoria === categoriaSeleccionada
    );
  }

  return (
    <div className="productos-container">
      <h2>Listado de productos</h2>

      {/* Filtro por categoría */}
      <div className="filtro-categoria">
        <label htmlFor="categoria-select">Filtrar por categoría: </label>
        <select
          id="categoria-select"
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grilla de productos */}
      <div className="productos-grid">
        {productosFiltrados.map((prod) => (
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
  );
};

export default Productos;
