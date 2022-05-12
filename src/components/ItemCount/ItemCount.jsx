import React, {useState} from 'react'
import {Data} from '../Data/Data'
import { Link } from 'react-router-dom';

const ItemCount = ({manejarClick, stock}) => {


  const [cantidad, setCantidad] = useState(1);

  function sumar(params){
      cantidad <= stock ? setCantidad(cantidad + 1) : setCantidad(cantidad)
  }
  function restar(params){
      cantidad > 1 ? setCantidad (cantidad - 1) : setCantidad(cantidad)
  }
  return (
    <>
    <Link to="" onClick={() => manejarClick(cantidad)}  className="btn btn-success w-100 text-light">Añadir a la cesta</Link>
    <button onClick={restar}>restar 1</button>
    <h1> comprar {cantidad}</h1>
    <button onClick={sumar}>sumar 1</button>
    </>
  )
}

export default ItemCount