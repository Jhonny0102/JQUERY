import { useState } from "react";

function Contar (){
    const [numero, setNumero] = useState(0);
    
    const sumarNumero = () => {
        setNumero(numero+1);

    }
    return (
        <div>
            <h1>Ejemplo Contador</h1>
            <h2 style={{color:"green"}}>Contador {numero}</h2>
            <button onClick={ () => sumarNumero()}>Sumar Contador</button>
            <button onClick={ () => { setNumero (numero - 1) } }>Restar Contador</button>
        </div>
    );
}

export default Contar;