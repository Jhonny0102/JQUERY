import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate, NavLink } from 'react-router-dom'

export default class UpdateCoche extends Component {

    state = {

        coche : [] ,

        statusGet : false ,

        statusPut : false
    }

    cajaId = React.createRef();

    cajaMarca = React.createRef();

    cajaModelo = React.createRef();

    cajaConductor = React.createRef();


    loadCoche = () => {

        var request = "api/Coches/FindCoche/" + this.props.idcoche ;

        var url = Global.apiCoches + request;

        axios.get(url).then(response => {

            this.setState({

                coche : response.data ,

                statusGet : true
            })
        })

    }

    componentDidMount = () => {

        this.loadCoche();
    }

    insertarCoche = (e) => {

        e.preventDefault();

        var id = parseInt(this.cajaId.current.value);

        var marca = this.cajaMarca.current.value;

        var modelo = this.cajaModelo.current.value;

        var conductor = this.cajaConductor.current.value;

        var request = "api/Coches/UpdateCoche";

        var url = Global.apiCoches + request;

        var data = {
            "idCoche": id ,
            "marca" : marca ,
            "modelo" : modelo ,
            "conductor" : conductor ,
            "imagen" : "hola"
        }

        axios.put(url,data).then(response => {

            this.setState({

                statusPut : true
            })
        })

    }


  render() {
    return (
      <div>
            {
            this.state.statusPut == true &&
                ( <Navigate to="/lista"/> )
            }
            <h1>Actualizar Coche: {this.props.idcoche}</h1>
            {
                this.state.statusGet == true && 
                (
                <form>
                    <label>ID Coche</label>
                    <input type='text' ref={this.cajaId} className="form-control" defaultValue={this.state.coche.idCoche} disabled/>
                    <label>Marca</label>
                    <input type='text' ref={this.cajaMarca} className="form-control" defaultValue={this.state.coche.marca}/>
                    <label>Modelo</label>
                    <input type='text' ref={this.cajaModelo} className="form-control" defaultValue={this.state.coche.modelo}/>
                    <label>Conductor</label>
                    <input type='text' ref={this.cajaConductor} className="form-control" defaultValue={this.state.coche.conductor}/>
                    <button className="btn btn-success" onClick={this.insertarCoche}>Añadir</button>
                </form>
                )
            }
            <NavLink to={"/"} className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</NavLink><br/>
            <NavLink to={"/lista"} className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Lista</NavLink>
      </div>
    )
  }
}
