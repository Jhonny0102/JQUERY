$(document).ready(function () {
    //Al pasar el raton por encima del bojeto.
    $("img").mouseover(function () { 
        $(this).attr("src", "Images/perro.jpg");
    });
    //Al abandanor el raton del objeto.
    $("img").mouseout(function () { 
        $(this).attr("src", "Images/gpku.jpg");
    });
    //Al dar click en el objeto img
    $("img").click(function () { 
        //Guardamos en la variable imagen el atributo que tiene en ese momento del click.
        var imagen = $(this).attr("src");
        //Imprimimos por consola la siguiente frase.
        console.log("Pulsando sobre : " + imagen);
        //Condicion donde detecta si es el perro o no.
        if(imagen == "Images/perro.jpg"){
            console.log("Es el perro");
        }
        
    });
});