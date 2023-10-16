import SaludoHijo from "./SaludoHijo";
function SaludoPadre(){
    //Lo podemos llamar como queramos.
    const metodoPadre = (nombre) => {
        console.log("Ejecutando el metodo en el padre " + nombre);
    }

    return (
    <div>
        <h1 style={{color:"green"}}>Saludo Padre</h1>

        <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/>

    </div>);
}

export default SaludoPadre;