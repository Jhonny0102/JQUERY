import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom'; 

export default class Eliminar extends Component {

    state = {

        status : false
    }

    eliminarCoche = () => {

        var id = this.props.idcoche;

        var request = "/api/Coches/DeleteCoche/"+id;

        var url = Global.apiCoches + request;

        axios.delete(url).then(response => {

            alert("Coche eliminado correctamente");

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
                (
                    <Navigate to={"/lista"}/>
                )
            }
            <h1>Eliminar Coche: {this.props.idcoche}</h1>
            <button onClick={this.eliminarCoche}>Eliminar</button>
      </div>
    )
  }
}
