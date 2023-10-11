//Se crea el componente de esta forma.
function Saludo(props){
    //Podemos declarar variables dentro de la funcion
    //Variable con valor estatico, que no cambia.
    var dato="Mañana es fiesta y el vierens tambien";
    //variable con valor dinamico, depende de lo que pase en los props
    //coge el valor.
    var nombre = props.nombre;
    var edad = props.edad;
    return(
        <div>
            <h1>Mi primer componente de Miercoles</h1>
            <h2>Dato objetivo:{dato}</h2>
            <h3>Mi otro mensaje , {nombre} y {edad}</h3>
        </div>
    );
}
//Exportamos el componente
export default Saludo;