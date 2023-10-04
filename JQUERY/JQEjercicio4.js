$(document).ready(function () {
    //Se activa si hay un cambio en el id rango (en este caso si se moviendo a lo largo de la barra).
    $("#rango").change(function () {
        //Guardamos en la variable el numero de imagenes. 
        var numimg = parseInt($(this).val());
        //Limpiamos el contenido del div (#contenedor).
        $("#contenedor").text("");
        //Bucle para recorrer todas las imagenes.
        for(var i = 1 ; i < numimg ; i++){
            //Guardamos en la variable la imagen que deseamos.
            var imagen = $("<img>" , { "src" : "Images/goku.jpg"});
            //Añadimos imagenes(Hijo) al contenedor(Padre)
            $("#contenedor").append(imagen);
            //Al pasar el raton por encima de la imagen se añadira la nueva imagen(perro).
            imagen.mouseover(function () { 
               $(this).attr("src", "Images/perro.jpg"); 
            });
            //Al salir el raton de la imagen se añadira la nueva imagen (goku).
            imagen.mouseout(function(){
                $(this).attr("src","Images/goku.jpg");
            });
        }
    });
});