//Importamos el axios , global y en este caso NavLink ya que lo utlizaremos.
import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Global from './../Global';

export default class Hospitales extends Component {

    //Zona de variables que cambiaran su valor.
    state = {

        hospitales : [] ,

        statusHospitales : false
    }

    //Metodo para obtener todos los hospitales.
    getHospitales = () => {

        var request = "/webresources/hospitales";

        var url = Global.urlApiHospitales+request;

        axios.get(url).then( response => {

            this.setState({

                hospitales: response.data ,

                statusHospitales : true
            })
        })
    }

    //Metodo que cargara la funcion al iniciar la pagina.
    componentDidMount = () => {

        this.getHospitales();
    }



  render() {
    return (
      <div>
        <ul className="dropdown-menu">
            {
                //Comprobamos que el status esta true
                this.state.statusHospitales == true && 
                (
                    //Mapeamos los hospitales y devolveremos un li por cada hospital que haya con sus atributos.
                    this.state.hospitales.map( (hospital,index) => {
                        return (
                            <li key={index}>
                                {/* Recuerda:Para concatenar string con un valor es { "palabra" + valor } , dentro de los corchetes */}
                                <NavLink className="dropdown-item" to={"/hospital/" + hospital.idhospital} key={index}>{hospital.nombre}</NavLink>
                            </li>
                        )
                    })
                )
            }
        </ul>
      </div>
    )
  }
}
