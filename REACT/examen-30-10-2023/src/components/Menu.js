import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from './../Global';
import axios from 'axios';

export default class Menu extends Component {

    state = {

        series : [] ,

        status : false
    }

    loadSeries = () => {

        var request = "api/series";

        var url = Global.apiGeneral + request;

        //alert(url);

        axios.get(url).then( response => {

            this.setState({

                series : response ,

                status: true
            })
        })
    }

    componentDidMount = () => {

        this.loadSeries();
    }



  render() {
    return (
      <div>
         {/* <!-- Zona NAV --> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">Stranger Things</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Nuevo Personaje</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Modificar Personaje</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Series
                    </NavLink>
                    <ul className="dropdown-menu" id="listaEquipos">
                        {
                            this.state.series.map( (serie,index) => {
                                return( <li>{serie.nombre}</li>)
                            })
                        }
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
