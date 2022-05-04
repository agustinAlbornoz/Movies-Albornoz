import React, { useState } from 'react';

const HookState = () => {

    const [contador, setContador] = useState(1);
    const [nombre, setNombre] = useState("Alejandra");

    function sumar(params){
        setContador(contador + 1)
    }
    function restar(params){
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    return(
        <div>
            <div
            style={{
                display: "flex",
                margin: "40px 0",
                width: "500px",
                justifyContent: "space-around",
                
            }}>
                <button onClick={restar}>restar 1</button>
                <h1>Contador es: {contador}</h1>
                <button onClick={sumar}>sumar 1</button>

            </div>
            <div>
                <h1>{nombre}</h1>
                <button onClick={() => setNombre("julio")}>Cambiar Nombre</button>
            </div>
        </div>
    );
};
export default HookState;