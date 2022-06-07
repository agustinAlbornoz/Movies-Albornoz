import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ movies }) => {
    const imagePath = "https://image.tmdb.org/t/p/w500/"
    const { id, title, poster_path } = movies
    console.log(movies)
    return (
        <>
            <div className="itemCard" classID="itemCard" >
                <div className="row">
                    <div className="col-12-md" >
                        <div className={`card bg-black`} >
                            <img className="card-img-top" src={`${poster_path}`} alt={title} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <div className="verMas">
                                    <Link to={`/movies/${id}`} className="btn btn-warning">Ver mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Item