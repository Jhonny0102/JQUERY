// $(document).ready(function () {
    
//     $("#buscarnota").click(function () { 
//         var nota = $("#nota").val();
//         var html = "";
//         console.log(nota);

//         $.get("documentos/alumnos.xml", function (data) {
//             var filtro = "nota:contains("+nota+")";

//             $(data).find(filtro).each(function(){
//                 var padre = $(this).parent();
//                 var nombre = $(padre).find("nombre").text();
//                 var apellidos = $(padre).find("apellidos").text();

//                 html += "<td>" + nombre + "</td>";
//                 html += "<td>" + apellido + "</td>";
//                 html += "</tr>";
//             });
//         });
        
//     });

// });

$(document).ready(function () {
    
    $("#buscarnota").click(function () { 
        
        var nota = parseInt($("#nota").val());

        var html = "";
        //Obtenemos el documetno xml y lo guardamos en data.
        $.get("documentos/alumnos.xml", function (data) {
            //Recorremos por todas las etiquetas alumno
            $(data).find("alumno").each(function(){
                //Capturamos el texto del apartado nota y lo guardamos.
                var notaalumno = parseInt($(this).find("nota").text());
                //Condicion donde comparamos las notas.
                if(notaalumno >= nota){
                    //Si es mayor o igual guardamos sus datos.
                    var nombre = $(this).find("nombre").text();

                    var apellido = $(this).find("apellidos").text();
                    //Pintamos 
                    html += "<tr>";

                    html += "<td>" + nombre + "</td>";

                    html += "<td>" + apellido + "</td>";

                    html += "<td>" + notaalumno + "</td>";

                    html += "</tr>";
                }
                //Agregamos el dibujo.
                $("table tbody").html(html);

            });

        });
        
    });


});