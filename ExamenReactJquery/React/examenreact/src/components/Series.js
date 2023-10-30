import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Global from '../Global'

export default class Series extends Component {
    state = {

        serie : [] ,

        status : false
    }

    loadSerie = () => {

        var idserie = this.props.idserie;

        var request = "api/series/"+idserie;

        var url = Global.api + request;

        axios.get(url).then(response => {

            this.setState({

                serie : response.data ,

                status: true
            })
        })
    }

    componentDidMount = () => {

        this.loadSerie();
    }

    componentDidUpdate = (oldProps) => {

        if (oldProps.idserie != this.props.idserie){ 

            this.loadSerie();     
        } 
    }


  render() {
    return (
      <div>
                {
                    this.state.status == true && 
                    (
                        <div>
                            <div>
                                <img src={this.state.serie.imagen} style={{width:"250px",height:"250px"}}/>
                            </div>
                            <div>
                                <h4>Nombre: {this.state.serie.nombre}</h4>
                            </div>
                            <div>
                                <h4>Puntuacion: {this.state.serie.puntuacion}</h4>
                            </div>
                            <div>
                                <NavLink to={"/personajes/"+this.props.idserie} className="btn btn-success">Personajes</NavLink>
                            </div>
                        </div>
                    )
                }
      </div>
    )
  }
}
