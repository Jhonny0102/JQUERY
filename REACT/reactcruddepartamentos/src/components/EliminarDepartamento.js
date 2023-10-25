import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class EliminarDepartamento extends Component {

    state = {

        status: false
    }


    deleteDepartamento = () => {

        var request = "api/departamentos/" + this.props.iddepartamento ;

        var url = Global.apiDepartamento + request;

        //alert(url);

        axios.delete(url).then( response => {

            this.setState({

                status:true
            })
        })

    }



  render() {
    return (
      <div>
        {
            this.state.status == true && 
            (
                (<Navigate to="/"/>)
            )
        }
        <h1>Eliminar Departamento: {this.props.iddepartamento}</h1>
        <button onClick={this.deleteDepartamento}>Delete</button>
      </div>
    )
  }
}
