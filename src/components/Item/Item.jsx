import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ movies }) => {
    const imagePath = "https://image.tmdb.org/t/p/w500/"
    const { id, title, color, overview, poster_path } = movies

    return (
        <>
        <div className="container" classId="itemCard">
            <div className="row">
                <div className="col-12-md" > 
            <div className={`card bg-${color}`} style={{ width: "20rem", margin: "30px" }}>
                <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{overview}</p>
                    <Link to={`/movies/${id}`} className="btn btn-warning">Ver mas</Link>  

                </div>
            </div>
        </div>
        </div>
        </div>
        
        </>

    )
}

export default Item