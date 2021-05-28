
import React, {Component}from 'react';
import reciclar1 from "./resorces/reciclar1.jpg";
import reciclar from "./resorces/reciclar.png"
import macetas2 from "./resorces/macetas2.png"
import macetas3 from "./resorces/macetas3.png"
import arbol1 from "./resorces/arbol1.jpg"
import huerto from "./resorces/huerto.png"
import huerto4 from "./resorces/huerto4.png"
import './Actividades.css';

class Actividades extends Component{
    constructor(props){
        super(props)

        this.state = {
            scrolled: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50
            if (isTop !== true){
                this.setState({ scrolled: false });
            }
            else {
                this.setState({ scrolled: true });
            }
        })
    }
    componentWillMount() {
        window.removeEventListener('scroll', ()=>{});
    }

    render(){
        return (
            
            <div className= 'header-text'>
                ACTIVIDADES
            <div className='titulo'>
                Macetas utilizando botellas plásticas
                <div className='titulo2'>
                    Sembrar árboles
                </div>
                <div className='titulo3'>
                    Elaboración de huertos
                </div>

            </div>
                
            <div className= 'macetas'>
                <img src={reciclar1} width='300px' height='150px'/>

                <div className= 'reciclar'>
                    <img src={reciclar} width='300px' height='200px'/>
                </div>
                <div className= 'macetas2'>
                    <img src={macetas2} width='300px' height='200px'/>
                </div>
                <div className= 'macetas3'>
                    <img src={macetas3} width='300px' height='200px'/>
                </div>

            <div className='huertos'>
            <div className='arbol1'>
                <img src={arbol1} width='400px' height='250px'/>
            
                <div className='huerto2'>
                    <img src={huerto} width='400px' height='250px'/>
                </div>
                <div className='huerto4'>
                    <img src={huerto4} width='400px' height='250px'/>
                </div>
            
            </div>  
            </div>
            </div>   
             </div>

        
        
        )

    }
}       


export default Actividades;
