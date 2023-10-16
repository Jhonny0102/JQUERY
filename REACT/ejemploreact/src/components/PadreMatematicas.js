//Importas el hijo en este caso.
import Mates from "./Matematicas";
//Funcion principal.
function ParentMates (){
    //Metodo donde recibira un numero y lo multiplicara x 3.
    const tripleNumero = (numero) => {
        //Guarda en la variable el resultado.
        var triple = parseInt(numero) * 3 ;
        //Imprime mensaje.
        console.log("El triple de " + numero + " es " + triple);
    }
    //Devuelve en la pantalla lo siguiente.
    return (
        <div>
            <h1>Padre Matematicas</h1>
            {/* Padre - Hijo , el primer parametro donde se envia un numero. */}
            <Mates numero1="4" tripleNumero={tripleNumero} />
            {/* Hijo - Padre , el segundo parametro donde se envia el metodo creado en el padre. */}
            <Mates numero1="8" tripleNumero={tripleNumero} />
        </div>
    );
}

export default ParentMates;