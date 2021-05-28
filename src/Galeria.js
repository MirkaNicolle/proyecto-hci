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
                    <p className="subtitulogaleria">Ideas</p>
                    <div className="imagen1"></div>
                    <div className="imagen1"></div>
                    <div className="imagen1"></div>
                </div>
                <div className="galeria1">
                    <p className="subtitulogaleria">Reciclaje</p>
                    <div className="imagen1"></div>
                    <div className="imagen1"></div>
                    <div className="imagen1"></div>
                </div>
                <div className="galeria1">
                    <p className="subtitulogaleria">Áreas verdes</p>
                    <div className="imagen1"></div>
                    <div className="imagen1"></div>
                    <div className="imagen1"></div>
                </div>
            </div>
        </div>
    )
}

export default Galeria
