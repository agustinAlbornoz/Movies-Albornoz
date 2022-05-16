import Swal from 'sweetalert2'
import React, { createContext, useState, useEffect} from 'react'
export const GlobalContext = createContext('')


const GlobalProvider = ({children}) => {

const [carrito, setCarrito] = useState([])

useEffect(() => {

    const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) ?? []

    setCarrito(carritoLocalStorage)

}, [])

useEffect(() => {

    localStorage.setItem('carrito',JSON.stringify(carrito))

}, [carrito])



console.log(carrito)
const addToCard = (movie) => {
    if(carrito.some(movieSnipe => movieSnipe.id === movie.id)){
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: `ya agregaste ${movie.title} a tu carrito`})
    } else{
    
    setCarrito([...carrito,movie])
}
}

const deleteMovie = (id) => {
    const movieDelete = carrito.filter ( movie => movie.id !== id)
    setCantidadComprada(0)
    setCarrito(movieDelete)
}

const cartDeleteAll = () =>{
    setCarrito([])
    setCantidadComprada(0)
}

const [cantidadComprada, setCantidadComprada] = useState(0)

return(
    <GlobalContext.Provider value= {{carrito, cantidadComprada, setCantidadComprada, addToCard, deleteMovie, cartDeleteAll}}>
        {children}
    </GlobalContext.Provider>
)
}



export default GlobalProvider