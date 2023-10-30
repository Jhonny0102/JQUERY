import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Navigate } from 'react-router-dom'
import Global from '../Global'

export default class CrearPersonaje extends Component {

    state = {

        serie : [],

        statusSerie : false,

        statusPost : false
    }

    cajaNombre = React.createRef();

    cajaImagen = React.createRef();
    
    cajaSerie = React.createRef();



    loadSerieSelect = () => {

        var request = "api/series";

        var url = Global.api + request ;

        axios.get(url).then( response =>{

            this.setState({

                serie: response.data,

                statusSerie : true
            })
        })

    }


    crearPersonaje = (e) => {

        e.preventDefault();

        var nombre = this.cajaNombre.current.value;
        
        var imagen = this.cajaImagen.current.value;

        var serie = parseInt(this.cajaSerie.current.value);

        var data = {

            "idPersonaje" : 0,
            "nombre": nombre,
            "imagen": imagen,
            "idSerie": serie
        }

        var request = "api/personajes";

        var url = Global.api + request;

        axios.post(url,data).then(response => {

            this.setState({

                statusPost : true
            })

        })
    }

    componentDidMount = () => {

        this.loadSerieSelect();
    }


  render() {
    return (
      <div>
        {
            this.state.statusPost == true && 
            (
                <Navigate to={"/personajes/"+this.cajaSerie.current.value}/> 
            )
        }
            <h1>Nuevo personaje</h1>

            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" ref={this.cajaNombre}/>
                    <div id="emailHelp" className="form-text">Introduce el nombre</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input type="text" className="form-control" ref={this.cajaImagen}/>
                    <div id="emailHelp" className="form-text">Introduce la imagen</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Serie:</label>
                    <select name="cars" ref={this.cajaSerie}>
                        {
                            this.state.statusSerie == true && 
                            (
                                this.state.serie.map( (serie,index) => {

                                    return(
                                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                    )
                                })
                            )
                        }
                    </select>
                </div>

                <button type="submit" className="btn btn-warning" onClick={this.crearPersonaje}>Crear</button>
                
                <NavLink to={"/"} className="btn btn-info">Volver</NavLink>
            </form>
      </div>
    )
  }
}
