import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../Item/ItemList';
import {Data} from '../Data/Data'




const SearchCategory = () => {
    const {category} = useParams();
        const [Movies, setMovies] = useState([])
        
    
        useEffect(() => {
            const promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let dataFilter = Data
                    if(Data.genre_ids === category){
                        dataFilter = Data.filter((curso => curso.genre_ids === 16 )) //HACER UNO DE CADA
                    }
                    resolve(dataFilter)
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
                <ItemList movies={Movies} />
            </div>
        </>

    )
}

export default SearchCategory