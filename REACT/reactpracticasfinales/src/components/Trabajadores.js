import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class Trabajadores extends Component {

    state = {

        trabajador : [] ,

        status : false
    }

    mostrarTrabajadores = () => {

        var otro = "";

        var seleccionados = this.props.array;

        for(var i=0 ; i< seleccionados.length ; i++){

            otro += "&idhospital="+seleccionados[i];
        }

        otro = otro.substring(0,otro.length-1)

        var request = "api/trabajadores/trabajadoresHospitales?"+otro;

        var url = Global.apiHospitales + request;

        axios.get(url).then( response => {

            this.setState({

                trabajador : response.data ,

                status : true
            })
        })
    }


    componentDidUpdate = (oldProps) => {

        if (this.props.array != oldProps.array){ 

            this.mostrarTrabajadores(); 
            
        }

        if (this.props.props != oldProps.props){ 

            this.mostrarTrabajadores(); 
            
        }        
    }


  render() {
    return (
      <div>
        <h2>Zona de Trabajadores</h2>
        <table  className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>ID Trabajador</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>ID Hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true &&
                    (this.state.trabajador.map( (trabajador,index) => {

                        return(
                            <tr key={index}>
                                <td>{trabajador.idTrabajador}</td>
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.oficio}</td>
                                <td>{trabajador.salario}</td>
                                <td>{trabajador.idHospital}</td>
                            </tr>
                        )
                    }))
                }
            </tbody>
        </table>



      </div>
    )
  }
}
