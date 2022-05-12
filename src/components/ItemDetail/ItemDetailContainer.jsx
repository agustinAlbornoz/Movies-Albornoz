import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailCard from './ItemDetailCard'
import {Data} from '../Data/Data'


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [Movie, setMovie] = useState([])
    const filter = Data.find((prod) => prod.id === Number(id))


    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filter)
            }, 2000);
        })
        promesa.then((res) => {
            setMovie(res)
        })

        return () => {

        }
    }, [])


    return (
        <>
            <div>
                <ItemDetailCard movie={Movie}/>
            </div>
        </>
    )
}

export default ItemDetailContainer