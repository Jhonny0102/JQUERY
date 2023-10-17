import { Component } from "react";

class DibujosComplejosReact extends Component{
    //Declaramos un array de nombres.
    //Dentro de state para que sea dinamico el dibujo.
    state = {
        nombres : ["Pedro","Laura","Jesus","Carolina","Lourdes"]
    }

    //Metodo para generar un nuevo nombre.
    generarNombre = () => {
        this.state.nombres.push("Jhon");
        this.setState({
            nombres: this.state.nombres
        });
    }
    render(){

        return(
            <div>
                <h1 style={{color:"purple"}}>Dibujos Complejos React Collection</h1>
                <button onClick={ () => this.generarNombre()}> Generar Nombre </button>
                {
                    //Este codigo react debe de tener un return.
                    //Y es codigo logico que utiliza la sintaxis jsx.
                    this.state.nombres.map( (name,index) => {
                        //NUnca podemos dejar vacio este codigo
                        //Debe contener siempre un return.
                        return (<h3 style={{color:"blue"}} key={index} >{name}</h3>)
                    })
                }
            </div>
        )
    }


}

export default DibujosComplejosReact;