import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Detalles extends Component {

    state = {

        informacion : [] ,

        status : false
    }

    loadEquipo = () => {

        var id = this.props.idequipo;

        var request = "api/equipos/"+id;

        var url = Global.apiApuestas + request;

        axios.get(url).then( response => {

            this.setState({

                informacion : response.data ,

                status : true
            })
        })
    }

    componentDidMount = () => {

        this.loadEquipo();
    }


  render() {
    return (
      <div>
        <h1>Detalles del equipo : {this.props.idequipo}</h1>
        <h1>Detalles del equipo : {this.props.idequipo}</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>{this.state.informacion.nombre}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={this.state.informacion.imagen} className="rounded mx-auto d-block" style={{width:"150px"}} />
                        
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
