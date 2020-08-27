import React, {useState} from 'react';
const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda]=useState({
        artista:'',
        cancion:''
    })

    const [error,guardarError]=useState(false)
    const {artista,cancion}= busqueda;

    //actualizando state con los datos del form
    const actualizarState = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value

        })
    }

    //consultar las apis on submit
    const buscarInformacion = e =>{
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        
        //pasar al componente principal pasamos la busqueda
        guardarBusquedaLetra(busqueda);
    }


    return ( 
        <div className="bg-info">
            <div className="container">
            {error ? <p className='alert alert-danger text-center p-2'>Todos los cambios son obligatorios</p> : null}
                <div className="row">
                    <form 
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className='text-center'>Buscador Letras y Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                        type="text"
                                        className='form-control'
                                        name='artista'
                                        placeholder='Nombre del artista'
                                        value={artista}
                                        onChange={actualizarState}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Cancion</label>
                                        <input 
                                        type="text"
                                        className='form-control'
                                        name='cancion'
                                        placeholder='Nombre de la cancion'
                                        value={cancion}
                                        onChange={actualizarState}

                                        />
                                    </div>

                                </div>
                            </div>
                            <button className='btn btn-primary float-right w-50 mt-3' type='submit'>Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;