import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutasCollatz extends Component {
  render() {
    return (
        // En el menu rutas por lo que veo solo creamos el dibujo (lista,tabla,..) y hacemos referencia 
        // en el href a la ruta que creamos en router mas el parametro que capturaremos alla.
      <div>
        <h1>Menu </h1>
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
                  <NavLink className="nav-link" to="/ConjeturaCollatz/6">Collatz 6</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ConjeturaCollatz/23">Collatz 23</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tabla/5">TablaMultiplicar</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}