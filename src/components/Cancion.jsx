import React,{Fragment} from 'react';
const Cancion = ({letra}) => {
    

    return ( 
    <Fragment>
        <h2>Letra de Cancion</h2>
        <p className='letra'>
            {letra}
       </p>
    </Fragment>

    );
}

 
export default Cancion;