import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { db } from '../../service/firebase'

import { GlobalContext } from '../GlobalContext/GlobalContext'

const Cart = () => {

  const { carrito, deleteMovie, cartDeleteAll, total } = useContext(GlobalContext)



  const inicitalStateValues = {
    buyer: {
      email: "",
      name: "",
      lastName: "",
      cellphone: ""
    },
    total: total,
    items: carrito,
  };

  const [form, setForm] = useState({
    buyer: {
      email: "",
      name: "",
      lastName: "",
      cellphone: ""
    },
    total: total,
    items: carrito,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetchGenerateTicket(form);
    setForm({ ...inicitalStateValues })
    cartDeleteAll()
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      }
    })
  };


  const fetchGenerateTicket = async (form) => {

    try {
      const col = collection(db, 'ticket');
      const order = await addDoc(col, form)
      Swal.fire({
        title: "Genial!",
        text: `Su orden de compra se genero correctamente, tu codigo de compra es: ${order.id}`,
        icon: "success",
      })

      console.log(order.id)

    } catch (error) {
      console.log(error)
    }
  }






  return (
    <div className="cart" style={{ backgroundColor: 'black' }}>
      <>
        {carrito.length > 0 ? <>
          <div className="forms">
            <form onSubmit={handleSubmit} className="container border">

              <h3 className="text-uppercase text-center my-4">Datos personales</h3>

              <div className="form-group">
                <h5>Nombre</h5>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="mb-3"
                  placeholder="Nombre"
                  name="name"
                  value={form.buyer.name} />
              </div>
              <div className="form-group">
                <h5>Apellido</h5>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="mb-3"
                  placeholder="Apellido"
                  name="lastName"
                  value={form.buyer.lastName} />
              </div>
              <div className="form-group">
                <h5>Email</h5>
                <input
                  onChange={handleInputChange}
                  type="email"
                  className="mb-3"
                  placeholder="Email"
                  name="email"
                  value={form.buyer.email} />
              </div>
              <div className="form-group">
                <h5>Telefono</h5>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="mb-3"
                  placeholder="Numero de telefono"
                  name="cellphone"
                  value={form.buyer.cellphone} />
              </div>
              <div className="border row d-flex px-2">
                <div className="col-12 col-lg-9">
                  <p className="fs-4 text-uppercase">total</p>
                </div>
                <div className="col-12 col-lg-3">
                  <p className="fs-4">${total}</p>
                </div>
                <button type="submit" className="btn btn-primary text-uppercase w-100 my-4"> Terminar compra</button>
              </div>
            </form>
          </div>

        </>
          :
          <div></div>}


        <ul className="containerMoviesCart">
          {carrito.length > 0 ? carrito.map((item, index) => {
            return (

              <>

                <li className="listItem">

                  <div className="cartCard">
                    <img src={item.poster_path} alt={item.title} />

                    <h2>{item.title} (X{item.cantidad})-${item.price * item.cantidad}</h2>
                    <button className="btn btn-warning" onClick={() => deleteMovie(item.id)}>🗑</button>
                  </div>


                </li>

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
        </ul>


      </>

    </div >


  )

}

export default Cart