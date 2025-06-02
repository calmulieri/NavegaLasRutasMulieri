import misproductos from "./productos/misproductos.js"

const Productos = () => {
  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {misproductos.map((prod) => (
          <li key={prod.id}>
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Categoría: {prod.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Productos