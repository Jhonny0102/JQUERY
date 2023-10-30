import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Global from '../Global'

export default class Personajes extends Component {

    state = {

        personajes : [],

        status : false
    }
    

    loadPersonajes = () => {

        var request = "api/series/personajesserie/"+ this.props.idserie;

        var url = Global.api + request;

        axios.get(url).then(response => {

            this.setState({

                personajes : response.data ,

                status : true
            })
        })
    }

    componentDidMount = () => {

        this.loadPersonajes();
    }



  render() {
    return (
      <div>
        <NavLink to={"/series/"+this.props.idserie} className="btn btn-warning">Volver</NavLink>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true && 
                    (
                        this.state.personajes.map( (personaje,index) => {

                            return(
                                <tr key={index}>
                                    <td>{personaje.nombre}</td>
                                    <td><img src={personaje.imagen} style={{width:"150px",height:"150px"}}/></td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
