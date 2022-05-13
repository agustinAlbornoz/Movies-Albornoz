
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Data} from '../Data/Data'
import Carrousel from './Carrousel';


const CarrouselContainer = ({movieCarrousel}) => {
    const [MovieCarrousel, setMovies] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Data)
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