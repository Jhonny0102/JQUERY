function Metodos(){

    const mostrarMensaje = () => {
        console.log("Boton Pulsado");
    }


    return(

        <div>
            <h1>Ejemplo metodo React</h1>
            <button onClick={ () => mostrarMensaje() }>Mostrar Mensaje</button>
        </div>

    )
}

export default Metodos;