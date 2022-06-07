import React, {useState} from 'react'

import { Link } from 'react-router-dom';

const ItemCount = ({manejarClick, stock}) => {


  const [cantidad, setCantidad] = useState(1);

  function sumar(params){
      cantidad <= stock ? setCantidad(cantidad + 1) : setCantidad(cantidad)
  }
  function restar(params){
      cantidad >= 1 ? setCantidad (cantidad - 1) : setCantidad(cantidad)
  }
  return (
    <>
    <Link to="" onClick={() => manejarClick(cantidad)}  className="btn btn-success w-35 text-light">Añadir al carrito</Link>
    <div className="d-md-flex text-center gap-5 align-items-center">
    <button className="btn btn-success mt-3"onClick={restar}>➖</button>
    <h1 className="mt-3">{cantidad}</h1>
    <button className="btn btn-success mt-3" onClick={sumar}>➕</button>
    </div>
    </>
  )
}

export default ItemCount