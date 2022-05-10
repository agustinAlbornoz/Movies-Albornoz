import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ItemDetailCard from './ItemDetailCard'


const ItemDetailContainer = () => {

    const params = useParams();
    const [Movie, setMovie] = useState([])


    const getMovie = async () => {

        const movieDetail = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=42d2a6b85cd4c53cbb4885549949f805&language=en-US`)

        setMovie(movieDetail.data)
    }
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getMovie)
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