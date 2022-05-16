import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { GlobalContext } from '../GlobalContext/GlobalContext';



const ItemDetailCard = ({ movie }) => {
    const { title, color, overview, poster_path, runtime, popularity, revenue, stock, id } = movie

    const imagePath = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        setState({ title, color, overview, poster_path, runtime, popularity, revenue, stock })

    }, [title])



    const { carrito, addToCard, cantidadComprada, setCantidadComprada } = useContext(GlobalContext)

    const [state, setState] = useState({})



    const cantidadParaAgregar = (cantidad) => {
        setCantidadComprada(cantidad)
        carrito.cantidad = cantidadParaAgregar
        console.log(carrito.cantidad)
    }
    const itemCart = {
        id: id,
        title: title,
        poster_path: poster_path,
        cantidad: cantidadComprada
    }
    return (
        <>

            <div className=" d-md-flex align-items-center gap-5" >
                    <div>
                    <img className="" src={`${imagePath}${poster_path}`} alt={title} />
                    </div>
                    <div>
                        <h5 className="">{title}</h5>
                        <h6>{`duration:${runtime} sec`}</h6>
                        <h6>{`popularity:${popularity} likes`}</h6>
                        <h6>{`revenue: $${revenue}`}</h6>
                        <h6>{`stock: ${stock}`}</h6>
                        <p className="">{overview}</p>
                        {cantidadComprada > 0  ? (
                            <Link to={'/cart'} onClick={() => addToCard(itemCart)} >terminar Compra</Link>
                        ) : (

                            <ItemCount manejarClick={cantidadParaAgregar} stock={movie.stock} />

                        )

                        }
                    </div>


                    

                   
                </div>



        </>
    )
}

export default ItemDetailCard