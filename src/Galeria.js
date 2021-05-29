import React from 'react';
import './Galeria.css';

function Galeria() {
    return (
        <div className="galeriadiv">
            <header className="headergaleria">
                <p className="titulogaleria">Galeria</p>
            </header>
            <div className="galeriageneral">
                <div className="galeria1">
                    <p className="subtitulogaleria">Cambio climatico</p>
                    <div className="imagen1"></div>
                    <div className="imagen2"></div>
                    <div className="imagen3"></div>
                </div>
                <div className="galeria1">
                    <p className="subtitulogaleria">Reciclaje</p>
                    <div className="imagen4"></div>
                    <div className="imagen5"></div>
                    <div className="imagen6"></div>
                </div>
                <div className="galeria1">
                    <p className="subtitulogaleria">ODS</p>
                    <div className="imagen7"></div>
                    <div className="imagen8"></div>
                    <div className="imagen9"></div>
                </div>
            </div>
        </div>
    )
}

export default Galeria
