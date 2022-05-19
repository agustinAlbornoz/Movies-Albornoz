import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext/GlobalContext'

const Cart = () => {
  const { carrito, deleteMovie, cartDeleteAll,total } = useContext(GlobalContext)
  
  return (
    <><h1>El total de tu compra es de total price: {total}</h1>
      {carrito.length > 0 ? carrito.map((item, index) => {
        return (
          <>
            <div className="cartCard">
              <div className=" d-md-flex align-items-center gap-5">
              <h2>{item.title}</h2>
              <img src={item.poster_path} alt={item.title} />
              <h4>Cantidad:{item.cantidad}</h4>
              <button onClick={() => cartDeleteAll(carrito)}>X</button>
              <button onClick={() => deleteMovie(item.id)}>borrar pelicula</button>
            </div>
            </div>

            <div className="subTotal">
              <div className=" d-md-flex align-items-center gap-5">
                <h1>in cart</h1>
                <ul>
                  <li>{index + 1} {item.title} </li>
                </ul>
              </div>
            </div>

            
          </>
        )
      }
      )

        :
        <div className="cartEmpty">
        <h1>carrito esta vacio</h1>
        <h1>Si desea comenzar compra<Link to={'/'}> Click aqui</Link> </h1>
        </div>}

    </>
  )

}

export default Cart