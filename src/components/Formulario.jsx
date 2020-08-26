import React from 'react';
const Formulario = () => {
    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
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