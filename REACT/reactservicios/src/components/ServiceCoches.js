import React, { Component } from 'react'
import axios from 'axios';

export default class ServiceCoches extends Component {

    url = "https://apicochespaco.azurewebsites.net/";

    request = "webresources/coches";
    
    cochesAll= [];
    //REHACERRRR QUE NO MUESTRA MARCA!!!!!!!!!!!!
    buscarMarca = React.createRef();

    state = {

        coches : [],

        status : false
    }

    loadCoches = () => {
        //console.log("Aqui informaremos de los coches");

        //console.log(this.url+this.request);

        axios.get(this.url+this.request).then(response => {

            this.setState({

                coches : response.data,

                status : true
            })

            this.cochesAll = response.data;

        })
    }

    buscarCoche = (e) => {

        e.preventDefault();

        var coches = this.cochesAll;

        var marca = this.buscarMarca.current.value;

        console.log(marca);

        var cochesFiltrados = 

            coches.filter(coches => coches.marca.includes(marca));

        console.log(cochesFiltrados);

        this.setState ({

            coches: cochesFiltrados,

            status:true
        })

    }

    componentDidMount = () => {

        //console.log("Creando component");

        this.loadCoches();

 
    }


    render() {
        return (
        <div>
            <h1>Service Coches </h1>

            <h2>Buscar Coche</h2>
            <form onSubmit={this.buscarCoche}>
                <label>Buscar Marca: </label>
                <input type="text" ref={this.buscarMarca}></input>
                <button>Buscar</button>
            </form>
            
            <h2>Informacion Coches</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status == true &&
                        (
                            this.state.coches.map( (coche,index) => {
                                return(    
                                    <tr key={index}>
                                        <td key={"Marca" + index} >{coche.marca}</td>
                                        <td key={"Modelo" + index}>{coche.modelo}</td>
                                        <td key={"Conductor" + index}>{coche.conductor}</td>
                                        <td key={"Imagen" + index}>
                                            <img src={coche.imagen} width="150px" height="150px" key={"Img"+index}/>
                                        </td>
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
