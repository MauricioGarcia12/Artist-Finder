import Axios from 'axios';
import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
function App() {
  //definir state
   const[busquedaletra,guardarBusquedaLetra]=useState({});
   //state para la letra
   const [letra, guardarLetra]=useState('')

   useEffect(() => {
     //si esta vacio el objeto retornar
     if(Object.keys(busquedaletra).length ===0) return;

     const consultarAPILetra = async ()=>{
       const {artista,cancion}=busquedaletra;

      const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await Axios(url);

      //guardando la letra en su state
      guardarLetra(resultado.data.lyrics)

     }
     consultarAPILetra()

     
   }, [busquedaletra])

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>

          </div>
          <div className='col-md-6'>
            <Cancion
            letra={letra}
            />
            
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
