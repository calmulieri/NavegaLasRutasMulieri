
import { Link, Outlet } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import "./NavBar.css";


function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <img className="milogo" src={logo} alt="Logo de la empresa" />
      </div>
      <ul className="navlist">
        <li className="navitem">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navitem">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="navitem">
          <Link to="/nosotros">Nosotros</Link>
        </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  )
}
export default NavBar