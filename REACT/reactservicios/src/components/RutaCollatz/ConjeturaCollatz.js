import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {

    state = {

        listaResultado : []
    }

    operacionCollatz = () => {
        console.log("Entra al metodo");
        var numero = 5;

        var aux = [];

        while(numero != 1){

            if(numero % 2 == 0){

                numero = numero / 2 ;
            }else{

                numero = (numero * 3) + 1;
            }

            aux.push[numero];
        }

        this.setState({
            listaResultado: aux
        })

        console.log(this.state.listaResultado);

    }


    render() {
        return (
        <div>
            <h1>Conjetura Collatz</h1>
            {
                this.operacionCollatz
            }
        </div>
        )
    }
}
