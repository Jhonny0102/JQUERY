import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global';
import { NavLink } from 'react-router-dom';

export default class Lista extends Component {

    state = {

        coches : [] ,

        status : false
    }

    loadCoches = () => {

        var request = "/api/Coches";

        var url = Global.apiCoches + request;

        axios.get(url).then( response => {

            this.setState ({

                coches : response.data ,

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
            <h1>Lista de Coches</h1>
            {
                this.state.status == true && 
                (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Conductor</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {
                                this.state.coches.map( (coche,index) => {

                                    return(
                                        <tr key={index}>
                                            <td>{coche.marca}</td>
                                            <td>{coche.modelo}</td>
                                            <td>{coche.conductor}</td>
                                            <td><img src={coche.imagen} style={{width:"150px" , height:"100px"}} /></td>
                                            <td>
                                                <NavLink to={"/detalles/" + coche.idCoche +"/"+coche.marca+"/"+coche.modelo+"/"+coche.conductor} className="btn btn-primary">
                                                    Detalles
                                                </NavLink>
                                                <NavLink to={"/delete/"+coche.idCoche} className="btn btn-warning">Eliminar</NavLink>
                                                <NavLink to={"/update/"+coche.idCoche} className="btn btn-info">Update</NavLink>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
            }
      </div>
    )
  }
}
