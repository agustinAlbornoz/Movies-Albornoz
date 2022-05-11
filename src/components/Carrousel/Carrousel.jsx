import React from 'react'

const Carrousel = ({ moviesCarrousel }) => {

    const imagePath = "https://image.tmdb.org/t/p/w500/"
    const { backdrop_path, title } = moviesCarrousel


    return (
        <>
           

           <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-item active" style={{ width: '100%', height: '600px' }}>
                <img src={`${imagePath}${backdrop_path}`} className="d-block w-100" alt={title} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
         





        </>
    )
}

export default Carrousel