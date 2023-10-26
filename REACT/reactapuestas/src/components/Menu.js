import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './../Global';

export default class Menu extends Component {

    state = {

        equipos : [] ,

        status : false
    }

    obtenerEquipos = () => {

        var request = "api/equipos";

        var url = Global.apiApuestas+request;

        axios.get(url).then( response => {

            this.setState({

                equipos : response.data ,

                status : true
            })
        })
    }

    componentDidMount = () => {

        this.obtenerEquipos();
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">Champions</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Apuestas</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Equipo
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        {
                            this.state.status == true && 
                            (
                                this.state.equipos.map( (equipo, index) => {

                                    return(
                                        <li key={index}><NavLink to={"/detalles/"+equipo.idEquipo} className="nav-link active" aria-current="page">{equipo.nombre}</NavLink></li>
                                    )
                                })
                            )
                        }
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
