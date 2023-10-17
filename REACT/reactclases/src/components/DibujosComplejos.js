import { Component } from "react";

class DibujosComplejos extends Component {
    //Dibujar una serie de numeros en formato html.
    //Utilizando arrays y codigo html
    dibujarNumeros = () => {
        //Declaramo un array para guardar todos los numero 
        //en formato html como lista.
        var lista = [];

        for(var i = 0 ; i <= 10 ; i++){

            var numero = parseInt(Math.random() * 100) + 1 ;
            //Mediante el metodo push del array iremos rellenando 
            //codigo html dinamico en una variable array.
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

    render(){

        return(
            <div>
                <h1 style={{color:"blue"}}>Dibujos Complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )


    }

}

export default DibujosComplejos;