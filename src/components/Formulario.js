import React, {useState} from 'react';


function Formulario({datosConsulta}){


    //state del componente
    //busqueda = state        guardarBusqueeda=this.setState
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        //Cambiar el state
        guardarBusqueda({
            ...busqueda, //hacemos copia del state para que no se pierdan los otros
            [e.target.name] : e.target.value
        })

        
    }

    const consultarClima = e => {
        e.preventDefault();

        //pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda);
    }

    return (
        <form
            onSubmit={consultarClima}
        >
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad : </label>
            </div>

            <div className='input-field col s12'>
                <select
                    onChange={handleChange}
                    name='pais'
                >
                    <option value=''>Selecciona un pais </option> 
                    <option value='AR'>Argentina</option>
                    <option value='ES'>España</option>
                    <option value='US'>Estados Unidos</option>
                    <option value='MX'>Mexico</option>
                    <option value='CO'>Colombia</option>
                    <option value='PE'>Peru</option>
                    <option value='CR'>Costa Rica</option>

                </select>
            </div>

            <div className='input-field col s12'>
                <input type='submit' className='waves-effect waves-light btn-large btn-block yellow accent-4'
                value='Obtener Clima' />

            </div>
        </form>
    )
}

export default Formulario;