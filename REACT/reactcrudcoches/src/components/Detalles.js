import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class Detalles extends Component {

    state = {

        coche : [] ,

        status : false
    }

    loadCoche = () => {

        var id = parseInt(this.props.idcoche);

        var request = "/api/Coches/FindCoche/"+id;

        var url = Global.apiCoches + request;

        axios.get(url).then( response => {

            this.setState({

                coche : response.data ,

                status : true
            })
        })
    }

    componentDidMount = () =>{

        this.loadCoche();
    }


  render() {
    return (
      <div>
        <h1>Detalles del coche: {this.props.idcoche}</h1>
        <h4>Id Coche: {this.state.coche.idCoche}</h4>
        <h4>Marca: {this.state.coche.marca}</h4>
        <h4>Modelo: {this.state.coche.modelo}</h4>
        <h4>Conductor: {this.state.coche.conductor}</h4>
        <img src={this.state.coche.imagen} style={{width:"250px" , height:"200px"}}/>
      </div>
    )
  }
}
