import { Component } from "react";

class HijoSuma extends Component{

    seleccionarNumero = () => {

        var numeroSeleccionado = this.props.numero

        this.props.capturarNumero(numeroSeleccionado)

    }

    render(){

        return(
            <div>
                <h3 style={{color:"blue"}}>Numero {this.props.numero}</h3>
                <button onClick={ () => this.seleccionarNumero()} >Sumar {this.props.numero}</button>
            </div>
        );

    }

}

export default HijoSuma;