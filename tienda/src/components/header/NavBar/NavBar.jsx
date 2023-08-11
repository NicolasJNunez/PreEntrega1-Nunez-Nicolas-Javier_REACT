import logoImg from "../../../img/logo.png"
import ITEM_LIST_CONTAINER from "../ItemListContainer/ItemListContainer"
import CART_WIDGET from "../CartWidget/CartWidget"

const NAVBAR = () => {
  return (
    <header>
      <div className="cont-logo">
        <img className="logo" src={logoImg} alt="Logo de tienda de zapatillas KickStar"/>
      </div>

      <nav className="cont-itemList">
        <ITEM_LIST_CONTAINER
        primerCat="Urbanas"
        segundaCat="Deportivas"
        terceraCat="Panchas"
        cuartaCat="Accesorios"/>
      </nav>

      <div className="cont-carrito">
        <CART_WIDGET/>
      </div>
    </header>
  )
}

export default NAVBAR;