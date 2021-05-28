
import React, {Component}from 'react';
import experto from './experto.jpg'
import experto2 from './experto2.jpg'
import experto3 from './experto3.jpg'
import experto4 from './experto4.jpg'


class Expertos extends Component{
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
            
            <div className= 'expertos'>
                
                <div className= 'header-text'>
                    EXPERTOS

                    <div className= 'ex1'>
                        <img src={experto} width='500px' height='500px'/>
                    </div>
                    
                    
                    <div className= 'ex2'>
                        <img src={experto2} width='500px' height='500px'/>
                    </div>

                   
                    <div className= 'ex3'>
                        <img src={experto3} width='500px' height='500px'/>
                        
                    </div>
                    <div className= 'wwf'>
                    World Wildlife Fund
                    </div>

                    <div className= 'ex4'>
                        <img src={experto4} width='500px' height='500px'/>
                    </div>

            
                </div>
            </div> 

        
        
        )

    }
}       


export default Expertos
