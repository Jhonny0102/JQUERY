import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class CreateDepartamento extends Component {

    state = {

        status : false 
    }

    cajaNumero = React.createRef();

    cajaNombre = React.createRef();

    cajaLocalidad = React.createRef();



    insertarDepartamento = (e) => {

        e.preventDefault();

        var numero = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        var departamento = {
            "numero":numero ,
            "nombre":nombre ,
            "localidad":localidad
        }

        var request = "/api/Departamentos";

        var url = Global.apiDepartamento+request;

        axios.post(url,departamento).then(response => {

            this.setState({

                status: true
            })
        })
    }



  render() {

    if (this.state.status == true){

        return(<Navigate to='/'/>)
    
    }else{

        return (
            <div>
              <h1>Create Departamentos</h1>
              <form>
                  <label>ID Departamento</label>
                  <input type='number' ref={this.cajaNumero} className='form-control'/>
                  <label>Nombre</label>
                  <input type='text' ref={this.cajaNombre} className='form-control'/>
                  <label>Localidad</label>
                  <input type='text' ref={this.cajaLocalidad} className='form-control'/>
                  <button onClick={this.insertarDepartamento} className='btn btn-info' >Insertar</button>
              </form>
            </div>
        )

    }
  }
}
