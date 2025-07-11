import "./Inicio.css";
import imagenInicio from "../assets/inicio.jpg"; // Ajustá el nombre si cambia

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>Bienvenidos a la tienda de Carliña</h1>
      <img src={imagenInicio} alt="Ofertas de ropa" className="inicio-imagen" />
    </div>
  );
};

export default Inicio;