import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ movies }) => {
    const imagePath = "https://image.tmdb.org/t/p/w500/"
    const { id, title, poster_path } = movies

    return (
        <>
            <div className="itemCard" classID="itemCard">
                <div className="row">
                    <div className="col-12-md" >
                        <div className={`card bg-white`} style={{ width: "20rem", margin: "30px" }}>
                            <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <Link to={`/movies/${id}`} className="btn btn-warning">Ver mas</Link>
                                <button>fav</button>
                                <button>add WachList</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Item