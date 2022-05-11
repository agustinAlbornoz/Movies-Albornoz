import React, { useState } from 'react'

export const GlobalContext = createContext('')


const GlobalStateContext = ({children}) => {
    // este componente es el responsable de proveer info y almacenar info
    const [carrito, setCarrito] = useState([])

  return (
    <GlobalContext.Provider value={{carrito,setCarrito}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext