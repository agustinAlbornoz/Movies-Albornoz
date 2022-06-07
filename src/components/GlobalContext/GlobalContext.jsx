import Swal from 'sweetalert2'
import React, { createContext, useState, useEffect } from 'react'
export const GlobalContext = createContext('')


const GlobalProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    useEffect(() => {

        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) ?? []

        setCarrito(carritoLocalStorage)

    }, [])

    useEffect(() => {

        localStorage.setItem('carrito', JSON.stringify(carrito))

    }, [carrito])


    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.cantidad * producto.price,
            0
        )
        setTotal(calculoTotal)

    }, [carrito])
    const addToCard = (movie) => {
        if (carrito.some(movieSnipe => movieSnipe.id === movie.id)) {
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: `ya agregaste ${movie.title} a tu carrito`
            })
        } else {
            setCarrito([...carrito, movie])
        }
    }
    const trailer = (movie) => {
        Swal.fire({
            title: `${movie.title}`,
            html:
                `<iframe width="1280" height="720" src=${movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            showCloseButton: true,
            confirmButtonText: 'Cerrar',
            width: '80%',
            showCancelButton: false,
            focusConfirm: false,
        })
    }


    const deleteMovie = (id) => {
        const movieDelete = carrito.filter(movie => movie.id !== id)
        setCarrito(movieDelete)
    }

    const cartDeleteAll = () => {
        setCarrito([])

    }




    return (
        <GlobalContext.Provider value={{ total, carrito, addToCard, deleteMovie, cartDeleteAll, trailer }}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalProvider