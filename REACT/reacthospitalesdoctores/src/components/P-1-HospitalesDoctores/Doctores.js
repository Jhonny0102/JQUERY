//Importamos siempre el axios y el global, donde se almacena las url.
import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {
    //Este componente esta a la esperar de pasar por parametros un valor, en este caso una ID Hospital.

    //Zona que cambiara de valor.
    state = {

        doctores : [] ,

        statusDoctores : false
    }

    //Metodo para obtener la informacion de los doctores.
    obtenerDoctores = () => {

        var idHospital = this.props.id;

        var request = "/api/Doctores/DoctoresHospital/"+idHospital;

        var url = Global.urlApiDoctores+request;

        axios.get(url).then( response => {

            this.setState ({

                doctores: response.data ,

                statusDoctores : true
            })
        })
    }

    llamarDetalles = () => {


    }

    //Metodo que cargara la funcion cuando incie la pagina.
    componentDidMount = () => {

        this.obtenerDoctores();
    }

    //Metodo que cargara la funcion si detecta un cambio en el props , en este caso si ha cambiado de id.
    componentDidUpdate = (oldProps) => {

        if(oldProps.id != this.props.id){

            this.obtenerDoctores();
        }
    }


  render() {
    return (
      <div>
        <h2>Informacion del Hospital : {this.props.id}</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID Doctor</th>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Salario</th>
                        <th>ID Hospital</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Ahor ahacer el true y el mapeo
                        this.state.statusDoctores == true && 
                        (
                            this.state.doctores.map( (doctor,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doctor.idDoctor}</td>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td>{doctor.idHospital}</td>
                                        <td><button type="button" className="btn btn-success">Detalles</button></td>
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
