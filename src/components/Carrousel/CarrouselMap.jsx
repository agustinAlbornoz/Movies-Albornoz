import React from 'react'
import Loader from '../Loader/Loader'
import Carrousel from './Carrousel'

const CarrouselMap = ({ moviesCarrousel }) => {
    return (
        <>
            <div classID="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" >
                    {moviesCarrousel.length > 0 ? <Carrousel key={moviesCarrousel.id} moviesCarrousel={moviesCarrousel} />
                        :
                        (
                            <h1><Loader /></h1>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default CarrouselMap