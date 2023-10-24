import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {

    state = {

        mensaje : "" ,

        status : false
    }

    cajaId = React.createRef();

    cajaNombre = React.createRef();
    
    cajaDireccion = React.createRef();

    cajaTelefono = React.createRef();

    cajaCamas = React.createRef();

    insertarHospitales = (e) => {

        e.preventDefault();

        var request = "/webresources/hospitales/post";

        var url = Global.urlApiHospitales+request;

        var idhospital = parseInt(this.cajaId.current.value);

        var nombre = this.cajaNombre.current.value;

        var dirr = this.cajaDireccion.current.value;

        var telf = this.cajaTelefono.current.value;

        var camas = parseInt(this.cajaCamas.current.value);

        //Debemos declarar un objeto JSON dentro de ract
        //Con el mismo nombre de propiedades.
        var hospital = {
            idhospital : idhospital ,
            nombre : nombre ,
            direccion : dirr ,
            telefono : telf ,
            camas : camas
        }

        //El metodo post de axios puede recibir dos parametros
        //1. URL del metodo post del servicio.
        //2. Objeto a envair al servicio.
        axios.post(url,hospital).then(response =>{

            this.setState({

                mensaje : "Hospital Insertado" + nombre + "!!!!!!!!" ,

                status: true
            })
        })
    }



  render() {
    return (
      <div>
            <h1>Agregar Hospital</h1>
            <h2 style={{color:"green"}}>{this.state.mensaje}</h2>
            <form>
                <label>Id Hospital</label>
                <input type='number' id='id_hospital' className='form-control' placeholder='ID Hospital' ref={this.cajaId}/>
                <label>Nombre</label>
                <input type='text' id='nombre' className='form-control' placeholder='Nombre del Hospital' ref={this.cajaNombre}/>
                <label>Direccion</label>
                <input type='text' id='direccion' className='form-control' placeholder='Direccion del Hospital' ref={this.cajaDireccion}/>
                <label>Telefono</label>
                <input type='text' id='telefono' className='form-control' placeholder='Telefono del Hospital' ref={this.cajaTelefono}/>
                <label>Camas</label>
                <input type='number' id='camas' className='form-control' placeholder='Camas del Hospital' ref={this.cajaCamas}/><br/>
                <button className='btn btn-warning' onClick={this.insertarHospitales}> Crear </button>
            </form>
            {
                this.state.status == true && 
                (
                    <Navigate to="/listahospitales"/>
                )
            }
      </div>
    )
  }
}
