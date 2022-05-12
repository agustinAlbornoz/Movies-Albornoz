import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'

const Cart = () => {
  const { carrito } = useContext(GlobalContext)

  return (
    <>
        <ul>
          { carrito  > 0 ?  carrito.map((item, index) => (
            <li key={index}>{item.title}</li>

          )) : <h1>carrito esta vacio</h1>}
        </ul>
    </>
  )

}

export default Cart