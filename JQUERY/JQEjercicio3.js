$(document).ready(function () {
    $("#boton").click(function () { 
        
        var texto = $("#caja").val();

        var parrafo = $("<p>",{"text":texto , "style":"color:red"});

        $("#contenedor").append(parrafo);


        parrafo.click(function(){
            var nuevo = $("#caja").val();
            $(this).text(nuevo);
        })

    });
});