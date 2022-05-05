import React from 'react'
import Item from './Item'

const ItemList = ({movies}) => {
    return (
        <div>
            {movies.lenght > 0 ? (movies.map((movie) => <Item/>)
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    )
}

export default ItemList