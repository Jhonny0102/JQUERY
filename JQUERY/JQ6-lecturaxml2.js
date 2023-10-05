$(document).ready(function () {
    //Al dar click en el id indicado hara lo siguiente.
    $("#cargar").click(function () {
        //Obtenemos los datos del documento xml indicado y lo guardmao sne data.
        $.get("documentos/departamentos.xml",function (data) {
            //Mensaje de consola.
            console.log("Lo cogio");
            //creamos una variable.
            var html = "";
            //Buscamos todos los DEPT del documento
            $(data).find("DEPT").each(function(){
                //Agreamos el texto a la variable.
                html += "<tr>";
                //Para obetner el atributo utilizamos . attr(ATRIBUTO).
                var numero = $(this).attr("DEPT_NO");
                //Como aun estamos en el elemento DEPT tenemos que buscar dentro de el,
                //Asi que buscamos dentro de este el DNOMBRE y guardamos su texto.
                var nombre = $(this).find("DNOMBRE").text();
                //Lo mismo que nombre.
                var localidad = $(this).find("LOC").text();
                //Dibujamos las celdas y asiganamos los valores.
                html += "<td>" + numero + "</td>";
                html += "<td>" + nombre + "</td>";
                html += "<td>" + localidad + "</td>";
                html += "</tr>";
            });
            //Escribimos en el id indicado el siguiente contenido html.
            $("#tabla tbody").html(html);
        });
    });
});