import React, { Component } from 'react'
import logo1 from './../assets/images/logo1.jpg';
import { NavLink } from 'react-router-dom'
import Global from '../Global';
import axios from 'axios'

export default class Menu extends Component {

    state = {

        equipos : [] ,

        status : false
    }


    obtenerEquipos = () => {

        var request = "api/equipos";

        var url = Global.apiApuesta + request ;

        console.log(url);

        axios.get(url).then( response => {

            this.setState({

                equipos: response.data ,

                status: true
            })
        })
        
    }


    componentDidMount = () => {

        this.obtenerEquipos();
    }


  render() {
    return (
      <div>
            <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" to="/">
                    <img src={logo1} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        Champions
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/apuesta"}>Apuesta</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Equipos
                            </NavLink>
                            <ul className="dropdown-menu">
                                {
                                    this.state.status == true && 
                                    (
                                        this.state.equipos.map( (equipo,index) => {
                                            return(
                                                <li key={index}><NavLink className="dropdown-item" to={"/detalle/"+equipo.idEquipo}>{equipo.nombre}</NavLink></li>
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
