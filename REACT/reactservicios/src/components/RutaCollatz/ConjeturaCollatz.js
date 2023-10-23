import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {

    state = {

        lista : [] ,

        statusLista : false
    }

    metodoCollatz = () => {

        var numero = parseInt(this.props.numero);

        var aux = [];

        console.log(numero);

        while (numero != 1){

            if(numero % 2 == 0){

                numero = numero / 2;
            }
            else{

                numero = ( numero * 3) + 1;
            }
            //console.log(numero);
            aux.push(numero);
        }

        this.setState ({

            lista : aux ,

            statusLista : true
        })

    }


    componentDidMount = () => {

        this.metodoCollatz();
    }
    //El parametro pasado es el antiguo valor.Se puede nombrar como quieras pero es aconsejable este.
    componentDidUpdate = (oldProps) => {
        //Condicion donde comprueba si cambia de valor.
        if(this.props.numero != oldProps.numero){

            this.metodoCollatz();
        }

    }



  render() {
    return (
      <div>
            <h1>Componente Collatz</h1>
            <h2>Metodo Collatz del numero : {this.props.numero}</h2>
            <ul>
                {
                    this.state.lista.map( (num , index) => {

                        return (
                            <li key={index}>{num}</li>
                        )
                    })
                }
            </ul>
      </div>
    )
  }
}