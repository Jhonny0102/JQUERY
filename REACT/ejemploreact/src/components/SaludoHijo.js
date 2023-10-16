function SaludoHijo(props){
    //Capturamos en una variable de metodo el props que viene del padre.
    var ejecutar = props.metodoPadre;
    var idhijo = props.idhijo;
    
    return (
        
    <div>
        <h1 style={{color:"red"}}>Saludo Hijo</h1>
        <button onClick={ () => ejecutar("Alicia " + idhijo)} >LLamar al Padre</button>
    </div>);
}

export default SaludoHijo;