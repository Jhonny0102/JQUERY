$(document).ready(function () {
    //CGuardamos el documento xml dentro de data.
    $.get("documentos/coches.xml",function (data) {
        //Mostrar Mensaje.
        console.log("cargado");
        //Recorremos todas las etiquetas coche.
        $(data).find("coche").each(function(){
            //Guardamos la marca de cada etiqueta.
            var marca = $(this).find("marca").text();
            //Guardamos el atributo de coche.
            var idcoche = $(this).attr("idcoche");
            //Creamos un bojeteo tipo option con sus atributos.
            var mostrarselect = $("<option>" , {
                "text" : marca ,
                "value" : idcoche
            });
            //Agregamos al id indicado el objeto creado anteriormente.
            $("#listacoches").append(mostrarselect);
        });
    });
    //Al dar click hara lo siguiente.
    $("#cargar").click(function () { 
        //Variable vacia.
        var html = "";
        //Guardamos el valor del select.
        var seleccionado = $("#listacoches").val();
        //OKconsole.log(seleccionado);
        //Guardamos el documento xml en data.
        $.get("documentos/coches.xml",function (data) {
            //Creamos una variable donde le indicamos un flitro.En este caso el id del 
            //coche tendra el id seleccionado del select.
            var filtro = "coche[idcoche=" + seleccionado + "]";
            //console.log(filtro);
            //Guardamos en la variable nodo el primer objeto encontrado con el filtro.
            var nodo = $(data).find(filtro).first();
            //console.log(nodo);
            //Guardamos en las variables el texto de cada etiqueta.
            var marca = $(nodo).find("marca").text();
            var modelo = $(nodo).find("modelo").text();
            var imagen = $(nodo).find("imagen").text();
            //console.log(imagen);
            //Pintamos la tabla y sus valores.
            html += "<tr>";
            html += "<td>" + marca + "</td>";
            html += "<td>" + modelo + "</td>";
            html += "<td><img src=" + imagen + " width=100px height=100px></td>";
            html += "</tr>";
            //Agregamos al html el objeto creado anteriormente.
            $("table tbody").append(html);
        });
    });

});