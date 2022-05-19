import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { GlobalContext } from '../GlobalContext/GlobalContext';



const ItemDetailCard = ({ movie }) => {
    console.log(movie)
    const { title, color, overview, poster_path, runtime, price, revenue, stock, id } = movie

    

    useEffect(() => {
        setState({ title, color, overview, poster_path, runtime, price, revenue, stock })

    }, [title])



    const { carrito, addToCard } = useContext(GlobalContext)

    const [state, setState] = useState({})

    const [cantidadComprada, setCantidadComprada] = useState(0)

    const cantidadParaAgregar = (cantidad) => {
        setCantidadComprada(cantidad)
        carrito.cantidad = cantidadParaAgregar
        console.log(carrito.cantidad)
    }
    const itemCart = {
        id: id,
        title: title,
        poster_path: poster_path,
        cantidad: cantidadComprada,
        price: price
    }
    return (
        <>
        <div className="itemDetailCard">
            <div className=" d-md-flex align-items-center gap-5" >
                    <div>
                    <img className="" src={`${poster_path}`} alt={title} />
                    </div>
                    <div>
                        <h5 className="">{title}</h5>
                        <h6>{`duration:${runtime} sec`}</h6>
                        <h6>{`price:$${price} `}</h6>
                        <h6>{`revenue: $${revenue}`}</h6>
                        <h6>{`stock: ${stock}`}</h6>
                        <p className="">{overview}</p>
                        {cantidadComprada > 0  ? (
                            <>
                            <Link to={'/cart'} onClick={() => addToCard(itemCart)} >terminar Compra</Link>
                            <Link to={'/'}>Seguir Comprando</Link>
                            </>
                        ) : (

                            <ItemCount manejarClick={cantidadParaAgregar} stock={stock-1} />

                        )

                        }
                    </div>


                    

                    </div>
                </div>



        </>
    )
}

export default ItemDetailCard