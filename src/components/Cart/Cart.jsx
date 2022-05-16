import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'

const Cart = () => {
  const { carrito, deleteMovie, cartDeleteAll } = useContext(GlobalContext)
  console.log(carrito)
  return (
    <>
        
          { carrito.length  > 0 ?  carrito.map((item, index) => { 
          return(
            <div>
            <h2>{item.title}</h2>
              <img src={item.poster_path} alt={item.title} />
              <h4>Cantidad:{item.cantidad}</h4>
              <button onClick={() => cartDeleteAll(carrito)}>X</button>
              <button onClick={() => deleteMovie(item.id)}>borrar pelicula</button>
              </div>
              
              
              
              
              
              
              
              )}) 
              
              
              
              
              
              
              
              : <h1>carrito esta vacio</h1>}
        
    </>
  )

}

export default Cart