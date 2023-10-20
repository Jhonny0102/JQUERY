import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state = {

        tabla : []
    }

    generarTabla = () => {

        var aux = [];

        var num = parseInt(this.props.numero);

        for (var i = 1 ; i <= 10 ; i++){

            var op = num * i;

            aux.push(op);
        }

        this.setState({

            tabla: aux
        })
    }

    componentDidMount = () => {

        this.generarTabla();
    }


    render() {
        return (
        <div>
            <h1>Tabla de Multiplicar Ruta</h1>
            <h2 style={{color:"green"}}>Numero:{this.props.numero}</h2>
            <ul>
                {
                    this.state.tabla.map( (num,index) => {

                        return (
                            <li key={index}>{num}</li>
                        )
                    } )
                }
            </ul>
        </div>
        )
    }
}
