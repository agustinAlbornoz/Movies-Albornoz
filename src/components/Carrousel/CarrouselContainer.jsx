
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Carrousel from './Carrousel';

const APIKEY = '?api_key=42d2a6b85cd4c53cbb4885549949f805';


const CarrouselContainer = () => {
    const [MovieCarrousel, setMovies] = useState([])
    const getMovie = async () => {

        const result = await axios.get('https://api.themoviedb.org/3/discover/movie' + APIKEY)

        setMovies(result.data.results)
    }
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getMovie)
            }, );
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
                <Carrousel movieCarrousel={MovieCarrousel} />
            </div>
        </>

    )
}

export default CarrouselContainer;