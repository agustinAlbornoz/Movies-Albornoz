
import React,{ useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    
    const [movies, setMovies]= useState([])
    
    const data = [
        {id:1,
        texto:'Batman',
        color:'light',
        parrafo:'Cuando Riddler, un sádico asesino en serie, comienza a asesinar a figuras políticas clave en Gotham, Batman se ve obligado a investigar la corrupción oculta de la ciudad y cuestionar la participación de su familia.',
        imagen:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo'},
        {id:2,
        texto:'Los secretos de Dumbledore',
        color:'light',
        parrafo:'La tercera parte de Animales fantásticos y donde encontrarlos, que sigue las aventuras de Newt Scamander.',
        imagen:'https://static.cinepolis.com/resources/mx/movies/posters/414x603/38972-842448-20220413121145.jpg'},
        {id:3,
        texto:'Dr Strange en el multiverso',
        color:'light',
        parrafo:'Secuela de la película de Marvel de 2016 Doctor Strange.',
        imagen:'https://sm.ign.com/ign_es/movie/d/doctor-str/doctor-strange-in-the-multiverse-of-madness_4pjr.jpg'}
    ]


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
                
            }, 2000);
        })
        promise.then((res)=> 
        {setMovies(res)
        }).catch((err)=> console.log(err)
        )
    
      return () => {

      }
    }, [])
    



    return (
        <div>
        <ItemList movies={movies}/>
        </div>
    
    )
}

export default ItemListContainer;