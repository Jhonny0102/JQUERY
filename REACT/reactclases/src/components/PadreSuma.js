//Importamos los archivos necesarios.
import { Component } from "react";
import HijoSuma from "./HijoSuma";
//Clase padre , donde le damos nombre y heredamos de component. SIEMPREE
class PadreSuma extends Component {
    //Guardamos en la zona de state para posteriormente ir añadiendo/modificando estos valores.
    state = {
        //Array con 3 valores.
        numeros : [21,76,8],
        //variable con valor 0.
        total : 0
    }
    //Metodo para generar numeros aleatorios y añadirlos al array.
    generarNumero = () => {
        //variable con valor de un numero ramdon del 1 al 100.
        var numeros = parseInt(Math.random() * 100) + 1 ;
        //console.log(numeros);
        
        //Añadimos el nuevo numero al array "numeros"
        this.state.numeros.push(numeros);
        
        //Entramos al ajuste del state.
        this.setState ({
            //
            numeros : this.state.numeros
        });
    }

    capturarNumero = (numeroCapturado) => {

        console.log(numeroCapturado);

        this.setState ({

            total : this.state.total + numeroCapturado
        })

    }

    render(){

        return (
            <div>
                <h1 style={{color:"red"}}>Padre Suma : {this.state.total}</h1>
                <button onClick={ () => this.generarNumero() }>Generar Numero</button>
                <hr></hr>
                <h2>
                    {
                        this.state.numeros.map( (numero,index) => {
                            return (<HijoSuma key={index} numero={numero} capturarNumero={this.capturarNumero} />);
                        })
                    }
                </h2>
            </div>
        );

    }

}

export default PadreSuma;


// 1. Lo primero de todo es importar todos los js necesarios y probar el h1.
// 2. Ir construyendo la practica de a poco , empezanos por lo mas facil y sencillo.
// 3. Cuando hayas terminado lo facil, empezamos con lo complejo y vas a ir probando de a poco y con console log
// para ver que estas mandando.
// 4. Mira los otros ejercicios para ver como var, y asi te guias.