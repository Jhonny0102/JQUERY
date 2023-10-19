import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'

export default class EmpleadosOficios extends Component {

    selectOficio = React.createRef();

    state = {

        oficios : {},

        empleados : {},

        statusOficios : false,

        statusEmpleados : false

    }

    buscarEmpleados = (e) => {

        e.preventDefault();

        var n

    }



    loadOficios = () => {

        var request = "api/Empleados/oficios";

        var url = Global.urlApiEmpleados+request;
        
        console.log(url);

        axios.get(url).then( response => {

            this.setState({

                oficios : response.data ,

                statusOficios : true
            })

        })
        
    }

    componentDidMount = () => {

        this.loadOficios();

    }



    render() {
        return (
        <div>
            <h1>Empleados y Oficios</h1>

            <form>
                <label>Seleccione Oficio: </label>
                <select ref={this.selectOficio}>
                    {
                        this.state.statusOficios == true && 
                        (
                            this.state.oficios.map( (oficio,index) => {
                                return (
                                    <option key={index} value={oficio}>{oficio}</option>
                                )
                            })
                        )
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Buscar Empleados</button>          
            </form>

        </div>
        )
    }
}
