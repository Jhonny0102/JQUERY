import perro from "../../assets/images/perro.jpg"; 
import "./SumarNumeros.css";

function Suma(props){

    var imgsize = {
        width: "150px",
        height: "150px"
    }

    const cogerNumero1 = (numero1,numero2) => {
        numero1 = parseInt(props.numero1);
        numero2 = parseInt(props.numero2);
        var suma = numero1 + numero2;


        console.log(suma);
    }

    const cogerNumero2 = (numero1,numero2) => {
        
        numero1 = parseInt(props.numero1);
        numero2 = parseInt(props.numero2);
        var suma = numero1 + numero2;


        console.log(suma);
    }

    return (

        <div>
            <h1>Sumar Numerooo</h1>
            <button onClick={ () => cogerNumero1(8,6)} > Suma de 8 y 6 </button>
            <button onClick={ () => cogerNumero2(5,10)} > Suma de 5 y 10 </button>
            <h1>Imagenes</h1>
            <img src={perro} style={imgsize}/>
        </div>
    
    )
    
}
export default Suma