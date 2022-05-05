
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {Data} from '../Data/Data';

const ItemListContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Data)
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
        <div>
            <ItemList movies={movies} />
        </div>
        </>

    )
}

export default ItemListContainer;