import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../service/firebase';
import ItemList from '../Item/ItemList';





const SearchCategory = () => {
    const {id} = useParams();
        const [Movies, setMovies] = useState([])
        console.log(id)
        const getData = async () => {
            const col = collection(db,'Movies')
            try{
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
            const searchMovie = result.find(Movies => Movies.genre == `${id}` )
            setMovies(searchMovie)
        }catch(err){
            console.log(err)
        }
        }
        useEffect(() => {
            getData()
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