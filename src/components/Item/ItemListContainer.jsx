import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import CarrouselMap from '../Carrousel/CarrouselMap';
import { collection, getDocs, query,where } from "firebase/firestore"
import { db } from '../../service/firebase';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [movies, setMovies] = useState([])
    const {category} = useParams();



useEffect(() => {
    const itemPet = collection(db, "Movies");
    

    getDocs(itemPet)
    .then((datos) => {
        setMovies(datos.docs.map((doc) =>({
            id:doc.id, ...doc.data()})));
            console.log(movies)
        })
        return () => {
            console.log(movies)
        }
        

}, [category])


        
    //     const data = Data.map((prod) => prod)
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(data)
    //         }, 2000);
    //     })
    //     promesa.then((res) => {
    //         setMovies(res)
    //        })

    //      return () => {

    //        }
    //   }, [])

    return(
        <>
            <div className="itemListContainer">
                <CarrouselMap moviesCarrousel={movies} />
                <ItemList movies={movies} />
            </div>
        </>

    )
}

export default ItemListContainer;