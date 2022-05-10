import React from 'react'

const Carrousel = ({ moviesCarrousel }) => {

    const imagePath = "https://image.tmdb.org/t/p/w500/"
    const { backdrop_path, title } = moviesCarrousel
    console.log(moviesCarrousel)

    return (
        <>



            <div className="carousel-item active" style={{ width: '100%', height: '600px' }}>
                <img src={`${imagePath}${backdrop_path}`} className="d-block w-100" alt={title} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                </div>
            </div>





        </>
    )
}

export default Carrousel