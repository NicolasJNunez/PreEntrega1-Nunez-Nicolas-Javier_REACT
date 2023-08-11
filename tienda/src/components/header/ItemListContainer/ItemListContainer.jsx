const ITEM_LIST_CONTAINER = (categoria) => {
  return (
    <ul>
      <li>{categoria.primerCat}</li>
      <li>{categoria.segundaCat}</li>
      <li>{categoria.terceraCat}</li>
      <li>{categoria.cuartaCat}</li>
    </ul>
  )
}

export default ITEM_LIST_CONTAINER;