import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Jugadores extends Component {

    state = {

        jugadores : {} ,

        status : false
    }

    cargarJugadores = () => {

        var id = this.props.idequipo;

        var request = "api/Jugadores/JugadoresEquipos/" + id;

        var url = Global.apiApuesta + request;

        axios.get(url).then( response => {

            this.setState({

                jugadores : response.data,

                status : true
            })
        }) 
    }

    componentDidMount = () => {

        this.cargarJugadores();
    }


  render() {
    return (
      <div>
        <h1>Jugadores</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID Jugador</th>
                    <th>Nombre</th>
                    <th>Posicion</th>
                    <th>Imagen</th>
                    <th>Pais</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true && 
                    (
                        this.state.jugadores.map( (jugador,index) => {

                            return(
                                <tr key={index}>
                                    <td>{jugador.idJugador}</td>
                                    <td>{jugador.nombre}</td>
                                    <td>{jugador.posicion}</td>
                                    <td><img src={jugador.imagen} style={{width:"150px",height:"150px"}}/></td>
                                    <td>{jugador.pais}</td>
                                    <td>
                                        <NavLink to={"/jugador/"+jugador.idJugador} className="btn btn-success">Detalles</NavLink>
                                        <NavLink to={"/detalle/"+this.props.idequipo} className="btn btn-secondary">Atras</NavLink>
                                        <NavLink to={"/"} className="btn btn-secondary">Principal</NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
