//Funcion principal, donde recibe parametros gracias al props.
function Mates(props){
    //Guarda en la variable el metodo mandado desde padre.
    var metodoenviado = props.tripleNumero;
    //Guarda en la variable el parametro numero1.
    var numero = props.numero1;
    //Metodo donde se multiplica x 2 el parametro numero1.
    const dobleNumero = () => {
        //Guarda el resultado de la operacion.
        var doble = parseInt(numero) * 2;
        //Imprime el mensaje.
        console.log("El doble de " + numero + " es " + doble);
    }
    //Muestra en la pantalla
    return (
        <div>
            <h1>Hijo Matematicas</h1>
            {/* Boton que actua cuando das click y llama al metodo dobleNumero */}
            <button onClick={ () => dobleNumero()}>Boton Doble</button>
            {/* Boton que actua cuando das click , este llama al metodo del padre guardado anteriormente en metodoenviado y ademas le pasamos un parametro */}
            <button onClick={ () =>  metodoenviado(numero)}>Boton Triple</button>
        </div>
    );
}

export default Mates;