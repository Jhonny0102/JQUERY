$(document).ready(function () {
    $("#botonclientes").click(function () { 
        //Metodo AJAX, completamos sus datos.
        $.ajax({
            type: "GET",
            url: "documentos/clientes.json",
            dataType: "json",
            //Si funciona hara lo siguiente.
            success: function (data) {
                //Mostrar Mensaje por consola.
                console.log("Leyendo servicio");
                //variable vacia.
                var html = "";
                //Recorremos cada uno de los datos del json , donde pasamos dos variables.Estos pueden
                //Tener el nombre que queramos pero ponemos algo relacionado.
                $.each(data.clientes, function(index,cliente){
                    //Guardamos en la variable el dato que queremos almacenar.
                    var nombre = cliente.nombre;
                    html += "<h1>" + nombre + "</h1>";
                });
                $("#caja").html(html);
            },
            error:function(){
                console.log("Error al leer el servicio");
            }
        });
        
    });
});