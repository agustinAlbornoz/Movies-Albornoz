
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Data} from '../Data/Data'
import Carrousel from './Carrousel';


const CarrouselContainer = () => {
    const [MovieCarrousel, setMovies] = useState([])
    const getMovie = async () => {

        const result = await axios.get({Data})

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
            <div className="carrouselContainer">
                <Carrousel movieCarrousel={MovieCarrousel} />
            </div>
        </>

    )
}

export default CarrouselContainer;