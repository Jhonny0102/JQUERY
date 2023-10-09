$(document).ready(function () {
    //Al dar click en el boton hara lo siguiente.
    $("#boton").click(function () { 
        //Prepara el documento JSON y lo guarda en data.
        $.getJSON("documentos/tareas.json", function (data) {
            //Mostramos mensaje , para comprobar que ha entrado al servicio.
            console.log("Leyendo servicio");
            //Variable vacia.
            var html = "";
            //Recorremos todo el documento json simple y lo guardamos los datos en key y value.
            $.each(data, function(key,value){
                //Pintamos en el html.
                html += "<li>Key: " + key 
                + ",Value: " + value + "</li>"; 
            });
            $("#tareas").html(html);
        });
        
    });
});