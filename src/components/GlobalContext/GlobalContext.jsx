import React, { createContext, useState} from 'react'
export const GlobalContext = createContext('')

const GlobalProvider = ({children}) => {

const [carrito, setCarrito] = useState([])
const addToCard = (producto) => {

    setCarrito([carrito,producto])
}
const clear = () => setCarrito([])


return(
    <GlobalContext.Provider value= {{carrito, addToCard}}>
        {children}
    </GlobalContext.Provider>
)
}



export default GlobalProvider