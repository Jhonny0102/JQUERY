import React, { Component } from 'react'
//Importar siempre el NavLink en Menu o cualquier js que contegan un tipo de menu.
import { NavLink } from 'react-router-dom'
//En este caso importamos este componente para crear <li> personalizados.
import Hospitales from './Hospitales'

export default class Menu extends Component {
  render() {
    //Creamos una lista ,donde tiene su estilo y en un <li> habra una lista donde le pasamos un componente.
    return (
      <div>
        <h1>Menu</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hospitales
                  </NavLink>
                  {
                    //COMPONENTE PASADO !!!!!!!!
                    <Hospitales/>
                  }
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Otro Lugar</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
