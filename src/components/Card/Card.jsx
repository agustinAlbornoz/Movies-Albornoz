import React from 'react'


const Card = ({ texto, color, parrafo, imagen}) => {
    return (

        <div className={`card bg-${color}`} style={{ width: "18rem" }}>
            <img className="card-img-top" src={imagen} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{texto}</h5>
                <p className="card-text">{parrafo}</p>
                <a href="#" className="btn btn-warning">Agregalo a favoritos</a>
                
            </div>
        </div>

    )
}

export default Card