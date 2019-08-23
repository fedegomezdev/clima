import React , {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


function App() {

  //state principal
  const [ciudad, guardarciudad] = useState('rosario');
  const [pais, guardarPais] = useState('argentina');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});


  useEffect (() => {
    
    //prevenir la ejecucion de una, sino nos tira error porq nose cargo todavia los datos en el state
    if (ciudad === '') return;
    
    const consultarApi = async () => {

      const appId ='07ff3d9dd432176dad750394bb5cac96';
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
      //consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      guardarResultado(resultado);
      
    }
    consultarApi();

  } , [ciudad , pais ] );



const datosConsulta = datos => {
  
  //validar que ambos campos esten
  if(datos.ciudad ==='' || datos.pais === ''){
    //error
    guardarError(true);
    return;
  }
  //ciudad y pais existen, agregarlos al state  
  guardarciudad(datos.ciudad);
  guardarPais(datos.pais);
  guardarError(false);
}

  

  //cargar un componente condicionalmente
  let componente;
  if(error){  //accedemos asi al state con hooks, sin el this.state.error
    //mostrar error
    componente = <Error mensaje='Ambos campos son obligatorios'/>

  }else if (resultado.cod === '404'){
    componente = <Error mensaje='Ingrese una ciudad y pais existente'/>
  }
  
  else {
    //mostrar el clima
    componente = <Clima resultado={resultado} /> ; 

  }



  return (
   <div className='app'>
     <Header 
        titulo='Weather App'
     />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
              <Formulario
              datosConsulta = {datosConsulta} //no usamos this porque es una funcion, no clase
              />
            </div>

            <div className='col s12 m6'>
              {componente}
            </div>

          </div>
        </div>
      </div>
   </div>
  );
}

export default App;
