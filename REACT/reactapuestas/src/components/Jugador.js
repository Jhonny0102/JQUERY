import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class Jugador extends Component {

    state = {

        informacion : [] ,

        status : false
    }

    obtenerDatos = () => {

        var id = this.props.idjugador ;

        var request = "api/Jugadores/"+id;

        var url = Global.apiApuesta + request;

        axios.get(url).then( response => {

            this.setState({

                informacion : response.data ,

                status : true
            })
        })
    }

    componentDidMount = () => {

        this.obtenerDatos();
    }

  render() {
    return (
      <div>
        <h1>Jugador: {this.props.idjugador}</h1>
        <h1>Jugador: {this.props.idjugador}</h1>
        <div>
            <div>
                Nombre: {this.state.informacion.nombre}
            </div>
            <div>
                <img src={this.state.informacion.imagen} style={{width:"150px",height:"150px"}}/>
                <p> Posicion: {this.state.informacion.posicion}</p>
                <p>Fecha Nacimiento: {this.state.informacion.fechaNacimiento}</p>
                <p>Pais: {this.state.informacion.pais}</p>
            </div>
        </div>
        <NavLink to={"/jugadores/"+this.state.informacion.idEquipo} className="btn btn-success">Jugadores</NavLink>
      </div>
    )
  }
}
