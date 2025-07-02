import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import NavBar from "./components/NavBar.jsx";
import Inicio from "./components/Inicio.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Error404 from "./components/Error.jsx";
import "./App.css";                           // Estilos generales
function App() {
   return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
