import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Apuesta extends Component {

    /// Zona State ///
    state = {

        apuestas : [],

        status : false
    }



    //Zona de Metodos ///
    loadApuestas = () => {

        var request = "api/apuestas";

        var url = Global.apiApuesta + request;

        axios.get(url).then( response => {

            this.setState({

                apuestas : response.data ,

                status : true
            })
        })

    }

    componentDidMount = () => {

        this.loadApuestas();
    }




  render() {
    return (
      <div>
            <h1>Pagina Apuesta</h1>
            <h1>Pagina Apuesta</h1>
            <NavLink to={"/realizarapuesta"} className="btn btn-success">Realizar Apuesta</NavLink>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Resultado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status == true && 
                        (
                            this.state.apuestas.map( (apuesta,index) => {

                                return(
                                    <tr key={index}>
                                        <td>{apuesta.usuario}</td>
                                        <td>{apuesta.resultado}</td>
                                        <td>{apuesta.fecha}</td>
                                    </tr>
                                )
                            } )
                        )
                    }
                </tbody>
            </table>
      </div>
    )
  }
}
