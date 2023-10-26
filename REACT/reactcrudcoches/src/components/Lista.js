import React, { Component } from 'react'
import Loading from './../assets/images/loading.jpg';
import axios from 'axios';
import Global from './../Global';
import { NavLink } from 'react-router-dom'

export default class Lista extends Component {

    state = {

        coches : [] ,

        status : false
    }


    loadCoches = () => {

        var request = "api/Coches";

        var url = Global.apiCoches + request ;

        axios.get(url).then( response => {

            this.setState({

                coches : response.data,

                status : true
            })
        })
    }


    componentDidMount = () => {

        this.loadCoches();
    }



  render() {
    return (
      <div>
        <h3>Lista Coches</h3>
        <table  className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.coches.map( (coche,index) => {

                        return(
                            <tr key={index}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen} style={{width:"150px",height:"100px"}}/></td>
                                <td>
                                    <NavLink to={"/details/"+coche.idCoche} className="btn btn-info">Detalles</NavLink>
                                    <NavLink to={"/delete/"+coche.idCoche} className="btn btn-danger">Eliminar</NavLink>
                                    <NavLink to={"/update/"+coche.idCoche} className="btn btn-success">Actualizar</NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
