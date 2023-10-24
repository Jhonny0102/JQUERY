import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDepartamento extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Menu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/create">Crear</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#">Opcion 2</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action 1</a></li>
                            <li><a className="dropdown-item" href="#">Action 2</a></li>
                            <li><a className="dropdown-item" href="#">Action 3</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
      </div>
    )
  }
}
