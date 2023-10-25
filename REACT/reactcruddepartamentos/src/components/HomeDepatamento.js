import React, { Component } from 'react'
import Depar from './../assets/images/depar1.avif';
import axios from 'axios';
import Global from './../Global';
import Loading from './../assets/images/loading.jpg';
import { NavLink } from 'react-router-dom';

export default class HomeDepatamento extends Component {

    state = {

        departamento : [] ,

        status : false
    }


    loadDepartamento = () => {

        var request = "/api/Departamentos";

        var url = Global.apiDepartamento+request;

        axios.get(url).then( response => {

            this.setState({

                departamento : response.data ,

                status : true
            })
        })
    }


    componentDidMount = () => {

        this.loadDepartamento();
    }


  render() {

    if(this.state.status == false){
        return (
            <div>
                <img src={Loading}/>
            </div>
        )
    }else {
        return (
            <div>
              <h1>Home Departamentos</h1>
              {/* <img src={Depar} style={{width:"250px" , height:"250px"}}/> */}
              {
                  this.state.status == true && 
                  (
                      <table className='table table-striped table-hover'>
                          <thead>
                              <tr>
                                  <th>Nombre</th>
                                  <th>Localidad</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.departamento.map( (departamento,index) => {
      
                                      return(
                                          <tr key={index}>
                                              <td>{departamento.nombre}</td>
                                              <td>{departamento.localidad}</td>
                                              <td>
                                                <NavLink to={"/details/"+departamento.numero+"/"+departamento.nombre+"/"+departamento.localidad} className="btn btn-primary">Detalles</NavLink>
                                                <NavLink to={"/delete/"+departamento.numero} className="btn btn-danger" >Eliminar</NavLink>
                                                <NavLink to={"/update/"+departamento.numero} className="btn btn-info" >Actualizar</NavLink>
                                              </td>
                                          </tr>
                                      )
                                  } )
                              }
                          </tbody>
                      </table>
                  )
              }
            </div>
        )
    }
  }
}
