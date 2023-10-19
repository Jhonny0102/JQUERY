import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class DepartamentoEmpleados extends Component {

    selectDepartamento = React.createRef();

    state = {
        empleados : [] ,
        departamentos : [] ,
        statusDpt: false ,
        statusEmp: false
    }

    buscarEmpleados = (e) => {

        e.preventDefault();

        var idDpt = this.selectDepartamento.current.value;

        //console.log(idDpt);

        var request = "api/Empleados/EmpleadosDepartamento/"+idDpt;

        var url = Global.urlApiEmpleados+request;

        //console.log(url);

        axios.get(url).then( response => {
            this.setState({
                empleados : response.data,
                statusEmp: true
            })
        })

    }

    loadDepartamento = () => {
        var request = "api/departamentos";
        var url = Global.urlApiDepartamentos+request;
        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data ,
                statusDpt: true
            })
        })
        
    }

    componentDidMount = () => {

        this.loadDepartamento();
    }



    render() {
        return (
        <div>
            <h1>Departamentos y Empleados Api</h1>
            <form>
                <label>Seleccine un Departamento: </label>
                <select ref={this.selectDepartamento}>
                    {
                        this.state.statusDpt == true && 
                        (
                            this.state.departamentos.map( (departamento,index) => {
                                return (
                                    <option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
                                )
                            })
                        )
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Mostrar Empleados</button>
            </form>
            <ul>
                {
                    this.state.statusEmp == true && 
                    (
                        this.state.empleados.map( (empleado,index) => {
                            return(
                                <li key={index}>{empleado.apellido}</li>
                            )
                        })
                    )
                }
            </ul>
        </div>
        )
    }
}
