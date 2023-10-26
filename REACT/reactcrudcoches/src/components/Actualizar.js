import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom'; 

export default class Actualizar extends Component {

    state = {

        coche : [] ,

        statusGet : false ,
        
        statusPut : false 
    }

    cajaId = React.createRef();

    cajaMarca = React.createRef();

    cajaModelo = React.createRef();

    cajaConductor = React.createRef();

    cajaImagen = React.createRef();


    loadCoche = () => {

        var request = "/api/Coches/FindCoche/"+this.props.idcoche;

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

    actualizarCoche = (e) => {

        e.preventDefault();

        var id = parseInt(this.cajaId.current.value);

        var marca = this.cajaMarca.current.value;

        var modelo = this.cajaModelo.current.value;

        var conductor = this.cajaConductor.current.value;

        var imagen = this.cajaImagen.current.value;

        var request = "/api/Coches/UpdateCoche";

        var data = {

            "idCoche": id ,
            "marca": marca ,
            "modelo": modelo,
            "conductor": conductor,
            "imagen": imagen
        }

        var url = Global.apiCoches + request;

        axios.put(url,data).then(response => {

            alert("Informacion Actualizada");

            this.setState({

                statusPut : true
            })
        })

    }


  render() {
    return (
      <div>
        <h1>Actualizar Coche: {this.props.idcoche}</h1>
        <form>
                <div className="mb-3">
                    <label className="form-label">ID Coche</label>
                    <input type="number" className="form-control" aria-describedby="emailHelp" ref={this.cajaId} defaultValue={this.state.coche.idCoche}/>
                    <div id="emailHelp" className="form-text">Introduce el ID</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Marca</label>
                    <input type="text" className="form-control" ref={this.cajaMarca} defaultValue={this.state.coche.marca}/>
                    <div id="emailHelp" className="form-text">Introduce la marca</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Modelo</label>
                    <input type="text" className="form-control" ref={this.cajaModelo} defaultValue={this.state.coche.modelo}/>
                    <div id="emailHelp" className="form-text">Introduce el modelo</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Conductor</label>
                    <input type="text" className="form-control" ref={this.cajaConductor} defaultValue={this.state.coche.conductor}/>
                    <div id="emailHelp" className="form-text">Introduce el conductor</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Inserte imagen</label>
                    <input className="form-control" type="file" id="formFile" ref={this.cajaImagen}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.actualizarCoche}>Añadir</button>
            </form>
            {
                this.state.statusPut == true &&
                (
                    <Navigate to={"/lista"}/>
                )
            }
      </div>
    )
  }
}
