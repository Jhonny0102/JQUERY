import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom'; 

export default class Crear extends Component {

    cajaId = React.createRef();

    cajaMarca = React.createRef();

    cajaModelo = React.createRef();

    cajaConductor = React.createRef();

    cajaImagen = React.createRef();

    state = {

        status : false
    }

    insertarCoche = (e) => {

        e.preventDefault();

        var id = parseInt(this.cajaId.current.value);

        var marca = this.cajaMarca.current.value;

        var modelo = this.cajaModelo.current.value;

        var conductor = this.cajaConductor.current.value;

        var imagen = this.cajaImagen.current.value;

        var request = "/api/Coches/InsertCoche";

        var data = {

            "idCoche": id ,
            "marca": marca ,
            "modelo": modelo,
            "conductor": conductor,
            "imagen": imagen
        }

        var url = Global.apiCoches + request;

        //console.log(url);
        axios.post(url,data).then( response => {
            
            this.setState({

                status:true
            })
        })


    }


  render() {
    return (
      <div>
            {
                this.state.status == true && 
                (
                    alert("Coche añadido correctamente") ,

                    <Navigate to="/lista"/>
                )
            }
            <h2>Informacion Nuevo Coche</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">ID Coche</label>
                    <input type="number" className="form-control" aria-describedby="emailHelp" ref={this.cajaId}/>
                    <div id="emailHelp" className="form-text">Introduce el ID</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Marca</label>
                    <input type="text" className="form-control" ref={this.cajaMarca}/>
                    <div id="emailHelp" className="form-text">Introduce la marca</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Modelo</label>
                    <input type="text" className="form-control" ref={this.cajaModelo}/>
                    <div id="emailHelp" className="form-text">Introduce el modelo</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Conductor</label>
                    <input type="text" className="form-control" ref={this.cajaConductor}/>
                    <div id="emailHelp" className="form-text">Introduce el conductor</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input type="text" className="form-control" ref={this.cajaImagen}/>
                    <div id="emailHelp" className="form-text">Introduce la imagen</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.insertarCoche}>Añadir</button>
            </form>
      </div>
    )
  }
}
