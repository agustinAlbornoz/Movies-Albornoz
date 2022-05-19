import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailCard from './ItemDetailCard'
import { collection, docs, getDocs } from "firebase/firestore"
import { db } from '../../service/firebase';



const ItemDetailContainer = () => {

    const { id } = useParams();
    const [Movie, setMovie] = useState([])

    const getData = async () => {

        const col = collection(db, 'Movies')
        try {

            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const searchMovie = result.find(Movies => Movies.id === `${id}`)
            setMovie(searchMovie)

        } catch (err) {

            console.log(err)
        }
    }
    useEffect(() => {

        getData()
    }, [])

    return (
        <>
            <div className="detailContainer">
                <ItemDetailCard movie={Movie} />
            </div>
        </>
    )
}

export default ItemDetailContainer