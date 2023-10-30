import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {

    state = {
        series : [],

        status : false
    }

    loadSeries = () => {

        var request = "api/series";

        var url = Global.api + request ;

        axios.get(url).then( response =>{

            this.setState({

                series: response.data,

                status : true
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
                <NavLink className="navbar-brand" to="#">Champions</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/crear">Nuevo personaje</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/modificar">Modificar personaje</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Series
                        </NavLink>
                        <ul className="dropdown-menu" id="listaseries">
                            {
                                this.state.status == true && 
                                (
                                    this.state.series.map( (serie,index) => {
                                        return(
                                            <li key={index}><NavLink to={"/series/"+serie.idSerie}>{serie.nombre}</NavLink></li>
                                        )
                                    })
                                )
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
