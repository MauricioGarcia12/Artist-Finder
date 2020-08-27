import Axios from 'axios';
import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'

function App() {
  //definir state
   const[busquedaletra,guardarBusquedaLetra]=useState({});
   //state para la letra
   const [letra, guardarLetra]=useState('')
   //state para la informacion del artista
   const [info,guardarInfo]=useState({})

   useEffect(() => {
     //si esta vacio el objeto retornar
     if(Object.keys(busquedaletra).length ===0) return;

     const consultarAPILetra = async ()=>{

       const {artista,cancion}=busquedaletra;
      const url=`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 =`https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      //Utilizando promise para llamar a ambas APIS con un arreglo de ambas
      const [letra,informacion]= await Promise.all([
        Axios(url),
        Axios(url2)
      ])

      //Guardando cada elemento en un state
      guardarLetra(letra.data.lyrics)
      guardarInfo(informacion.data.artists[0])    
      guardarBusquedaLetra({});

     }
     consultarAPILetra()

     
   }, [busquedaletra,info,letra])

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info
              info={info}
            />

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
