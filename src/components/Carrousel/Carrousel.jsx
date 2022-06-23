import React from 'react'

const Carrousel = ({ moviesCarrousel }) => {

    const imagePath = "https://image.tmdb.org/t/p/w500/"

    const movies = moviesCarrousel.slice(0, 3)

    return (
        <>
            {(movies.map((movie, index) => (

                <div class={`carousel-item ${index === 0 && 'active'}`} key={index}>
                    <img src={`${imagePath}${movie.backdrop_path}`} className="w-100" alt={movie.title} />
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            )
            ))}

        </>
    )
}

export default Carrousel