import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { GlobalContext } from '../GlobalContext/GlobalContext';



const ItemDetailCard = ({ movie }) => {
    
    const { title, overview, poster_path, price, genre, stock, id, backdrop_path, release_date } = movie


    useEffect(() => {
        setState({ title, overview, poster_path, price, genre, stock, id, backdrop_path, release_date })

    }, [title])

    const verificarCart = (carrito,itemCart) => {
        return carrito.some((a)=> a.id === itemCart.id)
    }

    const { carrito, addToCard, trailer } = useContext(GlobalContext)

    const [state, setState] = useState({})

    const [cantidadComprada, setCantidadComprada] = useState(0)

    const cantidadParaAgregar = (cantidad) => {
        setCantidadComprada(cantidad)
        carrito.cantidad = cantidadParaAgregar
    }
    const itemCart = {
        id: id,
        title: title,
        poster_path: poster_path,
        cantidad: cantidadComprada,
        price: price,
        release_date: release_date,
        backdrop_path: backdrop_path,

    }
    return (
        <>
            <div className="itemDetailCard" style={{ backgroundImage: `url(${backdrop_path})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
                <div className=" d-md-flex align-items-center gap-5" >


                    <img className="imgPath" src={`${poster_path}`} alt={title} />

                    <div className="contentDetail">
                        <div>
                            <h5>{title}</h5>
                            <h6>{`Fecha de estreno: ${release_date}`}</h6>
                            <h6>{`Precio:$${price} `}</h6>
                            <h6>{`Genero: ${genre}`}</h6>
                            <h6>{`Stock: ${stock}`}</h6>
                            <p className="">{overview}</p>
                            <button className="btn btn-warning" onClick={() => trailer(movie)}> Trailer </button>

                            {itemCart.cantidad > 0 ? (
                                <>{addToCard(itemCart)}
                                    <div className="buttonsDetailCard">
                                        <Link to={'/cart'} ><p className="btn btn-danger">Terminar Compra</p></Link>
                                        <Link to={'/'}  ><p className="btn btn-success">Seguir Comprando</p></Link>
                                        
                                    </div>

                                </>
                            ) : (

                                <div className="itemCount">
                                    <ItemCount manejarClick={cantidadParaAgregar} itemCart={itemCart} stock={stock - 1} />
                                </div>

                            )

                            }
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ItemDetailCard