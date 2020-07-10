import React, { Component } from 'react';
import firstImage from '../Image/react.png';
import secondImage from '../Image/github.png';
import thirdImage from '../Image/bootwatch.png';
import './Information.css';
class Information extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>Prueba Numero Uno en React</h1>
                    <p>Fue utilizado Bootswatch!</p>
                </div>
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="color-header">Primer Componente</h3>
                            <p>Componente Navigator</p>
                            <div className="text-center">
                                <img src={firstImage} class="card-img" alt="Cinque Terre" /> 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="color-header">Segundo Componente</h3>
                            <p>Componente Information, es el que le da forma a todas estas columnas</p>
                            <div className="text-center">
                                <img src={secondImage} class="card-img" alt="Cinque Terre" /> 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="color-header">Tercer Componente</h3>
                            <p>footer</p>
                            <div className="text-center">
                                <img src={thirdImage} class="card-img" alt="Cinque Terre" /> 
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        );
    }
}
 
export default Information;