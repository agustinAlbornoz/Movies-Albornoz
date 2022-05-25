import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext/GlobalContext'

const Cart = () => {
  const { carrito, deleteMovie, cartDeleteAll, total } = useContext(GlobalContext)

  console.log(carrito)

  return (
    <div style={{ backgroundColor: 'black' }}>
      <>
        {carrito.length > 0 ? <h1>El total de tu compra es de total price: {total} y tenes un total de {carrito.length} productos</h1> : <h1>No hay productos</h1>}


        {carrito.length > 0 ? carrito.map((item, index) => {
          return (
            <>
              <div className="cartCard">
                <div className=" d-md-flex align-items-center gap-5">
                  <img src={item.poster_path} alt={item.title} />
                  <div className="textCart">
                    <h2>{item.title}</h2>
                    <h4>Cantidad:{item.cantidad}</h4>
                    <button className="btn btn-warning" onClick={() => deleteMovie(item.id)}>borrar pelicula</button>
                  </div>
                </div>
              </div>



            </>
          )

        },
        )

          :
          <div className="cartEmpty">

            <h1>carrito esta vacio</h1>
            <h1>Si desea comenzar compra<Link to={'/'}> Click aqui</Link> </h1>
          </div>

        }
        <button className="btn btn-danger" onClick={() => cartDeleteAll(carrito)}>Borrar lista de compra</button>

      </>

    </div>


  )

}

export default Cart