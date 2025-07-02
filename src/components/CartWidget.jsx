import widlogo from "../assets/widlogo.png";
import { useCart } from "../context/CartContext"; // Importar hook

function CartWidget() {
  const { cantidadTotal } = useCart(); //Obtengo total desde el context

  return (
    <div className="cartwidget">
      <img className="cartwidlog" src={widlogo} alt="Carrito de compras" />
      {cantidadTotal > 0 && (
        <span className="cartcount">{cantidadTotal}</span> //Muestro solo si hay algo
      )}
    </div>
  );
}

export default CartWidget;