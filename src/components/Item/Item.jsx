import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ movies }) => {

    const { id, texto, color, parrafo, imagen } = movies

    return (
        <>
        <div className="d-flex col-md-4 justify-content-center">
            <div className={`card bg-${color}`} style={{ width: "18rem", margin: "30px" }}>
                <img className="card-img-top" src={imagen} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{texto}</h5>
                    <p className="card-text">{parrafo}</p>
                    <Link to={`/`} className="btn btn-warning">Agregalo a favoritos</Link>
                </div>
            </div>
        </div>
        </>

    )
}

export default Item