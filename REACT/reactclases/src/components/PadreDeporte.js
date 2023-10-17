import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeporte extends Component {
    deportes = ["Futbol","Golf","Boxeo","Ciclismo","Baloncesto"]

    //Necesitamos una variable para saber
    //el deporte favorito , dicha variable sera dinamica dependiendo
    //del hijo seleccionado.
    state = {
        favorito: ""
    }

    //Necesitamos un metodo que recibira el deporte seleccionado desde
    // el hijo.
    mostrarFavorito = (deporteSeleccionado) => {
        //Modificamos el state pra indicar el faovrito.
        this.setState({
            favorito:deporteSeleccionado
        });

    }


    render(){

        return(
            <div>
                <h1 style={{color:"grey"}}>Padre Deporte</h1>
                <h2 style={{background:"yellow"}}>
                    Su Deporte faovorito es ... {this.state.favorito}
                </h2>
                {
                    //Recorrer Todos los deportes y creamos
                    //Etiquetas <HijoDeporte/> enviando el nombre.
                    this.deportes.map( (deporte,index) => {
                        return (<HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>);
                    })
                }
            </div>
        )
    }

}

export default PadreDeporte;