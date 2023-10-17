//Debemos importar component para esta nueva sintaxis.
import { Component } from "react";

//Podemos declara metodos fuera del component 
//Dichos metodos se declaran como function.
//Y no podemos utilizar nada de la clase dentro de ellos.
function metodoExterno (){
    console.log("Function externa a la clase");
}


class Contador extends Component {
    //Las variables y los metodos se declaran fuera del render.
    //No se utilizan palabras clave como var , let o const.
    numero = 1;
    //Creamos un metodo para incrementar dicho numero.
    incrementar = () => {
        //para hacer referencia a las variables de la clase debemos
        //utilizar la palabra this siempre.
        this.numero = this.numero + 1 ;
        console.log("valor de numero: " + this.numero);
    }

    //El concepto de state es exactamente el mismo , variables
    //que necesitamos que sean dibujadas, es decir , que cambien el render().
    //Dichas variables van declaradas como objeto dentro de state.
    state = {
        valor: parseInt(this.props.inicio)
    }

    //Creamos un metodo para incrementar el valor del contador.
    incrementarvalor = () =>{
        //Para modificar de state utilizamos setState
        //indicando mediante JSON el obejto/s que deseamos modificar.
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render(){

        return (
            <div>
                <h1>Class Component Contador JSX</h1>
                <h1 style={{color:"red"}}> Incio Contador: {this.props.inicio} </h1>
                <h1 style={{color:"green"}}>Valor del contador {this.state.valor}</h1>
                {/* La llamada a los metodos de la clase ser realiza de forma mas
                sencilla , no se utilizan parentesis ni nada, solamente el
                nombre del metodo a ejecutar */}
                <button onClick={this.incrementarvalor}>Incrementar Contador</button>

                {/* Vamos a llamar a este metodo mediante una funcion anonima */}
                <button onClick={ () => {
                    //PAra la llamada a los metodos de la clase debemos utilizar
                    //this.
                    this.incrementar();
                    //Para la llamada a function esterna no se utiliza
                    //la palabra this.
                    metodoExterno();
                }}> Incrementar </button>
            </div>
        )
    }

}

export default Contador;