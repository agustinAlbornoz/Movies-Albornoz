import React from 'react'
import Item from './Item'

const ItemList = ({ movies }) => {
    return (
        <>
            <div>
            {movies.length > 0 ? (movies.map((movies) => (<Item key={movies.id} movies={movies}/>)
                    ))
                    :
                    (
                        <h1>Cargando...</h1>
                    )
                }
            </div>
        </>
    )
};

export default ItemList