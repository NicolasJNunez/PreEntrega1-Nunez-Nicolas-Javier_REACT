import carritoImg from "../../../img/carrito.png"

const CART_WIDGET = () => {
  return (
    <div className="cont-carrito-marcador">
      <img className="carrito" src={carritoImg} alt="Imagen del carrito de compras"/>
      <span className="marcador">2</span>
    </div>
  )
}

export default CART_WIDGET;