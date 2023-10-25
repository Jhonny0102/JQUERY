import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class UpdateDepartamento extends Component {

    state = {

        departamento : [] ,

        statusGet : false ,

        statusPut : false
    }

    cajaNumero = React.createRef();

    cajaNombre = React.createRef();

    cajaLocalidad = React.createRef();
    
    findDepartamento = () => {

        var request = "api/departamentos/" + this.props.iddepartamento;

        var url = Global.apiDepartamento + request ;

        axios.get(url).then( response => {

            this.setState ({

                departamento : response.data ,

                statusGet : true
            })
        })

    }

    componentDidMount = () => {

        this.findDepartamento();
    }

    updateDepartamento = (e) => {

        e.preventDefault();

        //Metodo put puede tener dos parametros
        //1. URL de acceso al servicio.
        //2. Los datos a enviar a dicho servicio.
        var id = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        var data = {
            numero: id ,
            nombre: nombre ,
            localidad : localidad
        }

        var request = "api/departamentos";
        var url = Global.apiDepartamento + request;

        axios.put(url,data).then(response => {

            this.setState({

                statusPut : true
            })
        })


    }



  render() {
    return (
      <div>
        {
            this.state.statusPut == true &&
            ( <Navigate to="/"/> )
        }
        <NavLink to="/">Volver</NavLink>
        <h1>Update Departamento: {this.props.iddepartamento}</h1>
        {
            this.state.statusGet == true &&
            (
                <form>
                    <input type='hidden' ref={this.cajaNumero}  defaultValue={this.state.departamento.numero}/>
                    <label>Nombre</label>
                    <input type='text' ref={this.cajaNombre} className='form-control' defaultValue={this.state.departamento.nombre}/>
                    <label>Localidad</label>
                    <input type='text' ref={this.cajaLocalidad} className='form-control' defaultValue={this.state.departamento.localidad}/>
                    <button onClick={this.updateDepartamento}>Update</button>
                </form>
            )
        }
      </div>
    )
  }
}
