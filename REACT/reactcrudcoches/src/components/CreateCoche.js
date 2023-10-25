import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();

    state = {

        status : false
    }

    createCoche = (e) => {

        e.preventDefault();

        var id = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;

        var request = "api/Coches/InsertCoche";
        var url = Global.apiCoches + request;
        var data = {
            "idCoche": id ,
            "marca" : marca ,
            "modelo" : modelo ,
            "conductor" : conductor ,
            "imagen" : "hola"
        }

        console.log(data);

        console.log(url);

        axios.post(url,data).then( response => {

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
                ( <Navigate to="/"/> )
            }
            <h1>Crear Coche</h1>
            <form>
                <label>ID Coche</label>
                <input type='text' ref={this.cajaId} className="form-control"/>
                <label>Marca</label>
                <input type='text' ref={this.cajaMarca} className="form-control"/>
                <label>Modelo</label>
                <input type='text' ref={this.cajaModelo} className="form-control"/>
                <label>Conductor</label>
                <input type='text' ref={this.cajaConductor} className="form-control"/>
                <button onClick={this.createCoche}>Añadir</button>
            </form>   
      </div>
    )
  }
}
