import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'

export default class ModificarPersonaje extends Component {

    state = {

        series : [],

        personajes : [],

        statusPersonaje : false,

        statusSerie : false,

        statusPUT : false
    }

    cajaPersonaje = React.createRef();

    cajaSerie = React.createRef();


    modificarpersonaje = (e) => {

        e.preventDefault();

        var personaje = this.cajaPersonaje.current.value;

        var serie = this.cajaSerie.current.value;

        var request = "api/personajes/"+personaje+"/"+serie;

        var url = Global.api + request ;

        axios.put(url).then(response => {

            alert("Personaje Modificado");

            this.setState({

                statusPUT : true
            })
        })

    }

    loadSeries = () => {

        var request = "api/series";

        var url = Global.api + request ;

        axios.get(url).then( response =>{

            this.setState({

                series: response.data,

                statusSerie : true
            })
        })

    }

    loadPersonajes = () => {

        var request = "api/personajes";

        var url = Global.api + request;

        axios.get(url).then(response => {

            this.setState({

                personajes : response.data ,

                statusPersonaje : true
            })
        })

    }

    componentDidMount = () => {

        this.loadPersonajes();

        this.loadSeries();
    }

  render() {
    return (
      <div>
            {
                this.state.statusPUT === true &&
                (
                  <Navigate to={"/personajes/"+this.cajaSerie.current.value}/>  
                )
            }
            <h1>Modificar personaje</h1>

            <form>
            <div className="mb-3">
                    <label className="form-label">Personaje:</label>
                    <select name="cars" ref={this.cajaPersonaje}>
                        {
                            this.state.statusPersonaje == true && 
                            (
                                this.state.personajes.map( (personaje,index) => {

                                    return(
                                        <option key={index} value={personaje.idSerie}>{personaje.nombre}</option>
                                    )
                                })
                            )
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Serie:</label>
                    <select name="cars" ref={this.cajaSerie}>
                        {
                            this.state.statusSerie == true && 
                            (
                                this.state.series.map( (serie,index) => {

                                    return(
                                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                    )
                                })
                            )
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-warning" onClick={this.modificarpersonaje}>Modificar</button>
                <NavLink to={"/"} className="btn btn-info">Volver</NavLink>
            </form>
      </div>
    )
  }
}
