$(document).ready(function () {
    //Bucle de 10 vueltas para hacer lo siguiente
    for( var i = 1 ; i < 10 ; i++){
        //Guardamos en la variable nuemeros aleatorios entre 1 y 100.
        let aleatorio = parseInt(Math.random() * 100) + 1;
        //Creamos un objeto button con sus propiedades.
        var boton = $("<button>",{
            "text": aleatorio,
            "value": aleatorio
        });
        //Creamos dentro del padre los objetos.
        $("#botones").append(boton);
        //Detecta si dan un click en un boton.
        boton.click(function() { 
            var numero = parseInt($(this).val()); 
            var suma = parseInt($("#resultado").text()); 
            suma += numero; 
            $("#resultado").text(suma); 
        }) 
    };
});
