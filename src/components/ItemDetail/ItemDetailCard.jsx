import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { GlobalContext } from '../GlobalContext/GlobalContext';



const ItemDetailCard = ({ movie }) => {
    const { title, color, overview, poster_path, runtime, popularity, revenue, stock } = movie

    const imagePath = "https://image.tmdb.org/t/p/w500/"
    
    const {carrito, addToCard} = useContext(GlobalContext)

    const[state, setState] = useState(movie)

    const [cantidadComprada, setCantidadComprada] = useState(0)
    const cantidadParaAgregar = (cantidad) => {
        setCantidadComprada(cantidad)
    }
    return (
        <>


            <div className="detailCard" >

                <div className="col-12-md" >
                    <div className={`card bg-${color}`} style={{ width: "30%", margin: "40px" }}>
                        <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h6>{`duration:${runtime} sec`}</h6>
                            <h6>{`popularity:${popularity} likes`}</h6>
                            <h6>{`revenue: $${revenue}`}</h6>
                            <h6>{`stock: ${stock}`}</h6>
                            <p className="card-text">{overview}</p>



                            {cantidadComprada > 0 ? (
                                <Link to={'/cart'} onClick={() => addToCard(state)} >terminar Compra</Link>
                            ) : (

                                <ItemCount manejarClick={cantidadParaAgregar} stock={movie.stock}/>

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