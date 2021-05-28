import React from 'react';
import './App.css';

function App() {
  return (
    <div className="paginaprincipal">
      <header className="titulopag">
        <p className='titulopri'>Salvemos el planeta</p>
        <a href="#" className="buttoninicio">Iniciar Sesion</a>
      </header>
      <div className='contenidogeneral'>
        <div className="contenidopag">
          <div className="tierra1">
            <a href='#' className='sutitulop1'>Iniciativa</a>
          </div>
          <div className="tierra1">
            <a href='#' className='sutitulop1'>¿Como apoyar?</a>
          </div>
          <div className="tierra1">
            <a href='#' className='sutitulop1'>Galeria</a>
          </div>
        </div>
        <br/>
        <div className="contenidopag2">
          <div className="tierra1">
            <a href='#' className='sutitulop1'>Expertos</a>
          </div>
          <div className="tierra1">
            <a href='#' className='sutitulop1'>Actividades</a>
          </div>
          <div className="tierra1">
            <a href='#' className='sutitulop1'>Ayuda</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
