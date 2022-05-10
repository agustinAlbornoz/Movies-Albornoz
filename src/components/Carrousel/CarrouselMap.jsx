import React from 'react'
import Carrousel from './Carrousel'

const CarrouselMap = ({ moviesCarrousel }) => {
    return (
        <>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{ width: 'auto', height: '600px' }}>
                <div>

                    {moviesCarrousel.length > 0 ? (moviesCarrousel.slice(0, 3).map((moviesCarrousel) => (<Carrousel key={moviesCarrousel.id} moviesCarrousel={moviesCarrousel} />)
                    ))
                        :
                        (
                            <h1>Cargando...</h1>
                        )
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default CarrouselMap