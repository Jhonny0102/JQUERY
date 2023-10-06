//URL del sitio web , cuidado al copiar el link.
var url = "https://apicruddepartamentosxml.azurewebsites.net/";

$(document).ready(function () {
    //1. Metodo GET , obtenemos todos los datos.
    loaddepartamento();
    //2.Boton insertar, al dar click en el id indicado.
    $("#botoninsertar").click(function () { 
        //Guardamos los valores en las variables.
        var id = $("#cajaid").val();
        var nombre = $("#cajanombre").val();
        var localidad = $("#localidad").val();
        //Siguiente paso es saber en que formato esta el servicio , en este caso es xml
        //Insertamos el nuevo objeto con los datos del cliente.
        var dataXML = xmlformato(id,nombre,localidad);
        //Creamos una variable con el metodo que vamos a llamar.
        var request = "api/departamentos";
        //Metodo AJAX , donde guardamos los siguiente datos.
        $.ajax({
            type: "POST",//Tipo, en este caso como es insertar es pOST.
            url: url+request, //La url , en este caso es la combinacion de url + request.
            contentType: "text/xml", //Tipo de contenido, estamos con xml.
            data : dataXML, //Dato , pues la variable dataxml.
            success: function () { //Si todo va bion hara el siguiente function.
                //Mostramos Mensaje.
                console.log("Insertado correctamente");
                //Llamamos a la funcion loaddepartamento, donde carga de nuevo los datos.
                loaddepartamento();
            }
        });
        //Al dar click en el boton de cargar.
        $("#botonupdate").click(function () { 
            
            var id = $("#cajaid").val();
            var nombre = $("#cajanombre").val();
            var localidad = $("#localidad").val();

            var dataXML = xmlformato(id,nombre,localidad);

            var request = "api/departamentos";

            $.ajax({
                type: "PUT",
                url: url+request,
                contentType: "text/xml",
                data: dataXML,
                success: function () {
                    console.log("Modificado ok");
                    loaddepartamento();
                }
            });
        });
        //Eliminar dato.
        //Al daar lick en el boton con la id indicada-
        $("#botondelete").click(function () { 
            //Guardamos el valor del id indicado.
            var id = $("#cajaid").val();
            //guardamos la peticion en la variable. Aqui se guarda lo siguiente a la url.
            var request = "api/departamentos/" + id;
            //AJAX en este caso para eliminar un dato.
            $.ajax({
                url: url + request,
                type: "DELETE",
                success: function(){
                    console.log("Eliminado ok");
                    loaddepartamento();
                }
            });
            
        });

    });
});

//Funcion para cargar los datos.
function loaddepartamento(){
    //variable que guarda una una direccion.
    var request = "api/departamentos";
    //Guardamos el documento xml en data.
    $.get(url + request , function(data){
        //Mostrar Mensaje.
        console.log("leyendo servicio");
        //variable vacia.
        var html = "";
        //Recorremos todos las etiquetas Departamento de data.
        $(data).find("Departamento").each(function(){
            //Guardamos en las variables el texto que necesitamos.
            var id_departamento = $(this).find("IdDepartamento").text();
            var nombre = $(this).find("Nombre").text();
            var localidad = $(this).find("Localidad").text();
            //Dibujamos la siguiente tabla.
            html += "<tr>";
            html += "<td>" +id_departamento + "</td>";
            html += "<td>" +nombre + "</td>";
            html += "<td>" +localidad + "</td>";
            html += "</tr>";
        });
        //Agregamos la el dijo a la web.
        $("#tabla tbody").html(html);
    });
};

function xmlformato(id,nombre,localidad){
    var dataXML = 
        "<Departamento>"
        + "<IdDepartamento>" + id + "</IdDepartamento>"
        + "<Nombre>" + nombre + "</Nombre>"
        + "<Localidad>" + localidad + "</Localidad>"
        + "</Departamento>";
    return dataXML;
};