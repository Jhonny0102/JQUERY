import React, { Component } from 'react'
//Importamos la libreria de axios
import axios from 'axios'
import Global from './Global';
 
export default class ServicioCustomers extends Component {
 
    //Necesitamos una url de acceso al servicio
    urlApiCustomers = Global.urlApiCustomers;
 
    //Necesitamos almacenar, dentro de state un conjunto de objetos customers
    state = {
        customers: []
    }
 
 
    //Metodo para  cargar todos los clientes del servicio API
    loadCustomers = () => {
        console.log("Loading Customers...")
        var request = "customers.json";
        axios.get(this.urlApiCustomers + request).then(response => {
            this.setState({
                customers : response.data.results
            })
        })
    }
 
    //Tendremos un metodo de ciclo de vida para
    //cargar los clientes solamente al iniciar el component
    componentDidMount = () => {
        console.log("Creando component");
        this.loadCustomers();
 
    }
 
 
  render() {
    return (
      <div>
        <h1>Servicio Customers</h1>
        {
            this.state.customers.map((cliente, index) => {
                return(<h2 key={index} style={{color:"blue"}}>
                    {cliente.contactName}
                </h2>)
            })
        }
      </div>
    )
  }
}