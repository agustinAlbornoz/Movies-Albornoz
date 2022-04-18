import React from 'react'

const Prueba = () => {

function imprimirCorrecto(){
    return ' correcto '
}

function imprimirIncorrecto(){
    return ' incorrecto '
}
const condition = true;

let resultado = condition ? imprimirCorrecto() : imprimirIncorrecto();
console.log(`la respuesta es : ${resultado}`)





    return (
        <div>prueba</div>
    )
}

export default Prueba