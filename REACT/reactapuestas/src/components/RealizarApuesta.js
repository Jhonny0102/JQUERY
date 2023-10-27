import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate , NavLink } from 'react-router-dom'; 

export default class RealizarApuesta extends Component {

    /// Referencias a las cajas ////

    cajaID = React.createRef();

    cajaUsuario = React.createRef();
    
    cajaResultado = React.createRef();

    cajaFecha = React.createRef();



    /// Zon state ///
    state = {

        status : false
    }



    /// Zona de Metodos ///
    crearApuesta = (e) => {

        e.preventDefault();

        var id = parseInt(this.cajaID.current.value);

        var usuario = this.cajaUsuario.current.value;

        var resultado = this.cajaResultado.current.value;

        var fecha = this.cajaFecha.current.value;

        var data = {

            "idApuesta" : id,
            "usuario": usuario,
            "resultado": resultado,
            "fecha": fecha
        }

        var request = "api/apuestas";

        var url = Global.apiApuesta + request ;

        axios.post(url,data).then( response => {

            alert("Apuesta Creada");

            this.setState({

                status : true
            })
        })
    }




  render() {
    return (
      <div>
            {
                this.state.status == true && 
                (<Navigate to="/apuesta"/>)
            }
            <h1>Crear Apuesta</h1>
            <h1>Crear Apuesta</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">ID Apuesta</label>
                    <input type="number" className="form-control" aria-describedby="emailHelp" ref={this.cajaID}/>
                    <div id="emailHelp" className="form-text">Introduce el ID apuesta</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" ref={this.cajaUsuario}/>
                    <div id="emailHelp" className="form-text">Introduce el usuario</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Resultado</label>
                    <input type="text" className="form-control" ref={this.cajaResultado}/>
                    <div id="emailHelp" className="form-text">Introduce el resultado</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input type="text" className="form-control" ref={this.cajaFecha}/>
                    <div id="emailHelp" className="form-text">Introduce fecha de la apuesta</div>
                </div>
                <button type="submit" className="btn btn-warning" onClick={this.crearApuesta}>Apostar</button>
                <NavLink to={"/apuesta"} className="btn btn-info">Volver Apuestas</NavLink>
            </form>
      </div>
    )
  }
}
