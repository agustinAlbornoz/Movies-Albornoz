import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import CarrouselMap from '../Carrousel/CarrouselMap';
import { Data } from '../Data/Data'



const ItemListContainer = () => {
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        const data = Data.map((prod) => prod)
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
        promesa.then((res) => {
            setMovies(res)
        })

        return () => {

        }
    }, [])
    
    return (
        <>
            <div className="itemListContainer">
                <CarrouselMap moviesCarrousel={Movies} />
                <ItemList movies={Movies} />
            </div>
        </>

    )
}

export default ItemListContainer;