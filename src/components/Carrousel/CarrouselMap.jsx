import React from 'react'
import Carrousel from './Carrousel'

const CarrouselMap = ({ moviesCarrousel }) => {
    return (
        <>
           
            <div className="carousel-inner" style={{ width: 'auto', height: '600px' }}>
                <div>

                    {moviesCarrousel.length > 0 ? (moviesCarrousel.slice(0,3).map((moviesCarrousel) => (<Carrousel key={moviesCarrousel.id} moviesCarrousel={moviesCarrousel} />)
                    ))
                        :
                        (
                            <h1>Cargando...</h1>
                        )
                    }
                </div>
               
            </div>
        </>
    )
}

export default CarrouselMap