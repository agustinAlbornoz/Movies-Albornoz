import React, {useState} from 'react'
import {Data} from '../Data/Data'
import { Link } from 'react-router-dom';

const ItemCount = ({manejarClick, stock}) => {


  const [cantidad, setCantidad] = useState(0);

  function sumar(params){
      cantidad <= stock ? setCantidad(cantidad + 1) : setCantidad(cantidad)
  }
  function restar(params){
      cantidad >= 1 ? setCantidad (cantidad - 1) : setCantidad(cantidad)
  }
  return (
    <>
    <Link to="" onClick={() => manejarClick(cantidad)}  className="btn btn-success w-100 text-light">Añadir a la cesta</Link>
    <div className="d-md-flex text-center gap-5 align-items-center">
    <button className="btn btn-success mt-3"onClick={restar}>restar</button>
    <h1 className="mt-3"> comprar {cantidad}</h1>
    <button className="btn btn-success mt-3" onClick={sumar}>sumar</button>
    </div>
    </>
  )
}

export default ItemCount