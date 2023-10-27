import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import Trabajadores from './Trabajadores';

export default class Hospitales extends Component {

    //Referencias a las cajas ///
    cajaSelect = React.createRef();

    cajaIncremento = React.createRef();

    //State y sus valores ////
    state = {

        hospitales : [] ,

        statusGet : false ,

        seleccionados : [] ,

        statusseleccionados : false ,

        statusPut : false
        , reload: false
    }


    //////////////////////////
    ///====   Metodos =====///
    //////////////////////////

    generarOptions = () => {

        var request = "api/hospitales";

        var url = Global.apiHospitales + request;

        console.log(url);

        axios.get(url).then( response => {

            this.setState({

                hospitales : response.data ,

                statusGet : true
            })
        })
    }

    getSeleccionados = () => {

        var datos = [];

        for(var option of options){

            if(option.selected == true){
                
                datos.push(parseInt(option.value));
            }
        }

        return datos;
    }

    obtenerSeleccionados = (e) => {

        e.preventDefault();

        var options = this.cajaSelect.current.options;

        var datos = this.getSeleccionados();

        this.setState({

            seleccionados : datos ,

            statusseleccionados : true
        })

    }

    incrementarSueldo = (e) => {

        e.preventDefault();

    }

    ///////////////////////////////
    /// ===== Components =======///
    ///////////////////////////////
    
    componentDidMount = () => {

        this.generarOptions();
    }


  render() {
    return (
      <div>
            <h1>Hospitales</h1>
            <form>
                <label>Seleccion los Hospitales:</label>
                <select multiple className="form-select" aria-label="Default select example" ref={this.cajaSelect}>
                    {
                        this.state.statusGet == true && 
                        (
                            this.state.hospitales.map( (hospital,index) => {

                                return(
                                    <option key={index} value={hospital.idHospital}>{hospital.nombre}</option>
                                )
                            })
                        )
                    }
                </select>
                <label className="form-label">Incremento: </label>
                <input type="text" className="form-control" aria-describedby="passwordHelpBlock" ref={this.cajaIncremento}/>
                <div className="form-text">
                    Incremento de salario a los trabajadores de los hospitales seleccionados
                </div>
                <button onClick={this.obtenerSeleccionados} >Buscar</button>
                <button onClick={this.incrementarSueldo} >Incrementar</button>
            </form>
            <Trabajadores array={this.state.seleccionados} props={this.state.reload}/>
      </div>    
    )
  }
}
