//LO PRIMERO !!!!!!!!!!!!Importamos los componentes necesarios.
import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'

//LO SEGUNDOOO!!!!!!!!!!! Pensamos que metodos usar , o que variables cambian y de que manera usarlos.
export default class EmpleadosOficios extends Component {

    //Guardamos en selecOficio la referencia, en este caso de la caja.
    selectOficio = React.createRef();

    //Zona donde las variables cambian de valor.
    state = {

        oficios : {},

        empleados : {},

        statusOficios : false,

        statusEmpleados : false

    }

    //Metodo para buscar los empleados
    buscarEmpleados = (e) => {

        e.preventDefault();

        var selectOficio = this.selectOficio.current.value;

        console.log(selectOficio);

        var request = "api/Empleados/EmpleadosOficio/"+ selectOficio;

        var url = Global.urlApiEmpleados+request;

        axios.get(url).then( response => {

            this.setState({

                empleados : response.data,

                statusEmpleados : true
            })
        })

    }


    //Metodo para cargar oficios
    loadOficios = () => {

        var request = "api/Empleados/oficios";

        var url = Global.urlApiEmpleados+request;
        
        //console.log(url);

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
            <table border="1">
                <thead>
                    <tr>
                        <th>ID Empleado</th>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Departamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.statusEmpleados == true && 

                        (
                            this.state.empleados.map( (empleado,index) => {

                                return ( 
                                    <tr key={index}>
                                        <td key={"id"+index}>{empleado.idEmpleado}</td>
                                        <td key={"apell"+index}>{empleado.apellido}</td>
                                        <td key={"ofi"+index}>{empleado.oficio}</td>
                                        <td key={"dpt"+index}>{empleado.departamento}</td>
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
