import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import "./ItemListContainer.css"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((snapshot) => {
        const productosFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosFirebase);

        // Extraer categorías únicas
        const cats = ["Todas", ...new Set(productosFirebase.map((p) => p.categoryId))];
        setCategorias(cats);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  }, []);

  const productosFiltrados =
    categoriaSeleccionada === "Todas"
      ? productos
      : productos.filter((p) => p.categoryId === categoriaSeleccionada);

  return (
    <div className="productos-container">
      <h2>Listado de productos</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          {/* Combo visible solo cuando hay categorías */}
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

          <ItemList productos={productosFiltrados} />
        </>
      )}
    </div>
  );
};
export default ItemListContainer;