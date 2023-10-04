$(document).ready(function () {
    //Al dar click sobre una phara lo siguiente.
    $("p").click(function () { 
        //Creamos un array de colores.
        var colores = ["blue" , "red" , "yellow" , "green" , "orange"];
        //Recorremos cada una de las etiquetas.
        $("p").each(function(){
            //Guardamos en la variable
            var indice = parseInt(Math.random() * colores.length);
            //
            var color = colores[indice];
            $(this).css("background-color",color);
        });

    });
});