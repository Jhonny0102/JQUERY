import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom'

export default class Detalles extends Component {

    state = {

        equipo : {} ,

        status : false
    }

    cargaInformacion = () => {

        var id = this.props.idequipo;

        var request = "api/equipos/"+id;

        var url = Global.apiApuesta + request;

        axios.get(url).then( response => {

            this.setState({

                equipo : response.data ,

                status : true
            })
        })
    }

    componentDidMount = () => {

        this.cargaInformacion();
    }

    componentDidUpdate = (oldProps) => {

        if (this.props.idequipo != oldProps.idequipo){ 

            this.cargaInformacion(); 
            
        }
    }



    render() {
        return (
        <div>
            <h1>Detalles: {this.props.idequipo}</h1>
            <div className="d-flex justify-content-center">
                {this.state.equipo.nombre}
            </div>
            <div className="d-flex justify-content-center">
                <img src={this.state.equipo.imagen} style={{width:"250px",height:"250px"}}/>
            </div>
            <div className="d-flex justify-content-center">
                Champions : {this.state.equipo.champions}
            </div>
            <div className="d-flex justify-content-center">
                {this.state.equipo.descripcion}
            </div>
            <div className="d-flex justify-content-center">
                <NavLink to={"/jugadores/"+this.props.idequipo} className="btn btn-success">Jugadores</NavLink>
                <NavLink to={"/"} className="btn btn-info">Volver</NavLink>
            </div>
        </div>
        )
    }
}
