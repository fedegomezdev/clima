import React from 'react';

function Clima ({resultado}) {

    

    //extraer los valores
    const {name, main} = resultado;

    if(!name) return null;

    //restar grados kelvin 
    const kelvin = 273.15;

    

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>Clima de {name} es:  </h2>
                <p className='temperatura'>  
                {parseInt(main.temp- kelvin , 10)}<span>&#x2103;</span> 
                </p>
                <p>Mínima: {parseInt(main.temp_min - kelvin , 10)} &#x2103; </p>
                <p>Máxima: {parseInt(main.temp_max - kelvin , 10)} &#x2103; </p> 
                <p>Humedad: {main.humidity} % </p>
            </div>
        </div>
    )
}
//el 10 es xq se le puede pasar el base 10 del decimal por parseint
export default Clima;