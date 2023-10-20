import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../Global';
import axios from 'axios';

export default class Departamentos extends Component {

    selectDepartamento = React.createRef();

    state = {

        idDepartamento : -1 ,

        departamentos : [] ,

        statusDpt : false
    }

    buscarEmpleados = (e) => {

        e.preventDefault();

        var id = this.selectDepartamento.current.value;

        this.setState ({
            idDepartamento : id
        })

    }


    loadDepartamentos = () => {

        var request = "api/departamentos";

        var url = Global.urlApiDepartamentos+request;

        console.log(url);

        axios.get(url).then(response => {

            this.setState ({

                departamentos : response.data ,

                statusDpt : true
            })

        })
    }


    componentDidMount = () => {

        this.loadDepartamentos();
    }

    render() {
        return (
        <div>
            <h1 style={{color:"grey"}}>Departamento</h1>

            <form>
                <label>Seleccione un departamento</label>
                <select ref={this.selectDepartamento}>
                    {
                        this.state.statusDpt == true && 
                        (
                            this.state.departamentos.map( (departamento,index) => {

                                return (

                                    <option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
                                )
                            } )
                        )
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Mostrar Empleados</button>
                <h2 style={{color:"green"}}>Departamento seleccionado: {this.state.idDepartamento}</h2>
            </form>
            {
                this.state.idDepartamento != -1 &&
                (
                    <Empleados iddepartamento ={this.state.idDepartamento}/>
                )
            }
            
        </div>
        )
    }
}
