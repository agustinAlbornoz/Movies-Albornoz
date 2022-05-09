import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ApiMovies = () => {

    const [movies,setmovies] = useState([])
    
    const getMovies = async () =>{

        try {
            const res = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=42d2a6b85cd4c53cbb4885549949f805")
            console.log(res.data)
            
        } catch (err){
            console.log(err)
            
        }



    }
    useEffect(() => {
      getMovies()
    
      return () => {
        
      }
    }, [])

    
  return (
    <div>ApiMovies</div>
  )
}

export default ApiMovies