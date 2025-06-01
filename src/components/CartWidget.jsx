import widlogo from '../assets/widlogo.png'; //Logo carrito
function CartWidget() {
  return (
    <div className="cartwidget">
      <img className="cartwidlog" src={widlogo} alt="Carrito de compras"/> 
      <span className="cartcount">3</span>                 
    </div>
  )
}

export default CartWidget