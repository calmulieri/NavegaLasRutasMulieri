import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Inicio from "./components/Inicio.jsx";
import Productos from "./components/Productos.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Error404 from "./components/Error.jsx";
import "./App.css";                           // Estilos generales
/*import ItemListContainer from "./components/ItemListContainer.jsx"; BORRAR AL FINAL*/
function App() {
   return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
