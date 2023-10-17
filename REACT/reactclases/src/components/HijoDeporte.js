import { Component } from "react";

class HijoDeporte extends Component{

    // state = {
    //     mensaje: ""
    // }

    // mostrarFavorito = () => {
    //     this.setState({
    //         mensaje: "Deporte favorito: " + this.props.nombre
    //     })
    // }

    seleccionarFavorito = () => {
        //Ejecutar el metodo del padre, capturamos props para indicar el deporte
        //seleccionado.
        var deporte = this.props.nombre
        //Realizamos la llamada al padre enviando el deporte().
        this.props.mostrarFavorito(deporte)

    }

    render(){

        return(
            <div>
                <h1 style={{color:"blue"}}>{this.props.nombre}</h1>
                {/* <h2>{this.state.mensaje}</h2>
                <button onClick={ () => this.mostrarFavorito()}>Seleccionar Favorito</button> */}
                <button onClick={ () => this.seleccionarFavorito()}>Seleccionar favorito</button>
            </div>
        )
    }

}

export default HijoDeporte;