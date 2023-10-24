import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class DetalleDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Detalle Departamento {this.props.iddepartamento}</h1>
            <ul className='list-group'>
                <li className='list-group-item'>Id : {this.props.iddepartamento}</li>
                <li className='list-group-item'>Nombre : {this.props.nombre}</li>
                <li className='list-group-item'>Localidad : {this.props.localidad}</li>
            </ul> 
        <NavLink to="/">Volver a la lista</NavLink>
      </div>
    )
  }
}
