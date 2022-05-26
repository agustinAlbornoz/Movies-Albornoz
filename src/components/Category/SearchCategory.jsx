import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../service/firebase';
import Item from '../Item/Item';



const SearchCategory = () => {

    const {id} = useParams();
    const [movies, setMovies] = useState([])
        const getData = async () => {
            const col = collection(db,'Movies')
            try{
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const searchMovie = result.find((Movies) => Movies.genre.toString() === id.toString()  )
            setMovies(searchMovie)
            
            console.log(id)
        }catch(err){
            console.log(err)
        }
        }
        useEffect(() => {
            getData()

        }, [id])
        
        console.log(movies)
    return (
        <>
            <div>
                <Item movies={movies} />
            </div>
        </>

    )
}

export default SearchCategory